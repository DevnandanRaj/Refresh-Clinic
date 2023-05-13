import { Box, Text, Image } from "@chakra-ui/react";

function DoctorCard({ name, specialty, image }) {
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="base"
    >
      <Image src={image} alt={`Photo of ${name}`} w="100%" />

      <Box p={{ base: "4", md: "6" }}>
        <Box d="flex" alignItems="baseline" flexWrap="wrap">
          <Text
            fontWeight="semibold"
            fontSize={{ base: "lg", md: "xl" }}
            mr={{ base: "2", md: "4" }}
            mb={{ base: "2", md: "0" }}
            width={{ base: "100%", md: "auto" }}
          >
            {name}
          </Text>
          <Text
            color="gray.500"
            fontSize={{ base: "md", md: "lg" }}
            width={{ base: "100%", md: "auto" }}
          >
            {specialty}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default DoctorCard;
