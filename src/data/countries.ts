export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  placeholder?: string;
}

export const defaultCountry: Country = {
  code: "GB",
  name: "United Kingdom",
  dialCode: "+44",
  flag: "🇬🇧",
  placeholder: "07984 210509",
};

/**
 * Raw comprehensive international country dataset.
 * (Note: India and Nepal are completely excluded as requested).
 */
const rawCountries: Country[] = [
  // Featured top 4 countries
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", placeholder: "07984 210509" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", placeholder: "(555) 000-0000" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", placeholder: "(555) 000-0000" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", placeholder: "0400 000 000" },

  // Remaining international countries (A-Z)
  { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "🇦🇫", placeholder: "70 123 4567" },
  { code: "AL", name: "Albania", dialCode: "+355", flag: "🇦🇱", placeholder: "67 123 4567" },
  { code: "DZ", name: "Algeria", dialCode: "+213", flag: "🇩🇿", placeholder: "551 23 45 67" },
  { code: "AD", name: "Andorra", dialCode: "+376", flag: "🇦🇩", placeholder: "312 345" },
  { code: "AO", name: "Angola", dialCode: "+244", flag: "🇦🇴", placeholder: "923 123 456" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", placeholder: "11 1234-5678" },
  { code: "AM", name: "Armenia", dialCode: "+374", flag: "🇦🇲", placeholder: "77 123456" },
  { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹", placeholder: "0664 1234567" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994", flag: "🇦🇿", placeholder: "50 123 45 67" },
  { code: "BS", name: "Bahamas", dialCode: "+1242", flag: "🇧🇸", placeholder: "391-2345" },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭", placeholder: "3912 3456" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩", placeholder: "01712 345678" },
  { code: "BB", name: "Barbados", dialCode: "+1246", flag: "🇧🇧", placeholder: "234-5678" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪", placeholder: "0470 12 34 56" },
  { code: "BZ", name: "Belize", dialCode: "+501", flag: "🇧🇿", placeholder: "622-1234" },
  { code: "BJ", name: "Benin", dialCode: "+229", flag: "🇧🇯", placeholder: "90 12 34 56" },
  { code: "BM", name: "Bermuda", dialCode: "+1441", flag: "🇧🇲", placeholder: "295-1234" },
  { code: "BT", name: "Bhutan", dialCode: "+975", flag: "🇧🇹", placeholder: "17 12 34 56" },
  { code: "BO", name: "Bolivia", dialCode: "+591", flag: "🇧🇴", placeholder: "71234567" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387", flag: "🇧🇦", placeholder: "61 123 456" },
  { code: "BW", name: "Botswana", dialCode: "+267", flag: "🇧🇼", placeholder: "71 123 456" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷", placeholder: "(11) 91234-5678" },
  { code: "BN", name: "Brunei", dialCode: "+673", flag: "🇧🇳", placeholder: "871 2345" },
  { code: "BG", name: "Bulgaria", dialCode: "+359", flag: "🇧🇬", placeholder: "87 123 4567" },
  { code: "KH", name: "Cambodia", dialCode: "+855", flag: "🇰🇭", placeholder: "12 345 678" },
  { code: "CM", name: "Cameroon", dialCode: "+237", flag: "🇨🇲", placeholder: "6 71 23 45 67" },
  { code: "CL", name: "Chile", dialCode: "+56", flag: "🇨🇱", placeholder: "9 1234 5678" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳", placeholder: "138 0000 0000" },
  { code: "CO", name: "Colombia", dialCode: "+57", flag: "🇨🇴", placeholder: "300 123 4567" },
  { code: "CR", name: "Costa Rica", dialCode: "+506", flag: "🇨🇷", placeholder: "8312 3456" },
  { code: "HR", name: "Croatia", dialCode: "+385", flag: "🇭🇷", placeholder: "91 234 5678" },
  { code: "CY", name: "Cyprus", dialCode: "+357", flag: "🇨🇾", placeholder: "99 123456" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420", flag: "🇨🇿", placeholder: "601 123 456" },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰", placeholder: "20 12 34 56" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1809", flag: "🇩🇴", placeholder: "809-234-5678" },
  { code: "EC", name: "Ecuador", dialCode: "+593", flag: "🇪🇨", placeholder: "99 123 4567" },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬", placeholder: "010 1234 5678" },
  { code: "SV", name: "El Salvador", dialCode: "+503", flag: "🇸🇻", placeholder: "7012 3456" },
  { code: "EE", name: "Estonia", dialCode: "+372", flag: "🇪🇪", placeholder: "5123 4567" },
  { code: "ET", name: "Ethiopia", dialCode: "+251", flag: "🇪🇹", placeholder: "91 123 4567" },
  { code: "FJ", name: "Fiji", dialCode: "+679", flag: "🇫🇯", placeholder: "701 2345" },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮", placeholder: "040 1234567" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷", placeholder: "06 12 34 56 78" },
  { code: "GE", name: "Georgia", dialCode: "+995", flag: "🇬🇪", placeholder: "555 12 34 56" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", placeholder: "0151 23456789" },
  { code: "GH", name: "Ghana", dialCode: "+233", flag: "🇬🇭", placeholder: "024 123 4567" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷", placeholder: "691 234 5678" },
  { code: "GT", name: "Guatemala", dialCode: "+502", flag: "🇬🇹", placeholder: "5123 4567" },
  { code: "GY", name: "Guyana", dialCode: "+592", flag: "🇬🇾", placeholder: "609 1234" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰", placeholder: "9123 4567" },
  { code: "HU", name: "Hungary", dialCode: "+36", flag: "🇭🇺", placeholder: "20 123 4567" },
  { code: "IS", name: "Iceland", dialCode: "+354", flag: "🇮🇸", placeholder: "612 3456" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩", placeholder: "0812-3456-7890" },
  { code: "IR", name: "Iran", dialCode: "+98", flag: "🇮🇷", placeholder: "912 345 6789" },
  { code: "IQ", name: "Iraq", dialCode: "+964", flag: "🇮🇶", placeholder: "790 123 4567" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪", placeholder: "087 123 4567" },
  { code: "IL", name: "Israel", dialCode: "+972", flag: "🇮🇱", placeholder: "050-123-4567" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹", placeholder: "320 123 4567" },
  { code: "JM", name: "Jamaica", dialCode: "+1876", flag: "🇯🇲", placeholder: "876-123-4567" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵", placeholder: "090-1234-5678" },
  { code: "JO", name: "Jordan", dialCode: "+962", flag: "🇯🇴", placeholder: "7 9012 3456" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7", flag: "🇰🇿", placeholder: "701 123 4567" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪", placeholder: "0712 345678" },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼", placeholder: "9123 4567" },
  { code: "LV", name: "Latvia", dialCode: "+371", flag: "🇱🇻", placeholder: "21 234 567" },
  { code: "LB", name: "Lebanon", dialCode: "+961", flag: "🇱🇧", placeholder: "70 123 456" },
  { code: "LT", name: "Lithuania", dialCode: "+370", flag: "🇱🇹", placeholder: "612 34567" },
  { code: "LU", name: "Luxembourg", dialCode: "+352", flag: "🇱🇺", placeholder: "628 123 456" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾", placeholder: "012-345 6789" },
  { code: "MV", name: "Maldives", dialCode: "+960", flag: "🇲🇻", placeholder: "771-2345" },
  { code: "MT", name: "Malta", dialCode: "+356", flag: "🇲🇹", placeholder: "9912 3456" },
  { code: "MU", name: "Mauritius", dialCode: "+230", flag: "🇲🇺", placeholder: "5251 2345" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽", placeholder: "55 1234 5678" },
  { code: "MC", name: "Monaco", dialCode: "+377", flag: "🇲🇨", placeholder: "6 12 34 56 78" },
  { code: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦", placeholder: "612-345678" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱", placeholder: "06 12345678" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿", placeholder: "021 123 4567" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬", placeholder: "0803 123 4567" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴", placeholder: "412 34 567" },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲", placeholder: "9123 4567" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰", placeholder: "0300 1234567" },
  { code: "PA", name: "Panama", dialCode: "+507", flag: "🇵🇦", placeholder: "6123-4567" },
  { code: "PE", name: "Peru", dialCode: "+51", flag: "🇵🇪", placeholder: "912 345 678" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭", placeholder: "0917 123 4567" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱", placeholder: "501 234 567" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹", placeholder: "912 345 678" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦", placeholder: "3312 3456" },
  { code: "RO", name: "Romania", dialCode: "+40", flag: "🇷🇴", placeholder: "0721 234 567" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦", placeholder: "050 123 4567" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", placeholder: "8123 4567" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", placeholder: "082 123 4567" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷", placeholder: "010-1234-5678" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸", placeholder: "612 345 678" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰", placeholder: "071 234 5678" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪", placeholder: "070 123 45 67" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭", placeholder: "079 123 45 67" },
  { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼", placeholder: "0912 345 678" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭", placeholder: "081 234 5678" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1868", flag: "🇹🇹", placeholder: "868-123-4567" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷", placeholder: "532 123 45 67" },
  { code: "UG", name: "Uganda", dialCode: "+256", flag: "🇺🇬", placeholder: "0772 123456" },
  { code: "UA", name: "Ukraine", dialCode: "+380", flag: "🇺🇦", placeholder: "50 123 4567" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪", placeholder: "050 123 4567" },
  { code: "UY", name: "Uruguay", dialCode: "+598", flag: "🇺🇾", placeholder: "94 123 456" },
  { code: "VE", name: "Venezuela", dialCode: "+58", flag: "🇻🇪", placeholder: "412 1234567" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳", placeholder: "091 234 5678" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263", flag: "🇿🇼", placeholder: "077 123 4567" },
];

/**
 * Featured countries in explicit top order:
 * 1. 🇬🇧 United Kingdom (+44)
 * 2. 🇺🇸 United States (+1)
 * 3. 🇨🇦 Canada (+1)
 * 4. 🇦🇺 Australia (+61)
 */
export const FEATURED_COUNTRY_CODES = ["GB", "US", "CA", "AU"] as const;

// 1. Extract featured countries in exact specified order
const featuredCountries: Country[] = FEATURED_COUNTRY_CODES.map((code) => {
  const match = rawCountries.find((c) => c.code === code);
  if (!match) {
    throw new Error(`Featured country code "${code}" not found in raw countries list.`);
  }
  return match;
});

// 2. Extract remaining countries (excluding the 4 featured countries) and sort alphabetically A-Z by name
const remainingCountriesSorted: Country[] = rawCountries
  .filter((c) => !FEATURED_COUNTRY_CODES.includes(c.code as (typeof FEATURED_COUNTRY_CODES)[number]))
  .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

/**
 * Continuous country list: Featured 4 countries first, followed by all remaining countries in A-Z order.
 * No duplicates exist. India and Nepal are completely excluded.
 */
export const countries: Country[] = [...featuredCountries, ...remainingCountriesSorted];

/**
 * Normalizes phone input by removing redundant dial codes and combining cleanly.
 * Examples:
 * - ("+44", "07984 210509") => "+44 7984 210509"
 * - ("+44", "+447984210509") => "+44 7984 210509"
 * - ("+1", "(555) 123-4567") => "+1 5551234567"
 */
export function normalizePhoneNumber(dialCode: string, rawNumber: string): string {
  if (!rawNumber || !rawNumber.trim()) return "";

  // Strip non-digit characters except leading '+'
  let cleaned = rawNumber.trim().replace(/[^0-9+]/g, "");

  // If the user already typed the international dial code (e.g. +44 or 0044)
  const dialDigits = dialCode.replace(/[^0-9]/g, "");

  if (cleaned.startsWith("+" + dialDigits)) {
    cleaned = cleaned.slice(("+" + dialDigits).length);
  } else if (cleaned.startsWith("00" + dialDigits)) {
    cleaned = cleaned.slice(("00" + dialDigits).length);
  } else if (cleaned.startsWith(dialDigits) && dialDigits.length > 1) {
    // If entered without plus but starts with dial digits
    cleaned = cleaned.slice(dialDigits.length);
  }

  // Strip leading 0 for UK or standard trunk prefixes
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.replace(/^0+/, "");
  }

  // Remove any remaining non-digits
  cleaned = cleaned.replace(/\D/g, "");

  if (!cleaned) return "";

  return `${dialCode} ${cleaned}`;
}

/**
 * Validates phone number based on selected country.
 */
export function validatePhoneNumber(dialCode: string, rawNumber: string): { isValid: boolean; errorMessage?: string } {
  if (!rawNumber || !rawNumber.trim()) {
    return { isValid: false, errorMessage: "Please enter your contact phone number" };
  }

  const cleaned = rawNumber.replace(/\D/g, "");

  if (dialCode === "+44") {
    // UK validation:
    // With leading 0 (11 digits e.g. 07984210509, 02071234567) or without leading 0 (10 digits e.g. 7984210509)
    // Or full international format (+447984210509)
    const rawClean = rawNumber.replace(/[^0-9+]/g, "");
    const isUkMobileOrLandline =
      /^((\+44)|0)?([123789]\d{8,9})$/.test(rawClean) ||
      (cleaned.length >= 10 && cleaned.length <= 11);

    if (!isUkMobileOrLandline) {
      return {
        isValid: false,
        errorMessage: "Please enter a valid UK phone number (e.g. 07984 210509)",
      };
    }
    return { isValid: true };
  }

  // International numbers: ITU-T E.164 recommends 6 to 15 digits
  if (cleaned.length < 6 || cleaned.length > 15) {
    return {
      isValid: false,
      errorMessage: "Please enter a valid phone number (6–15 digits)",
    };
  }

  return { isValid: true };
}
