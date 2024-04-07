import mongoose, {models, Schema} from "mongoose";

const serviceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
       type: String,
       required: true,
    },
    price: {
        type: String,
        required: false,
    },
    time: {
       type: String,
       required: false,
    },
     included:{
         type: [String],
         required: false,
     },
     img:{
         type: String,
        required: false,
     },
    desc:{
        type: String,
        required: false,
    },
    sort: {
      type: Number,
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User' // Это ссылка на модель пользователя
    },
    seoTitle: {
      type: String,
      required: true,
    },
    seoDesc: {
      type: String,
      required: true,
    },
},
    {timestamps: true}
)

const Service = models.Service || mongoose.model("Service", serviceSchema)
export default  Service;