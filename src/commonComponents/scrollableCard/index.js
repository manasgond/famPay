import React from 'react';
import PersonIcon from 'assets/images/person.svg';
import Avatar from 'commonComponents/avatar';
import ScrollbarsCardStyle from './scrollable.styled';

const ScrollbarsCard = React.memo(function ScrollableCard(props){

    return(
        <ScrollbarsCardStyle isScrollable={props.isScrollable}>
          <div className='card1'>
            <Avatar
              isRow
              icon={PersonIcon}
              label='Small Card'
              cardBgColor='#fff'
              width="232px"
            />
          </div>
          <div className='card2'>
            <Avatar
              isRow
              icon={PersonIcon}
              label='Small Card'
              cardBgColor='#FBAF03'
              width="232px"
            />
          </div>
        </ScrollbarsCardStyle>
    );

});

export default ScrollbarsCard;