import { useState } from 'react';
import { Container, IconButton, Paper, Stack, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from '@mui/icons-material/Person';
import { Search, ArrowDropDown } from "@mui/icons-material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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

  return (
    <Container id="navbar">
      <Stack
        className="pb-0"
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          justifyContent: "space-between",
        }}
        zIndex={1}
      >
        {

        }
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/logo1.png" alt="logo" style={{width: '138px' }}/>
        </Link>
        {
          deviceWidth && (
            <Stack
              style={{alignSelf: "end"}} className="nav-links"
              direction="row"
              alignItems="center"
              spacing={2}

            >
              <ul>
                {
                  links.map((item, index) => (
                    <li key={index} onClick={() => item.route ? setActive(item) : null} className={`flex-center ${active===item && "active"}`}>
                      {item.label}
                      {!!item.children && <ArrowDropDown />}
                    </li>
                  ) )
                }
              </ul>
            </Stack>
          )
        }
        <Stack
          style={{
            display: "flex",
            flexDirection: 'column',
          }}
          direction="row"
          alignItems={"right"}
          p={1}
        >
          <div className="flex-center">
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
            <div style={{ color: "#14325C" }}>
              <InstagramIcon className="m-2" />
              <TwitterIcon className="m-2" />
              <FacebookIcon className="m-2" />
            </div>
          </div>
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
        </Stack>
      </Stack>
    </Container>
  );
}

export default Navbar;
