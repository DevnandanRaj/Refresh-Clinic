import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Text,
  Flex,
  VStack,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Medicine() {
  const [medicineData, setMedicineData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("medicineCart")) || {}
  );
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
  const searchedMedicineData = medicineData.filter((medicine) => {
    return medicine.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(searchedMedicineData.length / 6);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 8;
  const visibleMedicineData = searchedMedicineData.slice(startIndex, endIndex);
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
          <Flex justifyContent="space-between" alignItems="center" mb="4">
            <Input
              mr="40%"
              placeholder="Search by name or category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/cart">
              <Button>Cart ({cartItems.length})</Button>
            </Link>
          </Flex>
          <VStack spacing="4" align="stretch">
            {visibleMedicineData.map((medicine) => (
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
                    Name: {medicine.name}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Price: ₹{medicine.price}
                  </Text>
                </Flex>
                <Text fontSize="lg" fontWeight="bold">
                  Category: {medicine.categories.join(", ")}
                </Text>
                <Text fontSize="lg">Description: {medicine.description}</Text>
                {cart[medicine.id] ? (
                  <Button
                    colorScheme="red"
                    mt="4"
                    onClick={() => handleRemoveFromCart(medicine.id)} 
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
          <VStack mt="4">
            <Flex justifyContent="space-between" w="100%">
              {currentPage > 1 && (
                <Button onClick={handlePrevPage}>Previous</Button>
              )}
              <Text>
                {currentPage} of {totalPages}
              </Text>
              {currentPage < totalPages && (
                <Button onClick={handleNextPage}>Next</Button>
              )}
            </Flex>
          </VStack>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Medicine;
