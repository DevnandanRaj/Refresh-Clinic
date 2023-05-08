import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Medicine() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("medicineCart")) || {}
  );
  const [medicineData, setMedicineData] = useState([]);

 const handleAddToCart = (medicine) => {
  if (cart[medicine.name]) {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[medicine.name].quantity += 1;
      return newCart;
    });
  } else {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[medicine.name] = { ...medicine, quantity: 1 };
      return newCart;
    });
  }
const cartItems = Object.values(cart);
  const cartData = cartItems.map(item => {
    return {
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }
  });
  localStorage.setItem("medicineCart", JSON.stringify(cartData));
};
  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/medicines`
    )
      .then((response) => response.json())
      .then((data) => setMedicineData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem("medicineCart", JSON.stringify(cart));
  }, [cart]);

 

  const cartItems = Object.values(cart);


  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt="8">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="base"
          p="8"
        >
          <Text fontWeight="bold" fontSize="2xl" mb="4">
            Medicines
          </Text>
          <VStack spacing="4" align="stretch">
            {medicineData.map((medicine) => (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="base"
                p="4"
                key={medicine.id}
              >
                <Flex justifyContent="space-between" alignItems="center" mb="2">
                  <Text fontSize="lg" fontWeight="bold">
                    {medicine.name}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    ₹{medicine.price}
                  </Text>
                </Flex>
                <Text fontSize="lg">{medicine.description}</Text>
                <Button
                  colorScheme="blue"
                  mt="4"
                  onClick={() => handleAddToCart(medicine)}
                  isDisabled={cart[medicine.id]?.quantity >= medicine.quantity}
                >
                  {cart[medicine.id]?.quantity >= medicine.quantity
                    ? "Out of Stock"
                    : "Add to Cart"}
                </Button>
              </Box>
            ))}
          </VStack>
          <Link to="/cart">
            <Button mt="8">Cart ({cartItems.length})</Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Medicine;
