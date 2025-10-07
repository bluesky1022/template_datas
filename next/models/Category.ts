import mongoose, { Schema, models, Model } from 'mongoose'

export interface ICategory extends Document {
  _id: string
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const Category: Model<ICategory> = models.Category || mongoose.model<ICategory>('Category', CategorySchema)

export default Category

