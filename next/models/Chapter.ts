import mongoose, { Schema, models, Model } from 'mongoose'

export interface IChapter extends Document {
  _id: string
  title: string
  description?: string
  videoUrl?: string
  position: number
  isPublished: boolean
  isFree: boolean
  courseId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const ChapterSchema = new Schema<IChapter>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    position: {
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isFree: {
      type: Boolean,
      default: false,
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

ChapterSchema.index({ courseId: 1 })
ChapterSchema.index({ position: 1 })

const Chapter: Model<IChapter> = models.Chapter || mongoose.model<IChapter>('Chapter', ChapterSchema)

export default Chapter

