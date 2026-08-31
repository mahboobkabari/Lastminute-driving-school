import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface PostcodeResult {
  postcode: string;
  admin_district?: string;
  parish?: string;
  admin_ward?: string;
  outcode?: string;
}

interface NominatimResponse {
  address?: {
    road?: string;
    suburb?: string;
    neighbourhood?: string;
    quarter?: string;
    city_district?: string;
    town?: string;
    city?: string;
    postcode?: string;
  };
  display_name?: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const latStr = searchParams.get("lat");
    const lngStr = searchParams.get("lng");

    if (!latStr || !lngStr) {
      return NextResponse.json(
        { success: false, error: "Latitude and longitude are required" },
        { status: 400 }
      );
    }

    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);

    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return NextResponse.json(
        { success: false, error: "Invalid coordinate values provided" },
        { status: 400 }
      );
    }

    // 1. Primary UK Reverse Geocoding via postcodes.io (Fast, reliable, official UK boundaries)
    try {
      const postcodeRes = await fetch(
        `https://api.postcodes.io/postcodes?lon=${lng}&lat=${lat}&limit=1`,
        {
          headers: { Accept: "application/json" },
          next: { revalidate: 3600 },
        }
      );

      if (postcodeRes.ok) {
        const postcodeData = await postcodeRes.json();
        if (postcodeData.status === 200 && Array.isArray(postcodeData.result) && postcodeData.result.length > 0) {
          const first: PostcodeResult = postcodeData.result[0];
          const postcode = first.postcode;
          const area = first.parish || first.admin_ward || first.admin_district || "";

          // Also attempt quick Nominatim street resolution if available
          let street = "";
          try {
            const osmRes = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
              {
                headers: {
                  "User-Agent": "LastminuteDrivingSchoolLondon/1.0 (info@lastminutedriving.co.uk)",
                  Accept: "application/json",
                },
                signal: AbortSignal.timeout(3000),
              }
            );
            if (osmRes.ok) {
              const osmData: NominatimResponse = await osmRes.json();
              if (osmData.address?.road) {
                street = osmData.address.road;
              }
            }
          } catch {
            // Non-blocking fallback
          }

          const parts: string[] = [];
          if (street) parts.push(street);
          if (area && area !== street) parts.push(area);
          if (postcode) parts.push(postcode);

          const formatted = parts.join(", ");

          return NextResponse.json({
            success: true,
            postcode: postcode,
            area: area,
            street: street || undefined,
            formatted: formatted || `${area} ${postcode}`.trim(),
          });
        }
      }
    } catch {
      // Fall through to Nominatim
    }

    // 2. Fallback Worldwide / General Reverse Geocoder (OSM Nominatim)
    try {
      const osmRes = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            "User-Agent": "LastminuteDrivingSchoolLondon/1.0 (info@lastminutedriving.co.uk)",
            Accept: "application/json",
          },
          signal: AbortSignal.timeout(4000),
        }
      );

      if (osmRes.ok) {
        const osmData: NominatimResponse = await osmRes.json();
        const addr = osmData.address || {};
        const road = addr.road || "";
        const suburb = addr.suburb || addr.neighbourhood || addr.quarter || addr.city_district || addr.town || addr.city || "";
        const postcode = addr.postcode || "";

        const parts: string[] = [];
        if (road) parts.push(road);
        if (suburb && suburb !== road) parts.push(suburb);
        if (postcode) parts.push(postcode);

        const formatted = parts.join(", ") || osmData.display_name?.split(",").slice(0, 3).join(", ") || "";

        if (formatted) {
          return NextResponse.json({
            success: true,
            postcode: postcode,
            area: suburb,
            street: road,
            formatted: formatted,
          });
        }
      }
    } catch {
      // Fallback
    }

    return NextResponse.json(
      {
        success: false,
        error: "Could not determine street address or postcode from current coordinates.",
      },
      { status: 404 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Geocoding service error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
