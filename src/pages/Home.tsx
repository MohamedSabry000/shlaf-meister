import { Box } from '@mui/material';
import { Sliders, Separator, ProductTypes, PresidentMessage, MissionVision, FeaturedProducts, OurOffers, Footer, OurProducts } from '../components'

function Home() {
  return (
    <Box>
      <Sliders />
      <ProductTypes />
      <PresidentMessage />
      <MissionVision />
      <Separator />
      <OurProducts />
      <Separator />
      <FeaturedProducts />
      <OurOffers />
      <Footer />



    </Box>
  )
}

export default Home