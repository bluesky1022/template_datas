# MongoDB Setup Guide

This project uses **MongoDB** as the database with Prisma ORM.

## 🔧 Database Configuration

### Option 1: Local MongoDB (Development)

1. **Install MongoDB locally:**
   - Download from: https://www.mongodb.com/try/download/community
   - Or use Docker: `docker run -d -p 27017:27017 --name mongodb mongo`

2. **Update your `.env` file:**
   ```env
   DATABASE_URL="mongodb://localhost:27017/elearning"
   ```

### Option 2: MongoDB Atlas (Cloud - Recommended)

1. **Create a free MongoDB Atlas account:**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Create a free cluster (M0 tier)

2. **Get your connection string:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

3. **Update your `.env` file:**
   ```env
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority"
   ```
   
   Replace:
   - `username` with your MongoDB username
   - `password` with your password
   - `cluster` with your cluster name

4. **Whitelist your IP address:**
   - In Atlas, go to Network Access
   - Add your current IP or `0.0.0.0/0` for allow all (development only)

## 📦 Initialize Database

After setting up your MongoDB connection:

```bash
# Generate Prisma Client for MongoDB
npx prisma generate

# Push the schema to MongoDB (creates collections)
npx prisma db push

# (Optional) Open Prisma Studio to view your data
npx prisma studio
```

## 🔄 Key Differences from PostgreSQL

### 1. **ID Fields**
- MongoDB uses ObjectId instead of UUID/CUID
- Schema: `@id @default(auto()) @map("_id") @db.ObjectId`

### 2. **Relations**
- Foreign keys use `@db.ObjectId` type
- Example: `userId String @db.ObjectId`

### 3. **Indexes**
- MongoDB doesn't require explicit indexes in development
- Removed from schema for simplicity (MongoDB handles automatically)

### 4. **Text Fields**
- No need for `@db.Text` annotation
- All text fields are unlimited by default in MongoDB

### 5. **Migrations**
- Use `prisma db push` instead of `prisma migrate`
- MongoDB doesn't use traditional migrations

## 🎯 Common Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema changes to MongoDB
npx prisma db push

# View your data in Prisma Studio
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset
```

## 🔍 Verify Connection

Test your MongoDB connection:

```bash
npx prisma db push
```

If successful, you should see:
```
✔ Generated Prisma Client
✔ The MongoDB database is already in sync with your Prisma schema.
```

## 📊 Sample Data

To seed your database with sample data, create a `prisma/seed.ts` file:

```typescript
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create sample user
  const hashedPassword = await hash('password123', 12)
  
  const user = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      password: hashedPassword,
      role: 'STUDENT',
    },
  })

  // Create sample category
  const category = await prisma.category.create({
    data: {
      name: 'Development',
      slug: 'development',
    },
  })

  console.log('✅ Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

Run the seed:
```bash
npx tsx prisma/seed.ts
```

## ⚠️ Important Notes

1. **Connection String Security:**
   - Never commit `.env` file to git
   - Use environment variables in production
   - Keep your MongoDB credentials secure

2. **MongoDB Atlas Free Tier Limits:**
   - 512 MB storage
   - Shared CPU
   - Perfect for development and small projects

3. **Production Recommendations:**
   - Use MongoDB Atlas for managed hosting
   - Enable authentication
   - Set up proper backup strategy
   - Use connection pooling

## 🆘 Troubleshooting

### Error: "Authentication failed"
- Check your username and password in connection string
- Verify user has proper permissions in MongoDB

### Error: "Could not connect to server"
- Check if MongoDB is running locally
- Verify IP whitelist in MongoDB Atlas
- Check firewall settings

### Error: "Unknown argument `provider`"
- Make sure you have the latest Prisma version
- Run: `npm install @prisma/client@latest prisma@latest`

### Collections not created
- Run: `npx prisma db push`
- This creates collections based on your schema

## 📚 Additional Resources

- [Prisma MongoDB Documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [Prisma Client API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

