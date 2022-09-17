import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SectionTitle from './SectionTitle'
import { getMissionVisionFromAPI } from '../redux/slices/mission-vision-slice'
import { Container, Grid } from '@mui/material'
import { IMissionVision } from '../redux/Interfaces'


function MissionVision() {
  const dispatch = useDispatch()
  const { missionVision, isLoading, isError, isSuccess } = useSelector((state: any) => state.missionVision)

  useEffect(() => {
    dispatch(getMissionVisionFromAPI() as any)
  }, [])

  const seeMore = (item: IMissionVision, number: number) => {
    return item.english_description.length > number
            ? <p>{item.english_description.slice(0, number)} <a href="/" style={{color: '#0A0D1D'}}>SeeMore</a></p>
            : <p>{item.english_description}</p>
  }

  return (
    <div id="mission-vision">
      <SectionTitle title="Mission & Vision" />
      {isLoading? <div>Loading</div> : isError? <div>Error</div> : isSuccess && (
        <Container>
          <Grid container columnSpacing={0}>
            <Grid item sm={12} md={4}>
              <img src={`/assets/missionVisionImage.png`} alt="UBC Logo" style={{objectFit: 'contain', width: '100%'}} />
            </Grid>
            <Grid item sm={12} md={8} className="content">
              {
                missionVision?.map((item: IMissionVision) => (
                  <Grid container columnSpacing={-2} key={item.id}>
                    <Grid item sm={3}>
                      <img src={`http://demos-iconcreations.com/schlafmiestrback${item?.icon}`} alt="UBC Logo" />
                    </Grid>
                    <Grid item sm={9} className="paragraph">
                      {seeMore(item, 270)}
                    </Grid>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  )
}

export default MissionVision