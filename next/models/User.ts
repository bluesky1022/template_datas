import mongoose, { Schema, models, Model } from 'mongoose'

export interface IUser extends Document {
  _id: string
  name?: string
  email: string
  emailVerified?: Date
  image?: string
  password?: string
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'
  bio?: string
  title?: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ['STUDENT', 'INSTRUCTOR', 'ADMIN'],
      default: 'STUDENT',
    },
    bio: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const User: Model<IUser> = models.User || mongoose.model<IUser>('User', UserSchema)

export default User

