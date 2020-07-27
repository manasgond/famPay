import React from 'react';
import { useSelector } from 'react-redux';
import { homeDataSelector } from 'containers/App/store/reducer'
import Button from 'commonComponents/button';
import Avatar from 'commonComponents/avatar';
import CenterCardStyle from './centerCard.styled';

const CenterCard = React.memo(function CenterCard(){

    const centerCard = useSelector(homeDataSelector);
    const card = centerCard && centerCard['3'] && centerCard['3'].cards;
    const icon = card && card['0'].icon.image_url;
    const asset_type = card && card['0'].icon.asset_type;
    const activeText =  card && card['0'].formatted_title.entities['0'].text;
    const cta1Label = card &&  card['0'].cta[0].text;
    const cta1Bg = card &&  card['0'].cta[0].bg_color;
    const cta1Text = card &&  card['0'].cta[0].text_color
    const cta2Label = card &&  card['0'].cta[0].text;
    const cta2Bg = card &&  card['0'].cta[0].bg_color;
    const cta2Text = card &&  card['0'].cta[0].text_color

    const _handleActionButtonClick = () => {
        // console.log('action button clicked ----->>>>>')
    }

    return(
        <CenterCardStyle>
            <div className='avatar'>
                <Avatar
                  isRow={false}
                  icon={icon}
                  label={asset_type}
                />
            </div>
            <div className='centerCard'>
                {activeText}
            </div>
            <div className='actionButton'>
                <Button
                  label={cta1Label}
                  bg={cta1Bg}
                  textColor={cta1Text}
                  buttonClick = {_handleActionButtonClick}
                />
                <Button
                  label={cta2Label}
                  bg={cta2Bg}
                  textColor={cta2Text}
                  buttonClick = {_handleActionButtonClick}
                />
            </div>
        </CenterCardStyle>

    );
});

export default CenterCard;