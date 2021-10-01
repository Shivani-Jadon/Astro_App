import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BannerService from '../services/banner-service';
import ganesha from '../assets/images/ganesha.jpg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BannerOffer() {
    
    const [banners, setBanner] = React.useState([]);
    const [quotes, setQuotes] = React.useState({});

    React.useEffect(() => {
        const bannerObj = new BannerService();
        setBanner(bannerObj.getBanners());
        setQuotes(bannerObj.getQuotes());
    }, [])

    const bannerItem = () => {
      return banners.map(banner =>  (
      <div key={banner.id} className="banner-image">
        <img src={banner.path} alt="banner" />
      </div>)
      )
    }
    
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="quotation">
            <div className="quote-mark">
            <span> {quotes.message} </span>
            </div>
            <div className="writer">- {quotes.writer}</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="ganesh">
            <img src={ganesha}/>
          </div>
        </Grid>
        <Grid item xs={12} className="banner-image-container">
          <Item>
            {
              bannerItem
            }
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
