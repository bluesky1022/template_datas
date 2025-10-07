# Next.js E-Learning Platform - Project Structure

## 📁 Project Hierarchy

```
elearning-platform/
│
├── 📂 app/                          # Next.js 14 App Router
│   ├── 📂 (auth)/                   # Authentication Routes Group
│   │   ├── 📂 login/
│   │   │   └── page.tsx             # Login page
│   │   └── 📂 register/
│   │       └── page.tsx             # Registration page
│   │
│   ├── 📂 (dashboard)/              # Student Dashboard Routes Group
│   │   ├── layout.tsx               # Dashboard layout with sidebar
│   │   ├── 📂 dashboard/
│   │   │   └── page.tsx             # Main dashboard page
│   │   ├── 📂 my-courses/
│   │   │   └── page.tsx             # Enrolled courses page
│   │   ├── 📂 browse/
│   │   │   └── page.tsx             # Browse all courses
│   │   └── 📂 profile/
│   │       └── page.tsx             # User profile settings
│   │
│   ├── 📂 (course)/                 # Course Viewing Routes Group
│   │   └── 📂 courses/
│   │       └── 📂 [courseId]/
│   │           ├── page.tsx         # Course details page
│   │           └── 📂 chapters/
│   │               └── 📂 [chapterId]/
│   │                   └── page.tsx # Chapter/lesson viewer
│   │
│   ├── 📂 (instructor)/             # Instructor Routes Group
│   │   └── 📂 instructor/
│   │       └── 📂 courses/
│   │           ├── page.tsx         # Instructor courses list
│   │           ├── 📂 create/
│   │           │   └── page.tsx     # Create new course
│   │           └── 📂 [courseId]/
│   │               └── 📂 edit/
│   │                   └── page.tsx # Edit course
│   │
│   ├── 📂 api/                      # API Routes
│   │   ├── 📂 auth/
│   │   │   └── 📂 [...nextauth]/
│   │   │       └── route.ts         # NextAuth handler
│   │   └── 📂 courses/
│   │       ├── route.ts             # GET, POST courses
│   │       └── 📂 [courseId]/
│   │           ├── route.ts         # GET, PATCH, DELETE course
│   │           └── 📂 enroll/
│   │               └── route.ts     # POST enrollment
│   │
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles
│
├── 📂 components/                   # React Components
│   ├── 📂 auth/                     # Authentication components
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   │
│   ├── 📂 dashboard/                # Dashboard components
│   │   ├── sidebar.tsx
│   │   ├── navbar.tsx
│   │   ├── user-nav.tsx
│   │   ├── dashboard-cards.tsx
│   │   ├── recent-courses.tsx
│   │   └── progress-overview.tsx
│   │
│   ├── 📂 home/                     # Home page components
│   │   ├── hero.tsx
│   │   ├── featured-courses.tsx
│   │   ├── categories.tsx
│   │   ├── stats.tsx
│   │   ├── testimonials.tsx
│   │   └── cta.tsx
│   │
│   ├── 📂 courses/                  # Course listing components
│   │   ├── courses-list.tsx
│   │   └── courses-filter.tsx
│   │
│   ├── 📂 course/                   # Single course components
│   │   ├── course-header.tsx
│   │   ├── course-content.tsx
│   │   ├── course-instructor.tsx
│   │   ├── course-reviews.tsx
│   │   ├── course-sidebar.tsx
│   │   ├── video-player.tsx
│   │   ├── chapter-content.tsx
│   │   ├── chapter-navigation.tsx
│   │   └── course-progress.tsx
│   │
│   ├── 📂 instructor/               # Instructor components
│   │   ├── instructor-courses-list.tsx
│   │   ├── course-form.tsx
│   │   ├── course-edit-form.tsx
│   │   └── chapters-list.tsx
│   │
│   ├── 📂 profile/                  # Profile components
│   │   ├── profile-form.tsx
│   │   ├── security-settings.tsx
│   │   └── notification-settings.tsx
│   │
│   ├── 📂 ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── toaster.tsx
│   │
│   ├── navbar.tsx                   # Main navigation
│   ├── footer.tsx                   # Footer
│   ├── search-input.tsx             # Search component
│   ├── providers.tsx                # App providers wrapper
│   └── theme-provider.tsx           # Theme provider
│
├── 📂 lib/                          # Utility functions & configs
│   ├── auth.ts                      # NextAuth configuration
│   ├── db.ts                        # Prisma client
│   └── utils.ts                     # Helper functions
│
├── 📂 prisma/                       # Database
│   └── schema.prisma                # Database schema
│
├── 📂 types/                        # TypeScript types
│   └── next-auth.d.ts               # NextAuth type definitions
│
├── 📂 public/                       # Static assets
│   └── (images, fonts, etc.)
│
├── 📄 package.json                  # Dependencies
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 tailwind.config.js            # Tailwind CSS config
├── 📄 postcss.config.js             # PostCSS config
├── 📄 next.config.js                # Next.js config
├── 📄 .env                          # Environment variables
├── 📄 .env.example                  # Environment template
├── 📄 .gitignore                    # Git ignore rules
└── 📄 README.md                     # Documentation

```

## 🗺️ Route Structure

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/courses/[courseId]` - Course details page
- `/browse` - Browse courses

### Protected Routes (Require Authentication)

#### Student Routes
- `/dashboard` - Student dashboard
- `/my-courses` - Enrolled courses
- `/profile` - User profile & settings
- `/courses/[courseId]/chapters/[chapterId]` - Watch lessons

#### Instructor Routes
- `/instructor/courses` - Manage courses
- `/instructor/courses/create` - Create new course
- `/instructor/courses/[courseId]/edit` - Edit course

### API Routes
- `POST /api/auth/[...nextauth]` - Authentication
- `GET /api/courses` - List courses
- `POST /api/courses` - Create course
- `GET /api/courses/[courseId]` - Get course details
- `PATCH /api/courses/[courseId]` - Update course
- `DELETE /api/courses/[courseId]` - Delete course
- `POST /api/courses/[courseId]/enroll` - Enroll in course

## 🎨 Component Organization

### Layout Components
- **Navbar** - Main navigation bar
- **Footer** - Site footer
- **Sidebar** - Dashboard sidebar navigation
- **DashboardNavbar** - Dashboard top navigation

### Feature Components

#### Authentication
- `LoginForm` - Email/password login
- `RegisterForm` - User registration

#### Dashboard
- `DashboardCards` - Statistics cards
- `RecentCourses` - Continue learning section
- `ProgressOverview` - Weekly activity

#### Courses
- `CoursesList` - Grid of courses
- `CoursesFilter` - Filter courses
- `CourseHeader` - Course hero section
- `CourseContent` - Course curriculum
- `CourseSidebar` - Course info & enrollment

#### Instructor
- `InstructorCoursesList` - Manage courses
- `CourseForm` - Create course form
- `CourseEditForm` - Edit course form
- `ChaptersList` - Manage chapters

## 🗃️ Database Models (MongoDB)

### Core Models
- **User** - Students, instructors, admins (uses ObjectId)
- **Course** - Course information (uses ObjectId)
- **Chapter** - Course chapters (uses ObjectId)
- **Lesson** - Individual lessons (uses ObjectId)
- **Category** - Course categories (uses ObjectId)

### Relationship Models
- **Enrollment** - User-Course relationship (uses ObjectId references)
- **Progress** - Learning progress tracking (uses ObjectId references)
- **Review** - Course reviews & ratings (uses ObjectId references)
- **Attachment** - Lesson attachments (uses ObjectId references)

> **Note:** All IDs use MongoDB ObjectId format (`@id @default(auto()) @map("_id") @db.ObjectId`)

## 🔐 User Roles

1. **Student** - Browse and enroll in courses
2. **Instructor** - Create and manage courses
3. **Admin** - Platform administration

## 🎯 Key Features

### For Students
✅ Browse courses by category
✅ Search functionality
✅ Course enrollment
✅ Video lessons
✅ Progress tracking
✅ Course reviews
✅ Profile management

### For Instructors
✅ Create courses
✅ Manage curriculum
✅ Upload videos
✅ Set pricing
✅ View analytics

### Platform Features
✅ Authentication (Email, OAuth)
✅ Responsive design
✅ Dark mode support
✅ Payment integration (Stripe)
✅ File uploads
✅ Real-time updates

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables
3. Initialize database: `npx prisma generate && npx prisma db push`
4. Run development server: `npm run dev`
5. Open http://localhost:3000

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** MongoDB + Prisma ORM
- **Auth:** NextAuth.js
- **Styling:** Tailwind CSS
- **State:** Zustand + React Query
- **Payments:** Stripe
- **Video:** React Player
- **Upload:** UploadThing

## 📝 Notes

- Route groups `(auth)`, `(dashboard)`, `(course)`, `(instructor)` organize routes without affecting URLs
- All dashboard routes share the same sidebar layout
- Course viewing has a separate layout optimized for learning
- API routes follow RESTful conventions
- Components are organized by feature for better maintainability

