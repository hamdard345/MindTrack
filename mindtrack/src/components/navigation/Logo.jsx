import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
function Logo() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          cursor:"pointer"
        }}
        onClick={handleClick}
      >
        Mind Track
      </Typography>
    </>
  );
}

export default Logo;
