import {model, Schema} from 'mongoose'

const schemaMaterial = new Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: null
    },
    file: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    }
}, {
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
    versionKey: false
})
export default model('Material', schemaMaterial)