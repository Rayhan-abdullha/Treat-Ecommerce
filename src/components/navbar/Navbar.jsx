import { Link } from "react-router-dom";
import { AppBar, Container, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { Cart, UL } from "./NavbarStyle";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { cart } = useSelector((state) => state.foodsReducer);
  const cartLen = Object.keys(cart).length;
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: "20px 0",
        background: "#fff",
        marginBottom: "50px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontStyle: "italic",
              fontWeight: "600",
              fontSize: 26,
            }}
          >
            <Link to={"/"}>TREAT</Link>
          </Typography>
        </Box>
        <UL>
          <Typography>
            <Link to={"/"}>Home</Link>
          </Typography>

          <Typography>
            <Link to={"/about"}>About</Link>
          </Typography>
          <Typography>
            <Link style={{ display: "flex" }} to={"/cart"}>
              <ShoppingCartIcon sx={{ fontSize: "40px" }} />
              <Cart>{cartLen}</Cart>
            </Link>
          </Typography>
        </UL>
      </Container>
    </AppBar>
  );
}
