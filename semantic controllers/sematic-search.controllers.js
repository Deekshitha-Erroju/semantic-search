import { semanticModel } from "../semanticModel/semantic.model.js";
import {serve} from "../sematic-search serve/semantic-search.serve.js"
//storing data
async function store_data(req,res) {
    try{
       let {sentance}=req.body
       let embedding=await serve(sentance)
       let newObj=await semanticModel.create({sentance:sentance,Embeddings:embedding})
       res.status(201).json({success:true,message:"data stored successfully",data:newObj})
    }catch(err){
       res.status(200).json({success:false,message:err.message})
    }
}
async function query_search(req,res) {
    try{
    //get the query
    let query=req.body.query
    //get the embedded query
    let embedded_query= await serve(query)
    //perform search
    let result=await semanticModel.aggregate([
        {
          $vectorSearch:{
            index:"vector_index",
            path:"Embeddings",
            queryVector:embedded_query,
            numCandidates:15,
            limit:3
           }
      },{
         $project:{
            _id:0,
            sentance:1,
            score:{
                $meta:"vectorSearchScore"
            }
        }
      }
    ])
    //send response
     res.status(201).json({success:true,message:"search performed successfully",data:result})
    }catch(err){
        res.status(200).json({success:false,message:err.message})
    }
}
export {store_data,query_search}
