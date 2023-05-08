import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function BookAppointment() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [time, setTime] = useState("");
  const [fee, setFee] = useState(0);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
const [appointmentDate, setAppointmentDate] = useState("");
  useEffect(() => {
    const fetchDoctor = async () => {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/doctors/${id}`);
      const data = await response.json();
      setDoctor(data);
    };

    fetchDoctor();
  }, [id]);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    const hourlyRate = 500;
    setFee(event.target.value * hourlyRate);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };
 const handleAppointmentDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handlePatientPhoneChange = (event) => {
    setPatientPhone(event.target.value);
  };
const handleBookAppointment = () => {
  const appointmentData = {
    doctor,
    time,
    fee,
    patient: {
      name: patientName,
      phone: patientPhone,
      fee:fee
    },
      date: appointmentDate
  };
  localStorage.setItem("appointmentData", JSON.stringify(appointmentData));
};
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mt="8">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base" p="8">
          <Text fontWeight="bold" fontSize="2xl" mb="4">
            Book an Appointment with {doctor.name}
          </Text>
          <Text fontSize="lg" mb="4">
            {doctor.availability ? "Available" : "Not available"}
          </Text>
          <form>
            <FormControl id="patient-name" mb="4">
              <FormLabel>Patient Name</FormLabel>
              <Input type="text" value={patientName} onChange={handlePatientNameChange} />
            </FormControl>
            <FormControl id="patient-phone" mb="4">
              <FormLabel>Patient Phone</FormLabel>
              <Input type="text" value={patientPhone} onChange={handlePatientPhoneChange} />
            </FormControl>
             <FormControl id="appointment-date" mb="4">
              <FormLabel>Appointment Date</FormLabel>
              <Input type="date" value={appointmentDate} onChange={handleAppointmentDateChange} />
            </FormControl>
            <FormControl id="time" mb="4">
              <FormLabel>Time (in hours)</FormLabel>
              <Input type="number" value={time} onChange={handleTimeChange} />
            </FormControl>
            <FormControl id="fee" mb="4">
              <FormLabel>Fee</FormLabel>
              <Input type="text" value={`₹${fee}`} readOnly />
            </FormControl>
            <Link to="/booking-success">
              <Button colorScheme="blue" mb="4" onClick={handleBookAppointment}>
                Book Appointment
              </Button>
            </Link>
          </form>
          <Link to="/finddoctors">
            <Button colorScheme="gray" variant="outline">
              Go back to find more doctors
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default BookAppointment;
