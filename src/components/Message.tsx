import { Container, Grid } from '@mui/material'
import { IPresidentMessage } from '../redux/Interfaces'



function Message({message, direction}: {message: IPresidentMessage[], direction: string}) {

  const renderParagraphs = (item: IPresidentMessage) => {
    const paragraphs = item.english_description.split('\r\n')
    console.log(paragraphs);
    return paragraphs.map((paragraph: string, index: number) => {
      return index !== paragraphs.length -1? <li key={index}>{paragraph}</li> : null
    })
  }

  const renderImage = (item: IPresidentMessage) =>
    <Grid item sm={12} md={4}>
      <img src={`http://demos-iconcreations.com/schlafmiestrback${item?.image}`} alt="UBC Logo" style={{objectFit: 'contain', width: '100%'}} />
    </Grid>
  return (
    <>{
      message?.map((item: IPresidentMessage) => (
        <Container key={item.id}>
          <Grid container columnSpacing={0}>
            {direction === 'left'? renderImage(item) : null}
            <Grid item sm={12} md={8} className="content" style={direction === 'right'? {borderRadius: '28px 0 0 28px'}: {}}>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{direction === 'right'? "Vice President": "President"}</p>
              <ul className="dash">
                {renderParagraphs(item)}
              </ul>
            </Grid>
            {direction === 'right'? renderImage(item) : null}
          </Grid>
        </Container>
      ))
    }</>
  )
}

export default Message