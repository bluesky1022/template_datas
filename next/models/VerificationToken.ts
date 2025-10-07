import mongoose, { Schema, models, Model } from 'mongoose'

export interface IVerificationToken extends Document {
  _id: string
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

const VerificationTokenSchema = new Schema<IVerificationToken>(
  {
    identifier: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
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

VerificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true })

const VerificationToken: Model<IVerificationToken> =
  models.VerificationToken || mongoose.model<IVerificationToken>('VerificationToken', VerificationTokenSchema)

export default VerificationToken

