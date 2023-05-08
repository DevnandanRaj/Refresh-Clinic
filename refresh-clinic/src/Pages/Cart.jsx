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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetch("https://example.com/medicine-data")
      .then((response) => response.json())
      .then((data) => setMedicineData(data));
  }, []);

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
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Your Cart
      </Text>
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
          {Object.entries(cart).map(([medicineId, { quantity,name,price }]) => {
            const medicine = medicineData.find(
              (m) => m.name === parseInt(medicineId)
            );
            return (
              <Tr key={medicineId}>
                <Td>{name}</Td>
                <Td>₹{price}</Td>
                <Td>{quantity}</Td>
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
          })}
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
      <Button colorScheme="green" onClick={() => { alert("Checkout completed!"); localStorage.removeItem("medicineCart") }}>
        Checkout
        </Button>
        </Link>
    </div>
  );
}

export default Cart;
