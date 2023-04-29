import Express, { urlencoded } from "express"
import { env } from "./config/environment"
import mongoose from "mongoose"
import { connectDatabase } from "./config/connectDB"
import { router as UserRouter } from "./routes/user.routes"
connectDatabase()
const app = Express()

//NOTE: Middleware /////////////////////////////////////////////////////
app.use(Express.json())
app.use(urlencoded({extended:false}))

app.use("/api/user" , UserRouter)

mongoose.connection.once("open" , () => {
    app.listen( env.PORT , () => {
        console.clear()
        console.log("Server is now listening at port:", env.PORT)
    })
})
