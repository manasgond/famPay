import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TopNavigation from 'commonComponents/topNavigation';
import SpinWheel from 'containers/SpinWheel';
import ScrollableCard from 'commonComponents/scrollableCard';
import { fetchHomeApi } from 'containers/App/store/actions';
import ExpansionCard from 'containers/ExpansionCard';
import CenterCard from 'containers/CenterCard';
import Streak from 'containers/Streak';
import AppStyle from './app.styled';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeApi());
  }, []);

  return (
    <AppStyle className="App">
      <div className='header'>
        <TopNavigation
          isNavigation={false}
        />
      </div>
      <div className='container'>
        <ExpansionCard />
        <SpinWheel />
        <Streak />
        <CenterCard />
        <ScrollableCard  isScrollable />
        <ScrollableCard />
      </div>
    </AppStyle>
  );
}

export default withRouter(App);