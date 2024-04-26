import { Box, Stack } from "@chakra-ui/React";
import { Card } from "./Card";
import axios from "axios"

export function Home() {
    const checkoutHandler = async (amount)=>{
        const { data: { key } } = await axios.get("http://www.localhost:3000/api/getkey")
        const{ data: { order } }= await axios.post("http://localhost:3000/api/checkout",{
            amount
        })
        // console.log(window);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Payment to Sujal",
            description: "This is test Razorpay",
            image: "https://media.licdn.com/dms/image/D4D03AQETS0CZQNXl6g/profile-displayphoto-shrink_800_800/0/1685049543112?e=1719446400&v=beta&t=mDHg1Zh2rR7j7ZIAtRTtEk_X_T7YucUDpAoNjIOmzfY",
            order_id: order.id,
            callback_url: "http://localhost:3000/api/paymentverification",
            prefill: {
                name: "Test logged in person",
                email: "loggedInPerson@gmail.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    
    return (
    <Box>
      <Stack height={"100vh"} justifyContent="center" alignItems="center" direction={["column", "row"]}>
        <Card amount={3000} img="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" checkoutHandler={checkoutHandler}></Card>
        <Card amount={7000} img="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" checkoutHandler={checkoutHandler} ></Card>
      </Stack>
    </Box>
  );
}
