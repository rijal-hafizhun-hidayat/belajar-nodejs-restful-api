import express from "express";
import { publicRoute } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import morgan from "morgan";
import { apiRoute } from "../route/api.js";

const web = new express();
web.use(express.json())
web.use(morgan('combined'))
web.use(apiRoute)
web.use(publicRoute)
web.use(errorMiddleware)

// import express from "express";
// const web = new express()

// web.get('/api/hello', (request, respond) => {
//     respond.send('hello world')
// })

// export {
//     web
// }

export {
    web
}
