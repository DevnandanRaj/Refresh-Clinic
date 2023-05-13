import { Box, Stack, Image, useBreakpointValue } from "@chakra-ui/react";
import RefreshLogo from "../Resources/RefreshLogo.png";

function Footer() {
  const logoSize = useBreakpointValue({ base: "80px", sm: "100px", md: "100px" });
  const isSmallScreen = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Box bg="teal" py={4} maxWidth="100%" mx="auto">
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing="6"
        justifyContent={["center", "center", "space-between", "space-between"]}
        alignItems={["center", "center", "flex-start", "flex-start"]}
        px={[2, 2, 5, 5]}
      >
        <Stack>
          <span>Refresh Clinic</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Careers</span>
          <span>Contact Us</span>
        </Stack>
        {!isSmallScreen && (
          <Stack alignItems="center">
            <span>For patients</span>
            <span>Search for Doctors</span>
            <span>Search for Clinics</span>
            <span>Book Diagnostic Tests</span>
            <span>Book Full Body checkup</span>
          </Stack>
        )}
        <Stack mt={["4", "4", "0", "0"]}>
          <span>Help</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>HeathCare</span>
          <span>FAQs</span>
        </Stack>
        {!isSmallScreen && (
          <Stack alignItems="center">
            <span>Follow Us</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </Stack>
        )}
        <Stack display={["none", "none", "flex", "flex"]} mt="0" alignItems="center">
          <span>Subscribe to us</span>
          <Stack direction="row" alignItems="center">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={!isSmallScreen ? "row" : "column"} justifyContent="center" alignItems="center" mt="5">
        <Image src={RefreshLogo} alt="RefreshClinic" className="footer__logo" boxSize={logoSize} />
        <Stack textAlign="center" mt="2">
          <span>Copyright © 2017, RefreshClinic. </span>
          <span>All rights reserved.</span>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
