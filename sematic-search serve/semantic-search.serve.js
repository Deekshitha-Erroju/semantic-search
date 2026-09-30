import { OllamaEmbeddings } from "@langchain/ollama"
const embeddingModel=new OllamaEmbeddings({
    model:"nomic-embed-text:latest",
    baseUrl:"http://localhost:11434"
})
async function serve(data) {
    //create embedding
    let embedding=await embeddingModel.embedQuery(data)
    //return embedding
    return embedding
}
export {serve}