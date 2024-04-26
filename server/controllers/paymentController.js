import { log } from "console";
import { instance } from "../server.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), // to convert in rupees
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error occurred while creating order:", error);
    res.status(500).json({
      success: false,
      error: "An error occurred while processing the request.",
    });
  }
};

export const paymentverification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.key_secret)
    .update(body.toString())
    .digest("hex");

  console.log("sig recieved", razorpay_signature);
  console.log("sig generated", expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    res.redirect(
      `http://localhost:3001/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(200).json({
      success: false,
      message: "payment failed",
    });
  }
};
