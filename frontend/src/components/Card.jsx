import { VStack, Image, Text, Button} from "@chakra-ui/React";
import React  from "react";


export function Card({amount, img, checkoutHandler}){
    return (

        <VStack>
            <Image src={img} boxSize={64} objectFit="cover" ></Image>
                <Text>₹ {amount}</Text>
                <Button onClick={()=>{
                    checkoutHandler(amount)
                }} > Buy Now</Button>
        </VStack>
    )
}