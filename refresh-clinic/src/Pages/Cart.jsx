import { useEffect, useState } from "react";
import {
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Container,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Cart() {
  const [medicineData, setMedicineData] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const storedCart = localStorage.getItem("medicineCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const storedCart = JSON.stringify(cart);
    localStorage.setItem("medicineCart", storedCart);
  }, [cart]);

  const handleIncreaseQuantity = (medicineId) => {
    const newCart = { ...cart };
    newCart[medicineId].quantity += 1;
    setCart(newCart);
  };

  const handleDecreaseQuantity = (medicineId) => {
    const newCart = { ...cart };
    if (newCart[medicineId].quantity > 1) {
      newCart[medicineId].quantity -= 1;
    } else {
      delete newCart[medicineId];
    }
    setCart(newCart);
  };
  const handleRemoveFromCart = (medicineId) => {
    const newCart = { ...cart };
    delete newCart[medicineId];
    setCart(newCart);
  };

  const totalPrice = Object.values(cart).reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <Container
        maxW="container.xl"
        mt="8"
        marginTop="100px"
        marginBottom="250px"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="base"
          p="8"
        >
          <Box textAlign="center" mb="4" justifyItems="center">
            <Text fontWeight="bold" fontSize="xl" mt="2">
              Refresh Clinic
            </Text>
          </Box>
          <Table>
            <Thead>
              <Tr>
                <Th>Medicine</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(cart).map(
                ([medicineId, { quantity, name, price }]) => {
                  const medicine = medicineData.find(
                    (m) => m.name === parseInt(medicineId)
                  );
                  return (
                    <Tr key={medicineId}>
                      <Td>{name}</Td>
                      <Td>₹{price}</Td>
                      <Td>
                        <Button
                          onClick={() => handleDecreaseQuantity(medicineId)}
                        >
                          -
                        </Button>
                        <Text display="inline-block" mx="4">
                          {quantity}
                        </Text>
                        <Button
                          onClick={() => handleIncreaseQuantity(medicineId)}
                        >
                          +
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={() => handleRemoveFromCart(medicineId)}
                        >
                          Remove
                        </Button>
                      </Td>
                    </Tr>
                  );
                }
              )}
            </Tbody>
          </Table>
          <Text fontSize="lg" fontWeight="bold" mt="4" mb="2">
            Total Price: ₹{totalPrice}
          </Text>
          <Link to="/medicines">
            <Button colorScheme="blue" mr="4">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/">
            <Button
              colorScheme="green"
              onClick={() => {
                alert("Checkout completed!");
                localStorage.removeItem("medicineCart");
              }}
            >
              Checkout
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
