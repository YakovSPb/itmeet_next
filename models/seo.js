import mongoose, {models, Schema} from "mongoose";

const seoSchema = new Schema({
    seo: {
        services:{
            title:{
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            h1: {
                type: String,
                required: true,
            },
        },
        portfolio:{
            title:{
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            h1: {
                type: String,
                required: true,
            },
        },
        state:{
            title:{
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            h1: {
                type: String,
                required: true,
            },
        },
        about:{
            title:{
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            h1: {
                type: String,
                required: true,
            },
        },
        contacts:{
            title:{
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            h1: {
                type: String,
                required: true,
            },
        },
    },
},
    {timestamps: true}
)

const Seo = models.Seo || mongoose.model("Seo", seoSchema)
export default  Seo;