import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { signout } from "../../store/slices/authSlice";

// Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.user);

  const handleSignout = () => {
    dispatch(signout());
    navigate("/signin");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team Evaluation
          </Typography>
          {user && (
            <div>
              <Typography onClick={handleSignout}>Sign out</Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
