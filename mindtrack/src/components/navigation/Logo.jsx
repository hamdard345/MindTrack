import Typography from "@mui/material/Typography";
function Logo() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        Mind Track
      </Typography>
    </>
  );
}

export default Logo;
