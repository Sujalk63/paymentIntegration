import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({ 
  
    key_id: "rzp_test_mAJRkFcxrbroZO", 
  
    key_secret: "1phfUSVZ3MRhB6SL3ilxt8pq"
}); 

// export const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_APT_SECRET,
//   });


// app.listen(process.env.PORT, () => console.log( `app listening at port ${process.env.PORT}`))
app.listen(3000)