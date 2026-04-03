/**
 * Sidebar Component
 *
 * This component renders the left sidebar navigation of the YouTube homepage.
 * It displays navigation links and categories that users can click to filter content.
 *
 * Props:
 * - None currently, but could accept:
 *   - isOpen: boolean - whether sidebar is visible (for mobile responsiveness)
 *   - onClose: () => void - callback to close sidebar on mobile
 *   - activeCategory: string - currently selected category
 *   - onCategoryChange: (category: string) => void - callback when category changes
 */

"use client";

import { useState } from "react";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  // State to track which category is currently selected
  const [activeCategory, setActiveCategory] = useState("home");
  // State to track if sidebar is open on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Define the main navigation items for the sidebar
  const mainItems: SidebarItem[] = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      id: "shorts",
      label: "Shorts",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      ),
    },
    {
      id: "subscriptions",
      label: "Subscriptions",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      ),
    },
  ];

  // Define the library/user content items
  const libraryItems: SidebarItem[] = [
    {
      id: "library",
      label: "Library",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },
    {
      id: "history",
      label: "History",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 3a9 9 0 11-9 9h1.5A7.5 7.5 0 1113 4.5V3zm0 4v5.5h4" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 border-r border-gray-800 sticky top-0 h-screen overflow-y-auto z-30">
      {/* Main Navigation Section */}
      <div className="px-3 py-2 border-b border-gray-800">
        {mainItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveCategory(item.id)}
            className={`
              w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors
              ${
                activeCategory === item.id
                  ? "bg-gray-800 font-semibold text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }
            `}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Library Section */}
      <div className="px-3 py-2 border-b border-gray-800">
        {libraryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveCategory(item.id)}
            className={`
              w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors
              ${
                activeCategory === item.id
                  ? "bg-gray-800 font-semibold text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }
            `}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Subscriptions Section (could display subscribed channels here) */}
      <div className="px-3 py-2">
        <h3 className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Subscriptions
        </h3>
        {/* Placeholder for subscribed channels */}
        <div className="px-3 py-3 text-xs text-gray-500">
          No subscriptions yet
        </div>
      </div>
    </aside>
  );
}
