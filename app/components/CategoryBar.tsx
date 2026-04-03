/**
 * CategoryBar Component
 *
 * This component renders a horizontal scrollable bar of category filter chips.
 * Users can click on categories to filter videos.
 *
 * Features:
 * - Horizontal scrolling on mobile
 * - Active category highlighting
 * - Props:
 *   - categories: string[] - array of category names
 *   - activeCategory: string - currently selected category
 *   - onCategorySelect: (category: string) => void - callback when category changes
 */

"use client";

import { useState, useRef, useEffect } from "react";

interface CategoryBarProps {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

export default function CategoryBar({
  categories,
  activeCategory,
  onCategorySelect,
}: CategoryBarProps) {
  // State for scroll position
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if scrolling is needed
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Scroll left function
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="sticky top-14 z-40 bg-gray-950 border-b border-gray-800 px-0 py-0">
      <div className="flex items-center relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-gray-950 to-transparent px-2 hover:from-gray-900 transition-all"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Categories scroll container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-3 scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`
                px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap
                transition-all duration-200 flex-shrink-0
                ${
                  activeCategory === category
                    ? "bg-white text-gray-950"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-gray-950 to-transparent px-2 hover:from-gray-900 transition-all"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
