import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../redux/Interfaces';

export default function MediaCard({item, type}: {item: IProduct, type: boolean}) {
  const renderText = (text: string, length: number) => text.length > length ? text.substring(0, length) + '...' : text;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={`http://demos-iconcreations.com/schlafmiestrback${item.product_photos[0]?.photo_path || ''}`}
        alt="green iguana"
      />
      <CardContent className="p-0">
        {
          type && (
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {item.title_english}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" className="card-description">
           <div className="card-desc-title-text"  style={type?{}:{fontSize: '12px'}}>
            <span style={{color: '#14325C', fontWeight: type? 'inherit' : 'bold'}}>{item.title_english}</span>
            <div className="card-desc-title-text-price">
              <span style={{color: '#8998AD', fontSize: type? 'inhirit': '10px'}}><del>{item.beforePrice} EGP</del></span>{" "}
              <span style={{color: '#F26522', fontWeight: 'bold'}}>{item.afterPrice} EGP</span>
            </div>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary" className="card-description" style={{ padding: '0 25px' }}>
          <ul className="card-desc-list">
            <li className="card-desc-list-item">
              <span className="card-desc-list-item-text"> {renderText(item.description_english, type? 70 : 40)} </span>
            </li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: '20px'}}>
        <Button size="small" className='add-to-cart'  style={type?{}:{fontSize: '12px'}}>Add To Cart</Button>
        <Button size="small" className='more-details'  style={type?{}:{fontSize: '12px'}}>More Details</Button>
      </CardActions>
    </Card>
  );
}
