import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SectionTitle from './SectionTitle'
import { getOffersFromAPI } from '../redux/slices/offers-slice'
import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material'
import { IOffer } from '../redux/Interfaces'
import Separator from './Separator'

function OurOffers() {
  const dispatch = useDispatch()
  const { offers, isLoading, isError, isSuccess } = useSelector((state: any) => state.offers)

  useEffect(() => {
    dispatch(getOffersFromAPI() as any)
  }, [dispatch])

  return isLoading?
  <div className="flex-center"><CircularProgress /></div>
  : isError? <Alert severity="error">Error</Alert> : isSuccess &&
    offers.map((offer: IOffer) => (
      <Container
        className="offer"
        style={{
          textAlign: 'center',
          backgroundImage: `url(http://demos-iconcreations.com/schlafmiestrback${offer.image})`,
          backgroundColor: '#CCC',
        }} key={offer.id}>
        <Separator />
        <SectionTitle title="our offers" />
        <div style={{width: '50%', textAlign: 'center', margin: '0 auto', paddingBottom: '65px'}} >
          <h2 style={{color: '#FFF'}}>
            {offer.english_title || offer.arabic_title}
          </h2>
          <p style={{color: '#FFF'}}>
            {offer.english_description || offer.arabic_description}
          </p>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#F26522',
              color: '#fff',
              marginTop: '1rem',
            }}
            >
            Discover Now
          </Button>
        </div>
      </Container>
    ))
}

export default OurOffers