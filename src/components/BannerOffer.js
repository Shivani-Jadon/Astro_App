import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BannerService from '../services/banner-service';

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
      <span key={banner.id}>
        <img src={banner.path} alt="banner" />
      </span>)
      )
    }
    
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <div>{quotes.message}</div>
            <div>- {quotes.writer}</div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item></Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{display:"flex", overflowX:"auto"}}>
            {
              bannerItem
            }
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
