import mongoose, { Schema, models, Model } from 'mongoose'

export interface IProgress extends Document {
  _id: string
  userId: mongoose.Types.ObjectId
  chapterId: mongoose.Types.ObjectId
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

const ProgressSchema = new Schema<IProgress>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: 'Chapter',
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

ProgressSchema.index({ userId: 1, chapterId: 1 }, { unique: true })
ProgressSchema.index({ userId: 1 })
ProgressSchema.index({ chapterId: 1 })

const Progress: Model<IProgress> = models.Progress || mongoose.model<IProgress>('Progress', ProgressSchema)

export default Progress

