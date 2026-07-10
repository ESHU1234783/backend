import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 18
    },

    jobTitle: {
        type: String,
        required: true,
        maxlength: 20
    },

    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique:true
    },
    phone: {
        type: Number,
        required: true,
        match: [/^[0-9]{10}$/, "Phone number must be 10 digits"]

    },
    location: {
        type: String,
        required: true
    },

    portfolio: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true,
        maxlength: 150
    },
    // Fields for experience page below
    experience: [
    {
        company: String,
        role: String,
        start: Date,
        end: Date,
        accomplishment: String
    }
],

experienceCompleted: {
    type: Boolean,
    default: false
}
})

const user = mongoose.model("userinfo", userschema);

export default user;