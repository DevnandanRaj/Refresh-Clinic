import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function FindDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/doctors`)
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt="8">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {doctors.map((doctor) => (
            <Box
              key={doctor.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="base"
            >
              <Image src={doctor.image} alt={doctor.name} />
              <Box p="6">
                <Text fontWeight="bold" fontSize="2xl" mb="2">
                  {doctor.name}
                </Text>
                <Text fontSize="lg" mb="2">
                  {doctor.specialization}
                </Text>
                <Text fontSize="lg" mb="4">
                  {doctor.availability ? "Available" : "Not available"}
                </Text>
                <Link to={`/book-appointment/${doctor.id}`}>
                  <Button colorScheme="blue">Book Appointment</Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}

export default FindDoctors;
