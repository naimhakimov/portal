import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  file: {
    type: String,
    required: true
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  versionKey: false
})

export default model('Task', schema)