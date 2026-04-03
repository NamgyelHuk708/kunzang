/**
 * YouTube Homepage Clone - Main Page
 *
 * This is the main page of the application that combines all components:
 * - Navbar: Top navigation bar with search and user profile
 * - CategoryBar: Horizontal category filter bar
 * - Sidebar: Left navigation panel
 * - VideoGrid: Grid of video cards displaying videos
 *
 * The page imports dummy video data and displays it in a responsive grid layout.
 * It also manages state for sidebar visibility and category filtering.
 */

"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/CategoryBar";
import VideoGrid from "./components/VideoGrid";
import VideoModal from "./components/VideoModal";
import { videos } from "@/data/videos";

// Define available categories for filtering
const CATEGORIES = [
  "All",
  "Music",
  "Mixes",
  "Restaurants",
  "Korean cuisines",
  "Playlists",
  "APIs",
  "Gaming",
  "Cooking",
  "Travel",
  "Tech",
  "Entertainment",
];

export default function Home() {
  // State for sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for selected video modal
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(
    null
  );
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle sidebar visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter videos based on search query and selected category
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  // Handle video card click to open modal
  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="flex flex-col bg-gray-950 min-h-screen">
      {/* Navbar - sticky at top */}
      <Navbar
        onSidebarToggle={handleSidebarToggle}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Category Bar - below navbar, sticky */}
      <CategoryBar
        categories={CATEGORIES}
        activeCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      {/* Main content area with sidebar and video grid */}
      <div className="flex flex-1 relative">
        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar - hidden on mobile unless opened, visible on medium+ screens */}
        <div
          className={`
            fixed md:relative w-64 md:w-auto
            md:translate-x-0 md:opacity-100 md:z-0 md:block
            transition-all duration-300 ease-in-out z-50
            ${
              isSidebarOpen
                ? "translate-x-0 opacity-100 block"
                : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
            }
          `}
        >
          <Sidebar />
        </div>

        {/* Videos container with scrolling */}
        <div className="flex-1 overflow-y-auto">
          {/* Pass videos data to VideoGrid component */}
          {/* In production, you could filter videos here based on selectedCategory */}
          <VideoGrid videos={filteredVideos} onVideoClick={handleVideoClick} />
        </div>
      </div>

      {/* Video Modal - displays when a video is clicked */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
