import react from "react"
import { VStack, Image, Text, Button, Box, Heading} from "@chakra-ui/React";
import { useSearchParams } from "react-router-dom";

export const PaymentSuccess = ()=>{

    const param = useSearchParams()[0]
    const refNum = param.get('reference')
    return <Box>
            <VStack h="100vh" justifyContent={"center"} >
                <Heading textTransform={"uppercase"} >Payment Successfull</Heading>
                <Text>Reference No. {refNum}</Text>
            </VStack>
    </Box>
}