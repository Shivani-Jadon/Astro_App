import React from 'react';
import { Grid } from '@material-ui/core';
import { PhoneOutlined } from '@material-ui/icons';



function Astrologer(props) {
    const astrologer = props.astrologer;

    return (
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <div className="astrologer-image">
            <img src={astrologer.image} />
          </div>
        </Grid>
        <Grid item xs={6} >
          <div className="name-astrologer">{astrologer.name}</div>
          <ul className="astrologer-info-list">
            <li><span>Speciality :</span> { astrologer.speciality.toString() }</li>
            <li><span>Language :</span> { astrologer.language.toString() }</li>
            <li><span>Charges :</span> { astrologer.charges}/ min</li>
            <button className="btn"><PhoneOutlined className="phone-icon"/>  Call now</button>
          </ul>
        </Grid>
        <Grid item xs={3} >
          <div className="experience">{astrologer.experience} Years</div>
        </Grid>
      </Grid>
    )
}

export default Astrologer;
