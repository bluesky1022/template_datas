# PostgreSQL to MongoDB Migration Guide

This document outlines the changes made to convert the e-learning platform from PostgreSQL to MongoDB.

## 📋 Summary of Changes

### 1. Prisma Schema Changes

#### Database Provider
```diff
datasource db {
-  provider = "postgresql"
+  provider = "mongodb"
   url      = env("DATABASE_URL")
}
```

#### ID Fields (All Models)
```diff
model User {
-  id  String  @id @default(cuid())
+  id  String  @id @default(auto()) @map("_id") @db.ObjectId
}
```

#### Foreign Key Fields
```diff
model Course {
-  categoryId  String
+  categoryId  String  @db.ObjectId
   category    Category @relation(fields: [categoryId], references: [id])
   
-  instructorId String
+  instructorId String  @db.ObjectId
   instructor   User     @relation(fields: [instructorId], references: [id])
}
```

#### Text Fields
```diff
model Course {
-  description String? @db.Text
+  description String?
}
```

#### Indexes
MongoDB indexes are handled automatically, so explicit `@@index` declarations were removed:
```diff
model Course {
   createdAt   DateTime @default(now())
   updatedAt   DateTime @updatedAt
-  
-  @@index([categoryId])
-  @@index([instructorId])
}
```

#### VerificationToken Model
Added an `id` field required for MongoDB:
```diff
model VerificationToken {
+  id         String   @id @default(auto()) @map("_id") @db.ObjectId
   identifier String
   token      String   @unique
   expires    DateTime

   @@unique([identifier, token])
}
```

### 2. Environment Variables

#### Connection String Format
```diff
# PostgreSQL
- DATABASE_URL="postgresql://user:password@localhost:5432/elearning"

# MongoDB (Local)
+ DATABASE_URL="mongodb://localhost:27017/elearning"

# MongoDB (Atlas Cloud)
+ DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority"
```

### 3. Database Commands

#### Schema Management
```diff
# PostgreSQL (Migrations)
- npx prisma migrate dev
- npx prisma migrate deploy
- npx prisma migrate reset

# MongoDB (Push-based)
+ npx prisma db push
+ npx prisma db push --force-reset
```

### 4. Code Changes Required

#### None! 
The beauty of using Prisma is that **no application code changes are required**. All API routes, components, and business logic remain the same. Prisma Client handles the differences between PostgreSQL and MongoDB transparently.

## 🔄 How to Migrate Existing Data

If you have existing data in PostgreSQL that you want to move to MongoDB:

### Option 1: Manual Export/Import

1. **Export data from PostgreSQL:**
```bash
# Using Prisma Studio
npx prisma studio
# Manually export data as JSON

# Or using pg_dump
pg_dump -U username -d elearning -t users -t courses > data.sql
```

2. **Convert to MongoDB format:**
   - Transform PostgreSQL UUIDs to MongoDB ObjectIds
   - Update foreign key references
   - Remove any PostgreSQL-specific data types

3. **Import to MongoDB:**
```bash
# Using mongoimport
mongoimport --db elearning --collection users --file users.json

# Or use Prisma Studio to manually create records
```

### Option 2: Use a Migration Script

Create a custom migration script (`migrate.ts`):

```typescript
import { PrismaClient as PgClient } from '@prisma/client'
import { PrismaClient as MongoClient } from '@prisma/client'

const pgClient = new PgClient({
  datasources: { db: { url: 'postgresql://...' } }
})

const mongoClient = new MongoClient({
  datasources: { db: { url: 'mongodb://...' } }
})

async function migrate() {
  // Fetch from PostgreSQL
  const users = await pgClient.user.findMany()
  
  // Map and insert to MongoDB
  for (const user of users) {
    await mongoClient.user.create({
      data: {
        name: user.name,
        email: user.email,
        // ... map other fields
      }
    })
  }
}

migrate()
```

## 🆕 New Setup Process

### For Fresh Installation

1. **Install MongoDB:**
   - Local: Download from mongodb.com
   - Cloud: Create MongoDB Atlas account (free tier available)

2. **Configure connection:**
   ```bash
   # Update .env
   DATABASE_URL="mongodb://localhost:27017/elearning"
   # or
   DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/elearning"
   ```

3. **Initialize database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

## ✅ Benefits of MongoDB

### 1. **Flexible Schema**
- Easy to add new fields without migrations
- Better for rapidly evolving applications
- No need for ALTER TABLE operations

### 2. **Horizontal Scaling**
- Built-in sharding support
- Better for large-scale applications
- Easier to distribute data

### 3. **Document Model**
- Natural fit for JSON/JavaScript applications
- Nested objects work seamlessly
- No need for complex joins

### 4. **Free Hosting**
- MongoDB Atlas offers generous free tier
- 512 MB storage
- Perfect for development and small projects

### 5. **Cloud-Native**
- Built for modern cloud infrastructure
- Excellent Atlas UI and monitoring
- Automatic backups

## ⚠️ Important Notes

### 1. **ObjectId vs UUID**
- MongoDB uses 12-byte ObjectId instead of UUID
- ObjectIds include timestamp information
- Can be converted to string: `objectId.toString()`

### 2. **Transactions**
- MongoDB transactions work differently than PostgreSQL
- Require replica set (available in Atlas free tier)
- Most operations are atomic at document level

### 3. **No Migrations**
- MongoDB with Prisma uses "push" instead of migrations
- Schema changes are applied directly
- Less control over database evolution
- Better for rapid development

### 4. **Indexing**
- MongoDB automatically indexes `_id` field
- Additional indexes can be added as needed
- Compound indexes supported

### 5. **Joins (Relations)**
- MongoDB doesn't have built-in JOINs
- Prisma handles relations through multiple queries
- Consider denormalization for frequently accessed data

## 🔍 Testing Your Migration

After migration, verify everything works:

```bash
# 1. Generate Prisma Client
npx prisma generate

# 2. Push schema
npx prisma db push

# 3. Open Prisma Studio
npx prisma studio

# 4. Run your application
npm run dev

# 5. Test critical flows:
- User registration
- User login
- Course creation
- Course enrollment
- Progress tracking
```

## 📚 Additional Resources

- [Prisma MongoDB Documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [MongoDB Data Modeling](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/)
- [See MONGODB_SETUP.md](./MONGODB_SETUP.md) for detailed setup instructions

## 🤝 Need Help?

If you encounter issues during migration:

1. Check [MONGODB_SETUP.md](./MONGODB_SETUP.md) for configuration help
2. Verify your connection string format
3. Ensure MongoDB is running (local) or cluster is active (Atlas)
4. Check Prisma documentation for MongoDB-specific features
5. Review error messages in console for specific issues

## 🎉 You're All Set!

Your e-learning platform is now powered by MongoDB. Enjoy the flexibility and scalability that MongoDB provides!

