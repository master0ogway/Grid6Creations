import { Box, Stack, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "75vh",
        backgroundImage: `url("https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/aEG09hZZEDZ23Y9WYI701W6Gwnb.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 3, md: 8 },
      }}
    >
      <Stack spacing={3} maxWidth="500px">
        <Typography variant="h3" fontWeight={700} color="white">
          Welcome to Grid6 Creations
        </Typography>
        <Typography variant="body1" color="white">
          A designer-led portfolio showcasing interactive UI, prototypes, and experiments.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            View Projects
          </Button>
          <Button variant="outlined" color="inherit">
            Contact Me
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
