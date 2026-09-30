import { model, Schema } from "mongoose";
 
const semanticSchema= new Schema({
       sentance:{
             type:String,
             required:[true,"you are reqired to enter the data"]
       },
       Embeddings:{
             type:[Number] 
       }
},{
       versionKey:false,
       strict:"throw",
       timestamps:true
})

export const semanticModel=model("semantic",semanticSchema)