import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import home1 from "../Resources/home1.jpg";
import DoctorCard from "../Components/DoctorsCard";

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/doctors`)
    .then((response) => response.json())
    .then((data) => {
      setDoctors(data.slice(0, 6)); // limit to 4 doctors
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div>
      <Navbar />
      <Box bg="gray.100" py="20">
        <Flex
          maxW="7xl"
          mx="auto"
          px={{ base: "6", md: "8" }}
          py={{ base: "12", md: "16" }}
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "start" }}
          justifyContent="space-between"
        >
          <Box flex="1">
            <Heading size="xl" fontWeight="extrabold" letterSpacing="tight" mb="5">
              Welcome to <Text color="blue.500" as="span">Refresh Clinic</Text>
            </Heading>
            <Text fontSize="lg" mb="5">
              We are committed to providing quality healthcare services to our patients. Our team of experienced doctors, nurses, and staff are dedicated to ensuring your well-being and helping you maintain a healthy lifestyle.
            </Text>
          </Box>
          <Box flex="1" ml={{ md: "12" }}>
            <Image src={home1} alt="Doctor and patient discussing diagnosis" />
          </Box>
        </Flex>
      </Box>
      <Box maxW="7xl" mx="auto" py="16" px={{ base: "6", md: "8" }}>
        <Heading size="xl" fontWeight="extrabold" letterSpacing="tight" mb="10">
          Our Doctors
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
