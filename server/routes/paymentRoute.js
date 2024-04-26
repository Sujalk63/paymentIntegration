import express from "express";
// import { checkout } from ""; //writting .js becuz in the pakage.json we have declared type: moule
import {checkout, paymentverification} from "../controllers/paymentController.js"


const router = express.Router();

// router.route("/checkout").post(checkout)

// router.use("/checkout", checkout) When you use router.use("/checkout", checkout), it means that the checkout controller function will be called for any HTTP method (GET, POST, PUT, DELETE, etc.) on the "/checkout" path.

router.post("/checkout", checkout)  //this will also work
router.post("/paymentverification", paymentverification)

export default router;

// export default router  // this works for: import randomName from "./routes/paymentRoute"
// export const router = express.Router(); // this works for: import {router} from "./routes/paymentRoute.js"