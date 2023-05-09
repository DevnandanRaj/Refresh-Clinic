import { useEffect, useState } from "react";
import { Box, Button, Container, Text, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Medicine() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("medicineCart")) || {}
  );
  const [medicineData, setMedicineData] = useState([]);

  const handleAddToCart = (medicine) => {
    if (cart[medicine.id]) {
      setCart((prevCart) => {
        const newCart = { ...prevCart };
        newCart[medicine.id].quantity += 1;
        return newCart;
      });
    } else {
      setCart((prevCart) => {
        const newCart = { ...prevCart };
        newCart[medicine.id] = { ...medicine, quantity: 1 };
        return newCart;
      });
    }
  };

  const handleRemoveFromCart = (medicineId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[medicineId];
      return newCart;
    });
  };

  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/medicines`
    )
      .then((response) => response.json())
      .then((data) =>
        setMedicineData(
          data.map((medicine) => ({
            ...medicine,
            quantity: medicine.quantity - (cart[medicine.id]?.quantity || 0),
          }))
        )
      )
      .catch((error) => console.log(error));
  }, [cart]);

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
                {cart[medicine.id] ? (
                  <Button
                    colorScheme="red"
                    mt="4"
                    onClick={() => handleRemoveFromCart(medicine.id)} // add this line
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button mt="4" onClick={() => handleAddToCart(medicine)}>
                    Add to Cart
                  </Button>
                )}
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
