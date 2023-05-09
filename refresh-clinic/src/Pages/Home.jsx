import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import home1 from "../Resources/home1.jpg";
import covid from "../Resources/covid.png";
import DoctorCard from "../Components/DoctorsCard";

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/doctors`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data.slice(0, 6)); 
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
            <Heading
              size="xl"
              fontWeight="extrabold"
              letterSpacing="tight"
              mb="5"
            >
              Welcome to{" "}
              <Text color="blue.500" as="span">
                Refresh Clinic
              </Text>
            </Heading>
            <Text fontSize="lg" mb="5">
              We are committed to providing quality healthcare services to our
              patients. Our team of experienced doctors, nurses, and staff are
              dedicated to ensuring your well-being and helping you maintain a
              healthy lifestyle.
            </Text>
          </Box>
          <Box flex="1" ml={{ md: "12" }}>
            <Image src={home1} alt="Doctor and patient discussing diagnosis" />
          </Box>
        </Flex>
      </Box>
      <Box
        bgGradient="linear(to-r, blue.500, teal.500)"
        p="6"
        rounded="lg"
        display="flex"
        alignItems="center"
        margin="100px"
      >
        <Box mr={4}>
          <Heading
            size="md"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="white"
            mb="5"
          >
            COVID-19 Resource Center
          </Heading>
          <Text fontSize="md" color="white">
            Now more than ever, better medicine matters. Get the latest
            information on how COVID-19 may affect you, including vaccination,
            testing, symptoms, treatment, safety and current visitor policies.
          </Text>
        </Box>
        <Image src={covid} alt="COVID-19 Safety" borderRadius="md" w="1500px" />
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" my={8}>
        <Box width={{ base: "100%", md: "45%" }} p={4}>
          <Heading size="md" mb={4}>
            COVID-19 SAFETY
          </Heading>
          <Text fontSize="md">
            You may have concerns about coming to a healthcare facility during
            the COVID-19 pandemic, but you should not delay care, whether for
            wellness, a chronic condition or an emergency. Extensive safety
            measures are in place to protect you.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "45%" }} p={4}>
          <Heading size="md" mb={4}>
            COVID-19 VACCINATION
          </Heading>
          <Text fontSize="md">
            Vaccination is key to ending the pandemic. Learn how the vaccines
            work, get answers to your questions and information from our medical
            experts, and find out about COVID-19 vaccine availability and
            scheduling.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "45%" }} p={4}>
          <Heading size="md" mb={4}>
            COVID-19 TESTING
          </Heading>
          <Text fontSize="md">
            Northwestern Medicine offers COVID-19 testing at multiple locations
            across Chicagoland.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "45%" }} p={4}>
          <Heading size="md" mb={4}>
            COVID-19 ADVANCES IN CARE
          </Heading>
          <Text fontSize="md">
            From research studies to the Comprehensive COVID-19 Clinic,
            physicians and scientists across Northwestern Medicine are in
            relentless pursuit of answers about COVID-19. Learn about how these
            discoveries are leading to better care.
          </Text>
        </Box>
      </Flex>
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
