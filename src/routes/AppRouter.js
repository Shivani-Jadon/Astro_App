import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Astrologer from '../components/Astrologer';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/astrology" component={Astrologer} exact={true} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
  