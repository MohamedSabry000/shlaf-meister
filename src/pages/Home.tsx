import { Box } from '@mui/material';
import { Sliders, Separator, ProductTypes, PresidentMessage, MissionVision, FeaturedProducts, OurOffers, Footer } from '../components'

function Home() {
  return (
    <Box>
      <Sliders />
      <Separator />
      {/* <ProductTypes /> */}
      <Separator />
      <PresidentMessage />
      <Separator />
      <MissionVision />
      <Separator />
      {/* <OurProducts /> */}
      <Separator />
      <FeaturedProducts />
      <Separator />
      <OurOffers />
      <Footer />



    </Box>
  )
}

export default Home