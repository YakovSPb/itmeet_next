import mongoose, {models, Schema} from "mongoose";

const MessengerSchemaPostSchema = new Schema({
    icon: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    item: {
        type: String,
        required: false,
    },
});

const contactsSchema = new Schema({
        content:{
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            required: false,
        },
        workingHours: {
            type: String,
            required: false,
        },
        messenger:[{
                type: MessengerSchemaPostSchema,
                required: false,
        }],
},
    {timestamps: true}
)

const Contacts = models.Contacts || mongoose.model("Contacts", contactsSchema)
export default  Contacts;