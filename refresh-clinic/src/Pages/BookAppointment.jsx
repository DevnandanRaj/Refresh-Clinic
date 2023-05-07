import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function BookAppointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    // Simulate an API call to book the appointment
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      alert("Appointment booked successfully!");
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
     <Navbar/>
      <Box p={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} alignItems="flex-start">
          <FormControl id="name" isRequired isInvalid={isError}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isRequired isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <FormControl id="phone" isRequired isInvalid={isError}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <FormControl id="reason" isRequired isInvalid={isError}>
            <FormLabel>Reason for Appointment</FormLabel>
            <Textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <FormControl id="date" isRequired isInvalid={isError}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <FormControl id="time" isRequired isInvalid={isError}>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <FormErrorMessage>Something went wrong. Please try again.</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Submitting..."
          >
            Book Appointment
          </Button>
        </VStack>
      </form>
      </Box>
        <Footer/>
      </>
  );
}

export default BookAppointment;
