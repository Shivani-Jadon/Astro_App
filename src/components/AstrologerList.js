import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



function Astrologer(props) {
    const astrologer = props.astrologer;

    return (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={astrologer.image} />
        </ListItemAvatar>
        <ListItemText>{astrologer.name} {astrologer.experience}</ListItemText>
        <ul>
            <li><b>Speciality :</b> { astrologer.speciality.toString() }</li>
            <li><b>Language :</b> { astrologer.language.toString() }</li>
            <li><b>Charges :</b> { astrologer.charges}/ min</li>
            <button>Call now</button>
        </ul>
      </ListItem>
    )
}

export default Astrologer;
