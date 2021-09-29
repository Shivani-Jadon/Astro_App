import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ChatIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AskIcon from '../assets/logo/ask.png';
import ReportIcon from '../assets/logo/reports.png'
import { useHistory } from 'react-router';



export default function  Footer() {
  const [value, setValue] = React.useState(0);
  let history = useHistory();

  const goToHome = () => {   
    history.push("/");
  }

  const goToAstrologer = () => {
    history.push("/astrology");
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        position:"fixed",
        bottom:0
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={goToHome} />
      <BottomNavigationAction label="Talk to Astroler" icon={<ChatIcon />}  onClick={goToAstrologer} />
      <BottomNavigationAction label="Ask as Question" icon={<img src={AskIcon} width="24px"></img>} disabled={true} />
      <BottomNavigationAction label="Report" icon={<img src={ReportIcon} width="24px"></img>} disabled={true} />
    </BottomNavigation>
  );
}
