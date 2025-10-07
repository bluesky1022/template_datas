import mongoose, { Schema, models, Model } from 'mongoose'

export interface IReview extends Document {
  _id: string
  rating: number
  comment?: string
  userId: mongoose.Types.ObjectId
  courseId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const ReviewSchema = new Schema<IReview>(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

ReviewSchema.index({ userId: 1, courseId: 1 }, { unique: true })
ReviewSchema.index({ userId: 1 })
ReviewSchema.index({ courseId: 1 })

const Review: Model<IReview> = models.Review || mongoose.model<IReview>('Review', ReviewSchema)

export default Review

