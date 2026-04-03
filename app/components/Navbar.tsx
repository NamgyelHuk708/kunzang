/**
 * Navbar Component
 *
 * This component renders the top navigation bar of the YouTube homepage.
 * It includes:
 * - YouTube logo on the left
 * - Search bar in the center (with toggle functionality for mobile)
 * - Icons (upload, notifications, profile) on the right
 *
 * Props:
 * - onSidebarToggle: () => void - callback to toggle sidebar on mobile
 */

"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onSidebarToggle?: () => void;
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export default function Navbar({
  onSidebarToggle,
  onSearch,
  searchQuery = "",
}: NavbarProps) {
  // State to track if search input is active on mobile
  const [isSearchActive, setIsSearchActive] = useState(false);
  // Local state for search input
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Left section: Hamburger menu and logo */}
      <div className="flex items-center gap-4 min-w-max">
        {/* Hamburger menu button (would toggle sidebar) */}
        <button
          onClick={onSidebarToggle}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* YouTube Logo */}
        <Link href="/" className="flex items-center gap-1">
          <svg
            className="w-8 h-8 text-red-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="hidden sm:inline font-bold text-xl text-white">YouTube</span>
        </Link>
      </div>

      {/* Center section: Search bar */}
      {/* On mobile, only show search icon that toggles the search input */}
      {!isSearchActive && (
        <button
          onClick={() => setIsSearchActive(true)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-full"
          aria-label="Search"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      )}

      {/* Search input - shown on desktop always, on mobile when active */}
      <div
        className={`${
          isSearchActive
            ? "flex absolute left-0 top-0 right-0 bg-gray-900 px-4 py-3 gap-2"
            : "hidden md:flex"
        } flex-1 md:flex-none md:flex md:w-96 items-center`}
      >
        <input
          type="text"
          placeholder="Search"
          value={localSearchQuery}
          onChange={(e) => {
            setLocalSearchQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="flex-1 px-4 py-2 border border-gray-700 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <button
          className="px-6 py-2 bg-gray-800 border border-l-0 border-gray-700 rounded-r-full hover:bg-gray-700 transition-colors"
          aria-label="Search button"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Close search button on mobile */}
        {isSearchActive && (
          <button
            onClick={() => setIsSearchActive(false)}
            className="md:hidden p-2"
            aria-label="Close search"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Right section: Action icons */}
      <div className="flex items-center gap-2 md:gap-4 min-w-max">
        {/* Upload button - hidden on small screens */}
        <button
          className="hidden sm:p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Upload"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </button>

        {/* Notifications button - hidden on small screens */}
        <button
          className="hidden sm:p-2 hover:bg-gray-800 rounded-full transition-colors relative"
          aria-label="Notifications"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        {/* Profile button */}
        <button
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Profile"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
