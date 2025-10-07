import mongoose, { Schema, models, Model } from 'mongoose'

export interface IEnrollment extends Document {
  _id: string
  userId: mongoose.Types.ObjectId
  courseId: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const EnrollmentSchema = new Schema<IEnrollment>(
  {
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

EnrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true })
EnrollmentSchema.index({ userId: 1 })
EnrollmentSchema.index({ courseId: 1 })

const Enrollment: Model<IEnrollment> = models.Enrollment || mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema)

export default Enrollment

