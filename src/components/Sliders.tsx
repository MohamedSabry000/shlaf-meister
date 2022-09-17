import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { ISlider } from '../redux/Interfaces'
import { getSliderFromAPI } from '../redux/slices/sliders-slice'

function Sliders() {
  const dispatch = useDispatch()
  const { sliders, isLoading, isSuccess, isError} = useSelector((state: any) => state.sliders)

  useEffect(() => {
    dispatch(getSliderFromAPI() as any)
  }, [dispatch])

  return isLoading? <div>Loading</div> : isError? <div>Error</div> : isSuccess && (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={true}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#14325C',
        },
      }}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          bottom: '10px',
          zIndex: 1,
        }
      }}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          color: '##FFF',
          borderRadius: 0,
          margin: 0,
          fontSize: '3rem',
        },
      }}
    >
      {sliders.map((item: any, i: number) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item({item}: {item: ISlider}) {
  return (
    <Paper
      style={{
        backgroundImage: `url(http://demos-iconcreations.com/schlafmiestrback${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '22%',
            }}
          >
            <h2 style={{ color: '#F26522' }}>{item.english_title}</h2>
            <p style={{ color: '#14325C' }}>{item.english_description}</p>
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
        </div>
      </div>
    </Paper>
  )
}

export default Sliders