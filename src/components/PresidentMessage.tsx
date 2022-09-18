import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPresidentMessageFromAPI } from '../redux/slices/president-message-slice'
import SectionTitle from './SectionTitle'
import Message from './Message'
import { getVicePresidentMessageFromAPI } from '../redux/slices/vice-president-slice'
import { Alert, CircularProgress } from '@mui/material'


function PresidentMessage() {
  const dispatch = useDispatch()
  const { presidentMessage, isLoading, isError, isSuccess } = useSelector((state: any) => state.presidentMessage)
  const { vicePresident, isViceLoading, isViceError, isViceSuccess } = useSelector((state: any) => state.vicePresident)

  useEffect(() => {
    dispatch(getPresidentMessageFromAPI() as any)
    dispatch(getVicePresidentMessageFromAPI() as any)
  }, [])

  return (
    <div id="president-message">
      <SectionTitle title="Message from the president & Vice president  " />
      {isLoading?
          <div className="flex-center"><CircularProgress /></div>
          : isError? <Alert severity="error">Error</Alert> : isSuccess &&
        <Message message={presidentMessage} direction="left" />
      }
      {isViceLoading?
          <div className="flex-center"><CircularProgress /></div>
          : isViceError? <Alert severity="error">Error</Alert> : isViceSuccess &&
        <Message message={vicePresident} direction="right" />
      }
    </div>
  )
}

export default PresidentMessage