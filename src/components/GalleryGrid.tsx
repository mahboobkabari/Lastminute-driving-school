"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { GalleryItem, galleryCategories } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Award } from "./Icon";

export interface GalleryGridProps {
  items: GalleryItem[];
  limit?: number;
}

export function GalleryGrid({ items, limit }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = items
    .filter((item) => activeCategory === "All" || item.category === activeCategory)
    .slice(0, limit || items.length);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    },
    [selectedPhotoIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setSelectedPhotoIndex(null);
            }}
            className={`rounded-full px-5 py-2.5 text-xs font-black tracking-tight transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[var(--navy)] text-white shadow-md shadow-slate-900/10"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-[var(--navy)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            role="button"
            tabIndex={0}
            aria-label={`View photo of ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedPhotoIndex(index);
              }
            }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-extrabold text-[var(--navy)] shadow-sm backdrop-blur-sm">
                  <Award className="h-3 w-3 text-emerald-600" />
                  {item.category}
                </span>
              </div>

              {/* Hover Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                <div className="text-xs font-black">{item.title}</div>
                <div className="text-[11px] text-slate-200 line-clamp-1">{item.caption}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Pass photo preview"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            aria-label="Close photo preview"
            className="absolute top-5 right-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              );
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              );
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-hidden rounded-3xl bg-slate-900 border border-white/15 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] max-h-[70vh] w-full bg-slate-950">
              <Image
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-6 bg-slate-900">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-red-600/20 text-red-300 border border-red-500/30 px-3 py-0.5 text-xs font-black">
                  {filteredItems[selectedPhotoIndex].category}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Photo {selectedPhotoIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-black text-white">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {filteredItems[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
