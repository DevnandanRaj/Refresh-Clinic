import { Box, Stack, Image } from "@chakra-ui/react";
import RefreshLogo from "../Resources/RefreshLogo.png";
function Footer() {
  return (
    <Box bg="teal" py={4}>
      <Stack
        direction={["column", "column", "row", "row"]}
        spacing="4"
        justifyContent="space-between"
        px={5}
      >
        <Stack>
          <span>Refresh Clinic</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Careers</span>

          <span>Contact Us</span>
        </Stack>
        <Stack>
          <span>For patients</span>
          <span>Search for Doctors</span>
          <span>Search for Clinics</span>
          <span>Book Diagnostic Tests</span>
          <span>Book Full Body checkup</span>
        </Stack>
        <Stack>
          <span>Help</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>HeathCare</span>
          <span>FAQs</span>
        </Stack>
        <Stack>
          <span>Follow Us</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </Stack>
        <Stack>
          <span>Subscribe to us</span>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" mt={5}>
        <Image
          src={RefreshLogo}
          alt="RefreshClinic"
          className="footer__logo"
          boxSize="100"
        />
        <Stack>
          <span>Copyright © 2017, RefreshClinic. </span>
          <span>All rights reserved.</span>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
