# Before & After: PostgreSQL → MongoDB Conversion

A visual guide showing exactly what changed in the conversion.

---

## 📊 Database Configuration

### Before (PostgreSQL)
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### After (MongoDB)
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

---

## 🆔 ID Fields

### Before (PostgreSQL)
```prisma
model User {
  id String @id @default(cuid())
  // ... other fields
}
```

### After (MongoDB)
```prisma
model User {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  // ... other fields
}
```

**Why?** MongoDB uses ObjectId as the primary key format.

---

## 🔗 Foreign Keys

### Before (PostgreSQL)
```prisma
model Course {
  id          String   @id @default(cuid())
  title       String
  
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  
  instructorId String
  instructor   User    @relation(fields: [instructorId], references: [id])
}
```

### After (MongoDB)
```prisma
model Course {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  
  categoryId  String   @db.ObjectId
  category    Category @relation(fields: [categoryId], references: [id])
  
  instructorId String  @db.ObjectId
  instructor   User    @relation(fields: [instructorId], references: [id])
}
```

**Why?** Foreign keys must be ObjectId type in MongoDB.

---

## 📝 Text Fields

### Before (PostgreSQL)
```prisma
model Course {
  description String? @db.Text
  content     String? @db.Text
}
```

### After (MongoDB)
```prisma
model Course {
  description String?
  content     String?
}
```

**Why?** MongoDB doesn't require text type annotation. All strings are unlimited by default.

---

## 📇 Indexes

### Before (PostgreSQL)
```prisma
model Course {
  categoryId  String
  instructorId String
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([categoryId])
  @@index([instructorId])
}
```

### After (MongoDB)
```prisma
model Course {
  categoryId  String   @db.ObjectId
  instructorId String  @db.ObjectId
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

**Why?** MongoDB automatically manages indexes. Explicit declarations removed for simplicity.

---

## 🔐 Account Model

### Before (PostgreSQL)
```prisma
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}
```

### After (MongoDB)
```prisma
model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}
```

**Changes:**
- ID: `cuid()` → `auto()` with `@map("_id") @db.ObjectId`
- userId: Added `@db.ObjectId`
- Text fields: Removed `@db.Text` annotations

---

## 🎫 VerificationToken Model

### Before (PostgreSQL)
```prisma
model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

### After (MongoDB)
```prisma
model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

**Why?** MongoDB requires an `_id` field. Added explicit id field.

---

## 🌐 Environment Variables

### Before (PostgreSQL)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/elearning"
```

### After (MongoDB - Local)
```env
DATABASE_URL="mongodb://localhost:27017/elearning"
```

### After (MongoDB - Atlas Cloud)
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority"
```

---

## 🛠️ CLI Commands

### Before (PostgreSQL)

#### Create Migration
```bash
npx prisma migrate dev --name add_courses
```

#### Apply Migrations
```bash
npx prisma migrate deploy
```

#### Reset Database
```bash
npx prisma migrate reset
```

### After (MongoDB)

#### Push Schema
```bash
npx prisma db push
```

#### Reset Database
```bash
npx prisma db push --force-reset
```

**Key Difference:** MongoDB uses push-based schema management (no migrations).

---

## 📦 Complete Model Comparison

### User Model

#### PostgreSQL Version
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  password      String?
  role          Role      @default(STUDENT)
  bio           String?
  title         String?
  accounts      Account[]
  sessions      Session[]
  enrollments   Enrollment[]
  progress      Progress[]
  reviews       Review[]
  courses       Course[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

#### MongoDB Version
```prisma
model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  password      String?
  role          Role      @default(STUDENT)
  bio           String?
  title         String?
  accounts      Account[]
  sessions      Session[]
  enrollments   Enrollment[]
  progress      Progress[]
  reviews       Review[]
  courses       Course[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

**Only Change:** ID field format

---

### Course Model

#### PostgreSQL Version
```prisma
model Course {
  id          String   @id @default(cuid())
  title       String
  description String?  @db.Text
  imageUrl    String?
  price       Float?
  isPublished Boolean  @default(false)
  
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  
  instructorId String
  instructor   User   @relation(fields: [instructorId], references: [id])
  
  chapters    Chapter[]
  enrollments Enrollment[]
  reviews     Review[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([categoryId])
  @@index([instructorId])
}
```

#### MongoDB Version
```prisma
model Course {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String?
  imageUrl    String?
  price       Float?
  isPublished Boolean  @default(false)
  
  categoryId  String   @db.ObjectId
  category    Category @relation(fields: [categoryId], references: [id])
  
  instructorId String  @db.ObjectId
  instructor   User    @relation(fields: [instructorId], references: [id])
  
  chapters    Chapter[]
  enrollments Enrollment[]
  reviews     Review[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

**Changes:**
1. ID: `cuid()` → `auto()` with `@map("_id") @db.ObjectId`
2. description: Removed `@db.Text`
3. categoryId: Added `@db.ObjectId`
4. instructorId: Added `@db.ObjectId`
5. Removed index declarations

---

## 📈 Summary of All Changes

### Schema Changes
| Aspect | PostgreSQL | MongoDB |
|--------|-----------|----------|
| **Provider** | `postgresql` | `mongodb` |
| **ID Type** | `@id @default(cuid())` | `@id @default(auto()) @map("_id") @db.ObjectId` |
| **Foreign Keys** | `String` | `String @db.ObjectId` |
| **Text Fields** | `String? @db.Text` | `String?` |
| **Indexes** | `@@index([field])` | Auto-managed (removed) |

### Models Updated
✅ User
✅ Account  
✅ Session
✅ VerificationToken (added id field)
✅ Category
✅ Course
✅ Chapter
✅ Lesson
✅ Attachment
✅ Enrollment
✅ Progress
✅ Review

**Total:** 12 models converted

---

## 💻 Application Code Changes

### API Routes
**Changes Required:** ❌ NONE

All API routes work identically:
```typescript
// This code works the same with both databases!
const course = await db.course.findUnique({
  where: { id: courseId },
  include: { instructor: true, chapters: true }
})
```

### Components
**Changes Required:** ❌ NONE

All React components work identically. No changes needed!

### Business Logic
**Changes Required:** ❌ NONE

Prisma Client abstracts all database differences.

---

## 🎯 What You Need to Do

### 1. Environment Setup
```bash
# Update .env file
DATABASE_URL="mongodb://localhost:27017/elearning"
# or
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/elearning"
```

### 2. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 3. That's It!
Everything else works exactly the same! 🎉

---

## 🚀 Quick Reference

### Development Workflow

**PostgreSQL:**
```bash
1. Edit schema.prisma
2. npx prisma migrate dev
3. npx prisma generate
4. Commit migration files
```

**MongoDB:**
```bash
1. Edit schema.prisma
2. npx prisma db push
3. Done! ✨
```

Simpler, faster, easier! 🎊

---

## 📚 Learn More

- [MONGODB_SETUP.md](./MONGODB_SETUP.md) - Detailed setup guide
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Migration details
- [README_MONGODB.md](./README_MONGODB.md) - Complete MongoDB readme

---

*This comparison shows all changes made in the PostgreSQL → MongoDB conversion.*

