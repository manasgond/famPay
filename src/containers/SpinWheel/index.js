import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { homeDataSelector } from 'containers/App/store/reducer'
import SpinWheel from 'commonComponents/spinWheelCard';
import Loader from 'react-loader-spinner'
import SpinWheelStyle from './spinWheel.styled';

const SpinWheelCard = React.memo(function SpinWheelCard(props){
    const spinCard = useSelector(homeDataSelector);
    const card = spinCard && spinCard['1'] && spinCard['1'].cards;
    const icon = card && card['0'].icon.image_url;
    const activeText =  card && card['0'].formatted_title.text;

    const _handleSpinWheelCardClick = () => {
        props.history.push('/spinWheel');
    }

    return(
        <>
        { spinCard != null ?
        <SpinWheelStyle>
            <SpinWheel
              icon={icon}
              activeText={activeText}
              spinWheelCardClicked={_handleSpinWheelCardClick}
            />
        </SpinWheelStyle>
        :
        <Loader
          type="Puff"
          color="#00BFFF"
          height={20}
          width={20}
          timeout={3000}
        />
        }
        </>
    );
});

export default withRouter(SpinWheelCard);