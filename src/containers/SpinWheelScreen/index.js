import React from 'react';
import TopNavigation from 'commonComponents/topNavigation';
import { withRouter } from 'react-router-dom';
import SpinWheel from 'commonComponents/spinWheelScreen';
import BigCard from 'commonComponents/bigCard';
import SpinWheelScreenStyle from './spinWheelScreen.styled';

const SpinWheelScreen = React.memo(function SpinWheelScreen(props){

  const _handleNavigationRouteClick = () => {
    props.history.push('');

  }

  return(
      <SpinWheelScreenStyle>
        <TopNavigation
          isNavigation
          navigationTitle='Your rewards'
          navigationRoute={_handleNavigationRouteClick}
        />
        <div className='spinWheel'>
          <SpinWheel />
        </div>
        <div className='spinCard'>
          <BigCard
            heading="Spin the wheel now to get rewarded"
            text="Tap or spin the wheel to get rewarded and let us know"
          />
        </div>
        <div className='text'>
          Have a question? <p>Get help.</p>
        </div>
      </SpinWheelScreenStyle>
  );

});

export default withRouter(SpinWheelScreen);