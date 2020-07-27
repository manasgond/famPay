import React from 'react';
import { withRouter } from 'react-router-dom';
import BigCard from 'commonComponents/bigCard';
import TopNavigation from 'commonComponents/topNavigation';
import Streak from 'containers/Streak';
import StreakScreenStyle from './streakScreen.styled';


const StreakScreen = React.memo(function StreakScreen(props){

    const _handleNavigationRouteClick = () => {
        props.history.push('');
    }

  return(
    <StreakScreenStyle>
      <TopNavigation
        isNavigation
        navigationTitle='Your rewards'
        navigationRoute={_handleNavigationRouteClick}
      />
      <div className='streakIcon'>
        <Streak  fullWidth />
      </div>
      <div className='cardContainer'>
        <div className='smallCards'>
            <BigCard
              heading="Spin"
              text="Min daily saving"
              cardWidth = {152}
              cardHeight = {76}
            />
            <BigCard
              heading="10 days"
              text="streak to maintain"
              cardWidth = {152}
              cardHeight = {76}
            />
        </div>
        <div className='bigCard'>
            <BigCard
              heading="Upto 100 rs off"
              text="Insta reward for 10 days streak"
              cardWidth = {320}
              cardHeight = {76}
            />
        </div>
        <div className='guideLine'>
          <BigCard
            isHtmlText
            htmlText={
              `
              <ul>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
                <li style="padding-bottom:6px;"> You must maintain a streak for 10 days</li>
              </ul>
              `
            }
            cardWidth = {320}
            cardHeight = {200}
          />
        </div>

      </div>
    </StreakScreenStyle>
);

}
);

export default withRouter(StreakScreen);