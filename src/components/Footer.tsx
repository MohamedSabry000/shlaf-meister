import { Container, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <Container style={{paddingTop: '55px'}}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={2} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 16px',
          }}>
            <img src="/assets/logo2.png" alt="Logo" style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={12} md={6} style={{margin: '15px 0'}}>
            <Grid container spacing={2} style={{textAlign: 'left'}}>
              <Grid item xs={12} sm={3}>
                <p>COMPANY</p>
                <ul>
                  <li>About the company</li>
                  <li>Continental Bed</li>
                  <li>Certificates</li>
                  <li>References</li>
                  <li>Contact Information</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p>Mattress</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li><a href="/">Bliss Line</a></li>
                  <li><a href="/">Sleep Spa</a></li>
                  <li><a href="/">Essential</a></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p>Showrooms</p>
                <div style={{display: 'flex'}}>
                  <LocationOnIcon style={{fontSize: '14px'}}/>
                  <p style={{margin: '-3px 0', fontSize: '14px'}}>
                    90 avenue South second
                    sector bldg 317, first floor
                    fifth settlement.</p>
                </div>
                <div style={{display: 'flex', marginTop: '5px'}}>
                  <LocationOnIcon style={{fontSize: '14px'}}/>
                  <p style={{margin: '-3px 0', fontSize: '14px'}}>
                    90 avenue South second
                    sector bldg 317, first floor
                    fifth settlement.</p>
                </div>


              </Grid>
              <Grid item xs={12} sm={3} style={{textAlign: 'center'}}>
                <p>FIND US</p>
                <ul>
                  <li><a href="/" title="facebook" >
                    <FacebookIcon />
                  </a></li>
                  <li><a href="/" title="twitter"><TwitterIcon /></a></li>
                  <li><a href="/" title="instagram"><InstagramIcon /></a></li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} style={{padding: '9px 0', textAlign: 'left'}}>
            <div style={{
              margin: '0 50px',
              padding: '14px',
              border: '1px solid #FFF',
            }}>
              <p>NewsLetter</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod, nunc sit amet aliquam luctus, nisi nisl
              </small>
              <div className="input-group">
                <input type="text" placeholder="Email" style={{
                  backgroundColor: '#CCC',
                  color: '#FFF',
                  border: 'none',
                  padding: '6px',
                  width: '80%',
                }} />
                <button style={{
                  border: 'none',
                  padding: '6px',
                  width: '20%',
                }}>Send</button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={{
          textAlign: 'center',
          padding: '0 0',
        }}
        >
        <p>Designed and Developed by <img src="/assets/logo2.png" alt="Logo" style={{width: '20px'}} /></p>
        </div>
      </Container>
    </div>
  )
}

export default Footer