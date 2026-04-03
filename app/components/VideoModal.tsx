/**
 * VideoModal Component
 *
 * This component renders a modal dialog that displays detailed information
 * about a selected video when a user clicks on a video card.
 *
 * Features:
 * - Shows video thumbnail
 * - Displays video title, channel, views, and upload time
 * - Shows video description
 * - Like/Dislike buttons
 * - Subscribe button
 * - Share button
 * - Close button (X or clicking outside)
 *
 * Props:
 * - video: Video | null - the video to display (null to hide modal)
 * - isOpen: boolean - whether the modal is open
 * - onClose: () => void - callback when modal should close
 */

import { Video } from "@/data/videos";
import Image from "next/image";

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      {/* Modal container */}
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 left-full mr-4 z-10 p-2 hover:bg-gray-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-white"
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

        {/* Video thumbnail */}
        <div className="relative w-full bg-black aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded font-medium">
            {video.duration}
          </div>
        </div>

        {/* Video information */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-white mb-4">{video.title}</h2>

          {/* Channel and stats row */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              {/* Channel avatar */}
              <button className="w-12 h-12 rounded-full hover:bg-gray-800 flex items-center justify-center text-gray-300 transition-colors flex-shrink-0">
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
              {/* Channel info */}
              <div>
                <p className="text-white font-semibold">{video.channel}</p>
                <p className="text-gray-400 text-sm">Subscribe</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              {/* Like button */}
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-full transition-colors text-gray-300 hover:text-white">
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H9m0 0H7.08a2 2 0 01-1.519-3.374M9 9V5a2 2 0 012-2h.5.5.5.5V9"
                  />
                </svg>
                <span className="text-sm">Like</span>
              </button>

              {/* Dislike button */}
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-full transition-colors text-gray-300 hover:text-white">
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
                    d="M10 14H5.236a2 2 0 01-1.789-2.894l3.646-7.23a2 2 0 011.789-1.106H15m0 0h2.082a2 2 0 011.519 3.374M15 15v4a2 2 0 01-2 2h-.5.5-.5-.5v-4"
                  />
                </svg>
                <span className="text-sm">Dislike</span>
              </button>

              {/* Share button */}
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-full transition-colors text-gray-300 hover:text-white">
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
                    d="M8.684 13.342C9.589 12.41 10 11.077 10 9.5C10 5.91 7.716 3 5 3s-5 2.91-5 6.5S2.284 16 5 16c.342 0 .672-.034 1-.101l5.738 4.592a2.966 2.966 0 003.266-4.712L10 12.5"
                  />
                </svg>
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Video stats */}
          <div className="mb-6 text-gray-400 text-sm">
            <p>
              {video.views} • {video.uploadedTime}
            </p>
          </div>

          {/* Description */}
          <div className="bg-gray-800 rounded p-4">
            <h3 className="text-white font-semibold mb-2">Description</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This is a sample video from the YouTube Homepage Clone project.
              In a real application, this would be the full video description
              fetched from an API. Click the subscribe button to stay updated
              with more videos from this channel!
            </p>
          </div>
        </div>
      </div>

      {/* Close on outside click */}
      <div className="absolute inset-0 z-40" onClick={onClose} />
    </div>
  );
}
