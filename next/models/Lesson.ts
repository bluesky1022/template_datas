import mongoose, { Schema, models, Model } from 'mongoose'

export interface ILesson extends Document {
  _id: string
  title: string
  content?: string
  videoUrl?: string
  duration?: number
  position: number
  isPublished: boolean
  chapterId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const LessonSchema = new Schema<ILesson>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
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
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: 'Chapter',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

LessonSchema.index({ chapterId: 1 })
LessonSchema.index({ position: 1 })

const Lesson: Model<ILesson> = models.Lesson || mongoose.model<ILesson>('Lesson', LessonSchema)

export default Lesson

