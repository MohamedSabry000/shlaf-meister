import { Container, Grid } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img src="/assets/ubcLogo.png" alt="UBC Logo" />
          </Grid>
          <Grid item xs={12} md={4}>

          </Grid>
          <Grid item xs={12} md={4}>
            <p>NewsLetter</p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nunc sit amet aliquam luctus, nisi nisl
            </small>
            <div className="input-group">
              <input type="text" placeholder="Email" />
              <button>Send</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer