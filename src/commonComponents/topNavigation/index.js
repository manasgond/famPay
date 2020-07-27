import React from 'react';
import PropTypes from 'prop-types';
import FamLogo from 'assets/images/fampaylogo.svg'
import BackArrow from 'assets/images/backArrowBlack.svg';
import TopNavigationStyle from './topNavigation.styled';
import { dim } from '../../styles/theme';


const TopNavigation = React.memo(function TopNavigation(props){

    const _handleClick = () => {
        if(props.isNavigation){
            props.navigationRoute();
        }
    }

    return(
        <TopNavigationStyle>
            {  props.isNavigation ?
            <div className='navigationContainer'>
                <img className="arrow" src={BackArrow} height={dim._16px} width={dim._16px} alt="backArrow" onClick = {_handleClick} />
                <div className='navigationTitle'>
                    {props.navigationTitle}
                </div>
            </div>
            :
            <div className='brandingContainer'>
                <img src={FamLogo} height={dim._24px} width={dim._scale(84)} alt="famPayLogo" onClick={_handleClick} />
            </div>
            }
        </TopNavigationStyle>

    );
});

export default TopNavigation;

TopNavigation.propTypes = {
    isNavigation: PropTypes.bool,
    navigationTitle: PropTypes.isString,
    navigationRoute: PropTypes.isString
  };

TopNavigation.defaultProps = {
    isNavigation:false,
    navigationTitle:null,
    navigationRoute:null
};