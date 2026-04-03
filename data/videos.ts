/**
 * Dummy video data for the YouTube homepage
 * This file contains mock video objects that would typically come from an API
 * Each video object has the following properties:
 * - id: unique identifier
 * - title: video title
 * - channel: channel name
 * - thumbnail: thumbnail image URL
 * - views: number of views
 * - uploadedTime: when the video was uploaded
 * - duration: video duration
 */

export interface Video {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  views: string;
  uploadedTime: string;
  duration: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Playlist | 음자마 라음 타게 되는 도구북 | GROOVE - JAZZHOP - WORK | 메이증의 - 카페 - 작업 - 집중 - 노동용- 드라이브",
    channel: "wobble 워블",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
    views: "84K views",
    uploadedTime: "1 month ago",
    duration: "10:39",
  },
  {
    id: "2",
    title: "I Left Fine Dining To Sell $2 Canteen Meals At My Former School",
    channel: "OGS",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    views: "348K views",
    uploadedTime: "1 month ago",
    duration: "7:44",
  },
  {
    id: "3",
    title: "Mix - HAMIGOWAY by Kuenga (Official Music Video)",
    channel: "Kuenga, Rebellions Bhutan, Tacit Noise, and more",
    thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    views: "1M+ views",
    uploadedTime: "2 months ago",
    duration: "4:20",
  },
  {
    id: "4",
    title: "Building the Perfect Gaming PC Setup",
    channel: "Tech Guru",
    thumbnail: "https://i.ytimg.com/vi/FDmIdOZYJT0/hqdefault.jpg",
    views: "156K views",
    uploadedTime: "3 weeks ago",
    duration: "15:32",
  },
  {
    id: "5",
    title: "Advanced React Patterns Explained",
    channel: "Web Dev Master",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    views: "89K views",
    uploadedTime: "2 weeks ago",
    duration: "22:15",
  },
  {
    id: "6",
    title: "Delicious Homemade Pizza Recipe",
    channel: "Cooking with Passion",
    thumbnail: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    views: "432K views",
    uploadedTime: "5 days ago",
    duration: "8:45",
  },
  {
    id: "7",
    title: "Travel Vlog: Exploring Tokyo Streets",
    channel: "World Explorer",
    thumbnail: "https://i.ytimg.com/vi/zUPL_Qzv0BQ/hqdefault.jpg",
    views: "203K views",
    uploadedTime: "1 week ago",
    duration: "18:20",
  },
  {
    id: "8",
    title: "Fitness Transformation: From Zero to Hero",
    channel: "Fit Daily",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    views: "567K views",
    uploadedTime: "4 days ago",
    duration: "12:30",
  },
  {
    id: "9",
    title: "JavaScript Tips and Tricks for Beginners",
    channel: "Code Academy",
    thumbnail: "https://i.ytimg.com/vi/3hmPRvpHWQc/hqdefault.jpg",
    views: "245K views",
    uploadedTime: "2 days ago",
    duration: "16:05",
  },
  {
    id: "10",
    title: "Beautiful Nature Documentary",
    channel: "Planet Earth",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    views: "1.2M views",
    uploadedTime: "3 months ago",
    duration: "45:00",
  },
  {
    id: "11",
    title: "How to Start Your Own Business",
    channel: "Entrepreneur Hub",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    views: "378K views",
    uploadedTime: "1 week ago",
    duration: "19:50",
  },
  {
    id: "12",
    title: "Music Production Masterclass",
    channel: "Beat Maker Pro",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    views: "156K views",
    uploadedTime: "5 days ago",
    duration: "31:15",
  },
];
