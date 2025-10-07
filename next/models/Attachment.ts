import mongoose, { Schema, models, Model } from 'mongoose'

export interface IAttachment extends Document {
  _id: string
  name: string
  url: string
  lessonId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const AttachmentSchema = new Schema<IAttachment>(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    lessonId: {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

AttachmentSchema.index({ lessonId: 1 })

const Attachment: Model<IAttachment> = models.Attachment || mongoose.model<IAttachment>('Attachment', AttachmentSchema)

export default Attachment

