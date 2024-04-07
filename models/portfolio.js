import mongoose, {models, Schema} from "mongoose";

const serviceSchema = new Schema({
    feedback: {
        type: String,
        required: true,
    },
    customer_name: {
       type: String,
       required: true,
    },
    temp:{
        type: String,
         required: false,
    },
     img:{
        type: String,
        required: false,
     },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Это ссылка на модель пользователя
    }
},
    {timestamps: true}
)

const Service = models.Service || mongoose.model("Service", serviceSchema)
export default  Service;