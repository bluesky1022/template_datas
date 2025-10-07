import mongoose, { Schema, models, Model } from 'mongoose'

export interface ICourse extends Document {
  _id: string
  title: string
  description?: string
  imageUrl?: string
  price?: number
  isPublished: boolean
  categoryId: mongoose.Types.ObjectId
  instructorId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    instructorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

CourseSchema.index({ categoryId: 1 })
CourseSchema.index({ instructorId: 1 })
CourseSchema.index({ isPublished: 1 })

const Course: Model<ICourse> = models.Course || mongoose.model<ICourse>('Course', CourseSchema)

export default Course

