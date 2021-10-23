const mongoose=require('mongoose')
const Testimonial=mongoose.Schema({
   
    name:{
        type:"String",
        required:true,
    },
    post:{
        type:"String",
        required:true,
    },
    Description:{
        type:"String",
        required:true,
    },
    photo:{
        name:"String",
        link:"String"
        },
    Active:{
        type:"Boolean",
        required:true,
        default:false
    }
},
{timestamps: true}
)

module.exports =mongoose.model('Testimonial',Testimonial)