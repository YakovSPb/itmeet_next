import mongoose, {models, Schema} from "mongoose";

const TodosPostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const AdvantagesPostSchema = new Schema({
    strong: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const IconPostSchemaPostSchema = new Schema({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});


const homepageSchema = new Schema({
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
        h2:{
            type: String,
            required: true,
        },
        stateTitle:{
            title: {
                type: String,
                required: true,
            },
        },
        services:{
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
        },
        portfolio:{
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
        },
        todos:{
            title: {
                type: String,
                required: true,
            },
            posts:[{
                type: TodosPostSchema,
                required: false,
            }],
        },
        advantages:{
            title: {
                type: String,
                required: true,
            },
            posts:[{
                type: AdvantagesPostSchema,
                required: false,
            }],
        },
        team:{
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
            posts:[{
                type: IconPostSchemaPostSchema,
                required: false,
            }],
        },
        work:{
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
            posts:[{
                type: IconPostSchemaPostSchema,
                required: false,
            }],
        },
    footer:{
        type: String,
        required: true,
    }
},
    {timestamps: true}
)

const Homepage = models.Service || mongoose.model("Homepage", homepageSchema)
export default  Homepage;