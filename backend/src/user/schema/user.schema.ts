import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  name: String,
  isTeacher: Boolean,
  pwHash: String
})