import { useState } from 'react';
import { Box, Button, Container, Grid, IconButton, Menu, MenuItem, Paper, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from '@mui/icons-material/Person';
import { Search, ArrowDropDown } from "@mui/icons-material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';



import { Link, useNavigate } from "react-router-dom";

const links = [
  {label: "Home" , route: '/' },
  {label: "About Us" , route: '/' },
  {label: "Mattress" , children: [] },
  {label: "Beds & Headboards" , route: '/' },
  {label: "Pillows" , route: '/' },
  {label: "Sleep Accessories" , route: '/' },
  {label: "Contact Us" , route: '/' },
]
function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(links[0]);

  const deviceWidth = useMediaQuery('(min-width: 1199px)');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    // <Container id="navbar">
      <AppBar position="static" id="navbar" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/assets/logo1.png" alt="logo" style={{width: '138px' }}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="nav-links" style={{alignSelf: 'center'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((item, index) => (
                <MenuItem key={index} onClick={() => item.route ? setActive(item) : null}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/assets/logo1.png" alt="logo" style={{width: '138px' }}/>
          </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="nav-links">
            {links.map((item, index) => (
              <Button
                key={index}
                onClick={() => item.route ? setActive(item) : null} className={`flex-center ${active===item && "active"}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.label}
                {!!item.children && <ArrowDropDown />}
              </Button>
            ) )
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Grid container spacing={2} className="">
              <Grid item lg={8} md={12} sm={8} xs={12}>
                <Paper
                  style={{ marginRight: "15px", paddingRight: "5px" }}
                  component="form"
                  onSubmit={() => {}}
                  sx={{
                    borderRadius: 20,
                    border: "1px solid #e3e3e3",
                    pl: 2,
                    boxShadow: "none",
                    mr: { sm: 5 },
                  }}
                >
                  <IconButton>
                    <Search
                      type="submit"
                      style={{ fontSize: "23px", padding: "0", color: "#CCC" }}
                      sx={{ p: "10px" }}
                      aria-label="search"
                    />
                  </IconButton>
                  <input
                    type="search"
                    className="search-bar"
                    placeholder="Search ..."
                    value=""
                    onChange={(e) => {}}
                  />
                </Paper>
              </Grid>
              <Grid item lg={4} md={12} sm={4} xs={12} style={{ color: "#14325C" }} className="flex-center">
                <InstagramIcon className="m-2" />
                <TwitterIcon className="m-2" />
                <FacebookIcon className="m-2" />
              </Grid>
            </Grid>
            <div className="mt-10 buttons pb-10" style={{display: 'flex', justifyContent: 'end'}}>
              <button className="flex-center">
                <PersonIcon />
                My Account
                <ArrowDropDown />
                </button>
              <button className="flex-center">
                <ShoppingBasketIcon />
                (5) items
              </button>
            </div>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      // <Stack
      //   className="pb-0"
      //   direction="row"
      //   alignItems="center"
      //   p={2}
      //   sx={{
      //     position: "sticky",
      //     top: 0,
      //     justifyContent: "space-between",
      //   }}
      //   zIndex={1}
      // >
      //   {

      //   }
      //   <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      //     <img src="/assets/logo1.png" alt="logo" style={{width: '138px' }}/>
      //   </Link>
      //   {
      //     deviceWidth && (
      //       <Stack
      //         style={{alignSelf: "end"}} className="nav-links"
      //         direction="row"
      //         alignItems="center"
      //         spacing={2}

      //       >
      //         <ul>
      //           {
      //             links.map((item, index) => (
      //               <li key={index} onClick={() => item.route ? setActive(item) : null} className={`flex-center ${active===item && "active"}`}>
      //                 {item.label}
      //                 {!!item.children && <ArrowDropDown />}
      //               </li>
      //             ) )
      //           }
      //         </ul>
      //       </Stack>
      //     )
      //   }
      //   <Stack
      //     style={{
      //       display: "flex",
      //       flexDirection: 'column',
      //     }}
      //     direction="row"
      //     alignItems={"right"}
      //     p={1}
      //   >
      //     <div className="flex-center">
      //       <Paper
      //         style={{ marginRight: "15px", paddingRight: "5px" }}
      //         component="form"
      //         onSubmit={() => {}}
      //         sx={{
      //           borderRadius: 20,
      //           border: "1px solid #e3e3e3",
      //           pl: 2,
      //           boxShadow: "none",
      //           mr: { sm: 5 },
      //         }}
      //       >
      //         <IconButton>
      //           <Search
      //             type="submit"
      //             style={{ fontSize: "23px", padding: "0", color: "#CCC" }}
      //             sx={{ p: "10px" }}
      //             aria-label="search"
      //           />
      //         </IconButton>
      //         <input
      //           type="search"
      //           className="search-bar"
      //           placeholder="Search ..."
      //           value=""
      //           onChange={(e) => {}}
      //         />
      //       </Paper>
      //       <div style={{ color: "#14325C" }}>
      //         <InstagramIcon className="m-2" />
      //         <TwitterIcon className="m-2" />
      //         <FacebookIcon className="m-2" />
      //       </div>
      //     </div>
      //     <div className="mt-10 buttons pb-10" style={{display: 'flex', justifyContent: 'end'}}>
      //       <button className="flex-center">
      //         <PersonIcon />
      //         My Account
      //         <ArrowDropDown />
      //         </button>
      //       <button className="flex-center">
      //         <ShoppingBasketIcon />
      //         (5) items
      //       </button>
      //     </div>
      //   </Stack>
      // </Stack>
    // </Container>

  );
}

export default Navbar;
