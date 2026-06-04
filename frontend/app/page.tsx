import { Button, HStack } from "@chakra-ui/react"
import hotels from "@/hotels.json";

export default function Demo() {
  console.log(hotels);
  return (
    <div className="align-center flex justify-center w-full h-full bg-red-500">
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  )
}