import { store_data,query_search } from "../semantic controllers/sematic-search.controllers.js"
import exp from "express"

const semanticRouter=exp.Router()
//store data
semanticRouter.post("/",store_data)
semanticRouter.post("/search",query_search)
export {semanticRouter}