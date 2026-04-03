/**
 * VideoGrid Component
 *
 * This component renders a grid of video cards.
 * It:
 * - Takes an array of videos and maps over them
 * - Renders each video as a VideoCard component
 * - Uses CSS Grid to create a responsive layout that adjusts columns
 *   based on screen size (1 col on mobile, 2 on tablet, 4 on desktop)
 *
 * Props:
 * - videos: Video[] - array of video objects to display
 * - onVideoClick: (video: Video) => void - callback when a video card is clicked
 */

import { Video } from "@/data/videos";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  onVideoClick?: (video: Video) => void;
}

export default function VideoGrid({ videos, onVideoClick }: VideoGridProps) {
  return (
    <div className="px-4 py-6">
      {/* Grid container with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Map over videos array and render a VideoCard for each video */}
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} onClick={onVideoClick} />
        ))}
      </div>
    </div>
  );
}
