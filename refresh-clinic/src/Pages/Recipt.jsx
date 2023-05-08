import { Box, Button, Container, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RefreshLogo from "../Resources/RefreshLogo.png";

function Receipt() {
  const appointmentData = JSON.parse(localStorage.getItem("appointmentData"));
  const { doctor, time, fee } = appointmentData;
  const { name: patientName, phone: patientPhone } = appointmentData.patient;

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt="8">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base" p="8">
          <Box textAlign="center" mb="4" justifyItems="center">
            <Image src={RefreshLogo} alt="RefreshClinic Logo" height="100" mx="auto" />
            <Text fontWeight="bold" fontSize="xl" mt="2">
              RefreshClinic
            </Text>
          </Box>
          <Text fontWeight="bold" fontSize="2xl" mb="4">
            Appointment Details
          </Text>
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Doctor: {doctor.name}
          </Text>
          <Text fontSize="lg" mb="4">
            Availability: {doctor.availability ? "Available" : "Not available"}
          </Text>
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Patient Name: {patientName}
          </Text>
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Patient Phone: {patientPhone}
          </Text>
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Time (in hours): {time}
          </Text>
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Fee: ₹{fee}
          </Text>
          <Link to="/finddoctors">
            <Button colorScheme="blue" mb="4">
              Go back to find more doctors
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Receipt;
