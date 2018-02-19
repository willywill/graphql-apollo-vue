import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        sparse: true
        },
        firstName: String,
        lastName: String,
        credentials: {
            email: String,
            password: String
        },
        age: Number,
        avatar: String,
        phoneNumber: String,
        weight: String,
        location: {
            address: String,
            city: String,
            state: String,
            zip: String
        },
        occupation: {
            title: String,
            salary: Number
        }
}, { versionKey: false, timestamps: true })

export default mongoose.model('Users', userSchema)
