import mongoose, { Schema, models, Model } from 'mongoose'

export interface ISession extends Document {
  _id: string
  sessionToken: string
  userId: mongoose.Types.ObjectId
  expires: Date
  createdAt: Date
  updatedAt: Date
}

const SessionSchema = new Schema<ISession>(
  {
    sessionToken: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Session: Model<ISession> = models.Session || mongoose.model<ISession>('Session', SessionSchema)

export default Session

