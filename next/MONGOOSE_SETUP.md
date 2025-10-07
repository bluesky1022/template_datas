# Mongoose + MongoDB Setup Guide

This project uses **Mongoose** (MongoDB ODM) for database operations.

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Setup MongoDB

**Option A - MongoDB Atlas (Cloud - Recommended):**

1. Create free account: https://www.mongodb.com/cloud/atlas/register
2. Create a cluster (M0 free tier - 512 MB)
3. Click "Connect" → "Connect your application"
4. Copy connection string

**Option B - Local MongoDB:**

```bash
# Download from: https://www.mongodb.com/try/download/community

# Or use Docker:
docker run -d -p 27017:27017 --name mongodb mongo
```

### Step 3: Configure Environment Variables

Create/update your `.env` file:

```env
# MongoDB Atlas (Cloud)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority"

# OR Local MongoDB
DATABASE_URL="mongodb://localhost:27017/elearning"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-in-production"

# OAuth (Optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

### Step 4: Run the Application

```bash
npm run dev
```

Visit: http://localhost:3000 🎉

## 📁 Project Structure

```
models/
├── User.ts              # User model (Students, Instructors, Admins)
├── Account.ts           # OAuth accounts
├── Session.ts           # User sessions
├── VerificationToken.ts # Email verification tokens
├── Category.ts          # Course categories
├── Course.ts            # Courses
├── Chapter.ts           # Course chapters
├── Lesson.ts            # Chapter lessons
├── Attachment.ts        # Lesson attachments
├── Enrollment.ts        # User course enrollments
├── Progress.ts          # Learning progress tracking
└── Review.ts            # Course reviews

lib/
└── mongodb.ts           # MongoDB connection handler
```

## 🗃️ Mongoose Models

### User Model
```typescript
{
  name: String
  email: String (unique)
  emailVerified: Date
  image: String
  password: String (hashed)
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'
  bio: String
  title: String
  timestamps: true
}
```

### Course Model
```typescript
{
  title: String (required)
  description: String
  imageUrl: String
  price: Number
  isPublished: Boolean (default: false)
  categoryId: ObjectId (ref: Category)
  instructorId: ObjectId (ref: User)
  timestamps: true
}
```

### Chapter Model
```typescript
{
  title: String (required)
  description: String
  videoUrl: String
  position: Number (required)
  isPublished: Boolean (default: false)
  isFree: Boolean (default: false)
  courseId: ObjectId (ref: Course)
  timestamps: true
}
```

### Enrollment Model
```typescript
{
  userId: ObjectId (ref: User)
  courseId: ObjectId (ref: Course)
  timestamps: true
  unique: [userId, courseId]
}
```

### Progress Model
```typescript
{
  userId: ObjectId (ref: User)
  chapterId: ObjectId (ref: Chapter)
  isCompleted: Boolean (default: false)
  timestamps: true
  unique: [userId, chapterId]
}
```

## 🔌 Database Connection

The connection is handled automatically using a singleton pattern:

```typescript
// lib/mongodb.ts
import connectDB from '@/lib/mongodb'

// In your API routes:
await connectDB()
// Now you can use Mongoose models
```

### Connection Features:
- ✅ Automatic connection pooling
- ✅ Connection caching (prevents multiple connections)
- ✅ Error handling
- ✅ Development & production ready

## 📝 Using Mongoose Models

### Create a Document
```typescript
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

await connectDB()

const user = await User.create({
  name: 'John Doe',
  email: 'john@example.com',
  password: hashedPassword,
  role: 'STUDENT'
})
```

### Find Documents
```typescript
// Find one
const user = await User.findOne({ email: 'john@example.com' })

// Find by ID
const user = await User.findById(userId)

// Find many
const users = await User.find({ role: 'STUDENT' })
```

### Update Documents
```typescript
// Find and update
const user = await User.findByIdAndUpdate(
  userId,
  { name: 'Jane Doe' },
  { new: true } // return updated document
)

// Update one
await User.updateOne(
  { _id: userId },
  { $set: { name: 'Jane Doe' } }
)
```

### Delete Documents
```typescript
// Find and delete
await User.findByIdAndDelete(userId)

// Delete one
await User.deleteOne({ _id: userId })

// Delete many
await User.deleteMany({ role: 'STUDENT' })
```

### Populate References
```typescript
// Single populate
const course = await Course.findById(courseId)
  .populate('categoryId')
  .populate('instructorId', 'name image')

// Multiple populates
const course = await Course.findById(courseId)
  .populate('categoryId', 'name slug')
  .populate('instructorId', 'name image bio')
  .lean() // returns plain JavaScript object
```

### Queries with Filters
```typescript
// Find published courses
const courses = await Course.find({ isPublished: true })
  .populate('categoryId')
  .sort({ createdAt: -1 })
  .limit(10)

// Count documents
const count = await Course.countDocuments({ isPublished: true })

// Check if exists
const exists = await User.exists({ email: 'john@example.com' })
```

## 🔐 Authentication

The project uses NextAuth.js with Mongoose:

```typescript
// lib/auth.ts
import User from '@/models/User'

// Credentials provider
async authorize(credentials) {
  await connectDB()
  
  const user = await User.findOne({ 
    email: credentials.email 
  })
  
  // Verify password with bcryptjs
  const isValid = await compare(
    credentials.password, 
    user.password
  )
  
  return user
}
```

## 📊 Indexes

Indexes are automatically created for:
- Unique fields (email, unique combinations)
- Reference fields (userId, courseId, etc.)
- Frequently queried fields

Custom indexes are defined in model schemas:
```typescript
// In Course model
CourseSchema.index({ categoryId: 1 })
CourseSchema.index({ instructorId: 1 })
CourseSchema.index({ isPublished: 1 })
```

## 🎯 Common Operations

### Enroll User in Course
```typescript
await connectDB()

const enrollment = await Enrollment.create({
  userId: '507f1f77bcf86cd799439011',
  courseId: '507f1f77bcf86cd799439012'
})
```

### Track Progress
```typescript
await connectDB()

const progress = await Progress.findOneAndUpdate(
  { userId, chapterId },
  { isCompleted: true },
  { upsert: true, new: true }
)
```

### Get User's Enrolled Courses
```typescript
await connectDB()

const enrollments = await Enrollment.find({ userId })
  .populate({
    path: 'courseId',
    populate: {
      path: 'instructorId',
      select: 'name image'
    }
  })
```

### Get Course with Chapters
```typescript
await connectDB()

const course = await Course.findById(courseId)
  .populate('categoryId')
  .populate('instructorId', 'name image bio')

const chapters = await Chapter.find({ 
  courseId,
  isPublished: true 
}).sort({ position: 1 })
```

## 🆘 Troubleshooting

### Connection Errors

**Error:** "MongoServerError: bad auth"
```
Solution: Check username/password in DATABASE_URL
```

**Error:** "MongooseServerSelectionError"
```
Solution:
1. Check if MongoDB is running (local)
2. Verify IP whitelist (Atlas)
3. Check internet connection
```

**Error:** "Model compilation error"
```
Solution: Clear Next.js cache
rm -rf .next
npm run dev
```

### Model Issues

**Error:** "OverwriteModelError"
```
Solution: Models use this pattern to prevent issues:
const User = models.User || mongoose.model('User', UserSchema)
```

**Error:** "Cast to ObjectId failed"
```
Solution: Ensure you're passing valid ObjectId strings
Use mongoose.Types.ObjectId.isValid(id) to validate
```

## 🔧 Development Tips

### 1. View Database in MongoDB Compass
```
Download: https://www.mongodb.com/try/download/compass
Connect with your DATABASE_URL
```

### 2. Seed Database
Create `scripts/seed.ts`:
```typescript
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Category from '@/models/Category'

async function seed() {
  await connectDB()
  
  await Category.create([
    { name: 'Development', slug: 'development' },
    { name: 'Design', slug: 'design' },
  ])
  
  console.log('✅ Database seeded')
}

seed()
```

### 3. Clear Collections
```typescript
// In development only!
await User.deleteMany({})
await Course.deleteMany({})
```

### 4. TypeScript Support
Models are fully typed:
```typescript
import User, { IUser } from '@/models/User'

const user: IUser = await User.findById(userId)
```

## 📚 Resources

- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Manual](https://www.mongodb.com/docs/manual/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [NextAuth.js](https://next-auth.js.org/)

## 🎉 You're All Set!

Your e-learning platform is now using Mongoose with MongoDB. Start building amazing features! 🚀

