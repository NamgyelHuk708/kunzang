# YouTube Homepage Clone

A fully responsive YouTube homepage recreation built with **Next.js** and **React**, demonstrating key React concepts like component composition, props, and state management.

## 📋 Project Description

This project recreates the YouTube homepage user interface as a static web application. It showcases how to build a modern, responsive web application using industry-standard React tools and best practices. The application displays a grid of video cards with mock data, featuring a navigation bar, sidebar menu, and interactive UI elements.

**Key Features:**
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Clean, modern UI matching YouTube's aesthetic
- 🔍 Search bar with mobile toggle functionality
- 🧭 Collapsible sidebar navigation
- 📺 Grid-based video display with hover effects
- ⚡ Fast page loads with Next.js optimizations
- 📦 Modular component architecture

## 🏗️ Component Architecture

### Component Hierarchy Diagram

```
App (page.tsx)
├── Navbar
│   ├── Logo
│   ├── SearchBar (with mobile toggle)
│   └── Icon Buttons (upload, notifications, profile)
├── Sidebar
│   ├── Main Navigation Items (Home, Shorts, Subscriptions)
│   ├── Library Section (Library, History)
│   └── Subscriptions Section
└── VideoGrid
    └── VideoCard (repeated for each video)
        ├── Thumbnail with duration badge
        ├── Video metadata
        └── More options menu
```

### Component Details

| Component | Location | Responsibility |
|-----------|----------|-----------------|
| **Navbar** | `app/components/Navbar.tsx` | Top navigation bar with logo, search, and user controls |
| **Sidebar** | `app/components/Sidebar.tsx` | Left navigation panel with menu items and categories |
| **VideoCard** | `app/components/VideoCard.tsx` | Individual video card with thumbnail, title, and metadata |
| **VideoGrid** | `app/components/VideoGrid.tsx` | Responsive grid container for displaying video cards |
| **Page** | `app/page.tsx` | Main layout combining all components |

## 💡 Implementation Decisions & Reasoning

### 1. **Next.js Framework Choice**
- ✅ Provides server-side rendering and static generation out of the box
- ✅ Built-in image optimization with `next/image` component
- ✅ Excellent developer experience with fast refresh
- ✅ File-based routing system simplifies structure
- ✅ Production-ready and scalable

### 2. **Tailwind CSS for Styling**
- ✅ Utility-first approach reduces custom CSS
- ✅ Responsive classes make mobile design easy (sm:, md:, lg:, xl:)
- ✅ Consistent design system with predefined colors and spacing
- ✅ Smaller CSS bundle compared to traditional CSS files
- ✅ Developer-friendly with autocomplete support

### 3. **Client Components for Interactivity**
- Used `"use client"` directive in Navbar and Sidebar for:
  - Search bar toggle on mobile
  - Active category state management
  - Interactive button states
- This approach keeps the app lightweight while enabling necessary interactivity

### 4. **Static Dummy Data**
- Mock video data stored in `data/videos.ts`
- Allows demonstration without API complexity
- Easy to swap with real API later
- TypeScript interfaces ensure type safety

### 5. **Responsive Grid System**
- Mobile: 1 column (`grid-cols-1`)
- Tablet: 2 columns (`sm:grid-cols-2`)
- Desktop: 3-4 columns (`lg:grid-cols-3 xl:grid-cols-4`)
- Uses `aspect-video` for consistent thumbnail dimensions

### 6. **Accessible Component Design**
- Semantic HTML elements (`<nav>`, `<aside>`, `<main>`)
- ARIA labels for icon buttons
- Proper heading hierarchy
- Keyboard-navigable interface

## 📦 Third-Party Dependencies

### Core Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| **next** | 16.2.2 | React framework for production |
| **react** | 19.0.0 | JavaScript library for UI |
| **react-dom** | 19.0.0 | React rendering for web |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| **tailwindcss** | 3.4.1 | Utility-first CSS framework |
| **@tailwindcss/postcss** | 4.0.5 | PostCSS plugin for Tailwind |
| **typescript** | 5.x | Static type checking |
| **eslint** | 9.x | Code linting |
| **eslint-config-next** | 16.x | ESLint config for Next.js |

### Why These Dependencies?
- **Next.js**: Industry standard for React apps, excellent performance
- **Tailwind CSS**: Rapid UI development with pre-built utilities
- **TypeScript**: Catch errors early and improve code maintainability
- **ESLint**: Enforce code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation & Setup

1. **Navigate to project directory**
   ```bash
   cd /home/namgyel/Desktop/SEM_6/kunzang/kunzang
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will auto-refresh as you make changes

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📱 Responsive Behavior

The application is fully responsive across all screen sizes:

### Mobile (< 640px)
- Single column video grid
- Collapsed sidebar (hidden, not visible)
- Search bar toggles to show/hide on demand
- Upload and notifications icons hidden
- Hamburger menu for navigation

### Tablet (640px - 1024px)
- Two-column video grid
- Sidebar still hidden
- Full search bar visible
- More icons visible in navbar

### Desktop (> 1024px)
- Three to four-column video grid
- Full sidebar visible (256px wide)
- Main content area shifts right to accommodate sidebar
- All navbar features visible
- Hover effects on video cards

### Testing Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon to toggle device emulation
3. Test different screen sizes:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

## 📂 Project Structure

```
kunzang/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx         # Top navigation component
│   │   ├── Sidebar.tsx        # Left sidebar component
│   │   ├── VideoCard.tsx      # Individual video card
│   │   └── VideoGrid.tsx      # Video grid container
│   ├── layout.tsx             # Root layout wrapper
│   ├── page.tsx               # Main homepage
│   └── globals.css            # Global styles
├── data/
│   └── videos.ts              # Dummy video data
├── public/                    # Static assets
├── package.json               # Dependencies
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Styling Approach

### Tailwind CSS Utilities Used
- **Layout**: `flex`, `grid`, `gap`, `overflow-*`
- **Spacing**: `p-*`, `m-*`, `px-*`, `py-*`
- **Colors**: `bg-white`, `text-gray-*`, `border-gray-*`
- **Responsive**: `hidden`, `md:flex`, `lg:grid`, `xl:grid-cols-4`
- **Interactions**: `hover:bg-gray-100`, `transition-*`, `group-hover:`

### Key CSS Classes Explained

```tsx
// Responsive grid that adapts to screen size
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
// Mobile: 1 column | Tablet: 2 | Desktop: 3-4 columns

// Sticky navbar
className="sticky top-0 z-50 bg-white"
// Stays at top, high z-index, white background

// Fixed sidebar
className="fixed left-0 top-14 h-[calc(100vh-56px)] md:flex hidden md:w-64"
// Hidden on mobile, visible on medium+ screens, 256px wide
```

## 🔧 Customization Guide

### Adding More Videos
Edit `data/videos.ts`:
```typescript
export const videos: Video[] = [
  {
    id: "13",
    title: "Your Video Title",
    channel: "Channel Name",
    thumbnail: "image-url",
    views: "123K views",
    uploadedTime: "2 days ago",
    duration: "10:30",
  },
  // Add more videos...
];
```

### Changing Colors
Edit `tailwind.config.ts` to customize the color scheme

### Adjusting Grid Columns
In `VideoGrid.tsx`, modify the grid class to change responsive columns

## 📝 Code Quality Features

✅ **Every component file includes:**
- Clear JSDoc comments explaining purpose
- Prop documentation in comments
- TypeScript interfaces for type safety
- Consistent naming conventions

✅ **Best practices implemented:**
- Single Responsibility Principle (each component does one thing)
- Props-based configuration (reusable components)
- Semantic HTML markup
- Accessibility features (ARIA labels)
- No unused imports
- Clean, readable code

✅ **Learning-friendly structure:**
- Beginner-friendly variable names
- Thorough code comments
- Logical component organization
- Easy to understand data flow

## 🎓 Learning Outcomes

By studying this project, students will understand:

1. **React Fundamentals**
   - Component composition and reusability
   - Props and prop drilling
   - Client vs Server components
   - State management with `useState`

2. **Next.js Concepts**
   - File-based routing
   - Image optimization
   - TypeScript integration
   - Development vs Production builds

3. **Web Design**
   - Responsive design principles
   - CSS Grid and Flexbox
   - Mobile-first approach
   - Component-based styling

4. **Best Practices**
   - Code organization
   - Naming conventions
   - Documentation
   - Accessibility

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Further Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web.dev - Responsive Design](https://web.dev/responsive-web-design-basics/)

## 📄 License

This project is created for educational purposes as part of a university assignment.

---

**Created:** April 2026  
**Assignment:** YouTube Homepage Clone - React/Next.js Project
