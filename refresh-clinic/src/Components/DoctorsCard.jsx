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
      <Image src={image} alt={`Photo of ${name}`} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontWeight="semibold" fontSize="xl" mr="2">
            {name}
          </Text>
          <Text color="gray.500" fontSize="md">
            {specialty}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default DoctorCard;
