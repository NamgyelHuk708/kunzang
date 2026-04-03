/**
 * VideoCard Component
 *
 * This component renders a single video card displayed in the video grid.
 * Each card shows:
 * - Video thumbnail image
 * - Video title
 * - Channel name
 * - View count and upload time
 * - Video duration badge on the thumbnail
 *
 * Props:
 * - id: string - unique video identifier
 * - title: string - the title of the video
 * - channel: string - the name of the channel that uploaded the video
 * - thumbnail: string - URL of the thumbnail image
 * - views: string - number of views formatted as a string (e.g., "84K views")
 * - uploadedTime: string - how long ago the video was uploaded (e.g., "1 month ago")
 * - duration: string - the length of the video (e.g., "10:39")
 * - onClick: (video: Video) => void - callback when card is clicked
 */

import Image from "next/image";
import { Video } from "@/data/videos";

interface VideoCardProps extends Video {
  onClick?: (video: Video) => void;
}

export default function VideoCard({
  id,
  title,
  channel,
  thumbnail,
  views,
  uploadedTime,
  duration,
  onClick,
}: VideoCardProps) {
  // Handle card click to open modal
  const handleClick = () => {
    onClick?.({
      id,
      title,
      channel,
      thumbnail,
      views,
      uploadedTime,
      duration,
    });
  };

  return (
    <div className="cursor-pointer group" onClick={handleClick}>
      {/* Thumbnail Container */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden mb-3 aspect-video">
        {/* Thumbnail Image */}
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          priority={false}
        />

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded font-medium">
          {duration}
        </div>

        {/* Hover overlay with play button */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Info Container */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
          <button className="w-9 h-9 rounded-full hover:bg-gray-800 flex items-center justify-center text-gray-300 transition-colors">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Video Metadata */}
        <div className="flex-1 min-w-0">
          {/* Video Title */}
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-gray-100 text-white mb-1">
            {title}
          </h3>

          {/* Channel Name */}
          <p className="text-xs text-gray-400 hover:text-gray-200">
            {channel}
          </p>

          {/* Views and Upload Time */}
          <p className="text-xs text-gray-500">
            {views} • {uploadedTime}
          </p>
        </div>

        {/* More options menu button */}
        <button
          className="flex-shrink-0 p-1 hover:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="More options"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
