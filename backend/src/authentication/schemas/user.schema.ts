import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  createdAt: String,
  isActive: Boolean
})