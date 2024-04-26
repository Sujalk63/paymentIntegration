import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({ 
  
    key_id: "", // fill your id 
  
    key_secret: "" // fill your secret key
  
}); 

// app.listen(process.env.PORT, () => console.log( `app listening at port ${process.env.PORT}`))
app.listen(3000)