# ELearn - Next.js E-Learning Platform

A modern, full-featured e-learning platform built with Next.js 14, TypeScript, Prisma, and Tailwind CSS.

## Features

### For Students
- 🔍 Browse and search courses
- 📚 Enroll in courses
- 📹 Watch video lessons
- 📊 Track learning progress
- ⭐ Rate and review courses
- 👤 Manage profile and settings

### For Instructors
- 📝 Create and manage courses
- 📑 Organize content into chapters and lessons
- 📤 Upload videos and attachments
- 💰 Set course pricing
- 📈 View course analytics

### For Admins
- 👥 User management
- 🏷️ Category management
- 📊 Platform analytics
- ⚙️ System settings

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** MongoDB with Prisma ORM
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **State Management:** Zustand + React Query
- **Video Player:** React Player
- **File Upload:** UploadThing
- **Payments:** Stripe
- **UI Components:** Radix UI

## Project Structure

```
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Student dashboard
│   │   ├── dashboard/
│   │   ├── my-courses/
│   │   ├── browse/
│   │   └── profile/
│   ├── (course)/            # Course viewing
│   │   └── courses/
│   │       └── [courseId]/
│   ├── (instructor)/        # Instructor dashboard
│   │   └── instructor/
│   │       └── courses/
│   └── api/                 # API routes
│       ├── auth/
│       ├── courses/
│       ├── chapters/
│       └── enrollments/
├── components/
│   ├── auth/                # Authentication components
│   ├── dashboard/           # Dashboard components
│   ├── course/              # Course components
│   ├── instructor/          # Instructor components
│   ├── home/                # Home page components
│   ├── ui/                  # Reusable UI components
│   └── ...
├── lib/
│   ├── auth.ts              # NextAuth configuration
│   ├── db.ts                # Prisma client
│   └── utils.ts             # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── types/                   # TypeScript types

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd elearning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
- MongoDB connection URL (local or Atlas)
- NextAuth secret and URL
- OAuth provider credentials (Google, GitHub)
- Stripe keys
- UploadThing credentials

Example MongoDB URLs:
```env
# Local MongoDB
DATABASE_URL="mongodb://localhost:27017/elearning"

# MongoDB Atlas (Cloud)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority"
```

4. Set up MongoDB database:
```bash
# Generate Prisma Client for MongoDB
npx prisma generate

# Push schema to MongoDB (creates collections)
npx prisma db push
```

> 📖 See [MONGODB_SETUP.md](./MONGODB_SETUP.md) for detailed MongoDB configuration guide

5. (Optional) Seed the database:
```bash
npm run seed
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main models:

- **User:** Students, instructors, and admins
- **Course:** Course information
- **Chapter:** Course chapters
- **Lesson:** Individual lessons within chapters
- **Enrollment:** Student course enrollments
- **Progress:** Student learning progress
- **Review:** Course reviews and ratings
- **Category:** Course categories
- **Attachment:** Lesson attachments

## API Routes

### Public Routes
- `GET /api/courses` - List all published courses
- `GET /api/courses/[courseId]` - Get course details
- `GET /api/categories` - List all categories

### Protected Routes (Authentication Required)
- `POST /api/courses` - Create a new course (Instructor only)
- `PATCH /api/courses/[courseId]` - Update course (Instructor only)
- `DELETE /api/courses/[courseId]` - Delete course (Instructor only)
- `POST /api/courses/[courseId]/enroll` - Enroll in a course
- `POST /api/courses/[courseId]/chapters` - Create a chapter (Instructor only)
- `PUT /api/progress` - Update learning progress

## Development

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Database Management

```bash
# View database in Prisma Studio
npx prisma studio

# Push schema changes to MongoDB
npx prisma db push

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset

# Generate Prisma Client after schema changes
npx prisma generate
```

> **Note:** MongoDB with Prisma uses `db push` instead of migrations. This is the recommended approach for MongoDB.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t elearning .
docker run -p 3000:3000 elearning
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For support, email support@elearn.com or join our Slack channel.

