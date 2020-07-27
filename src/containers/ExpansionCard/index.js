import React from 'react';
import { useSelector } from 'react-redux';
import { homeDataSelector } from 'containers/App/store/reducer'
import CardExpansion from 'commonComponents/cardExpansion';
import Loader from 'react-loader-spinner'
import ExpansionCardStyle from './expansion.styled';

const ExpansionCard = React.memo(function SpinWheel(){
    const bigDisplayCard = useSelector(homeDataSelector);
    const card = bigDisplayCard && bigDisplayCard['0'] && bigDisplayCard['0'].cards;
    const icon = card && card['0'].bg_image.image_url;
    const activeText =  card && card['0'].formatted_title.entities[0].text;
    const passiveText =  card && card['0'].formatted_title.entities[1].text;
    const description =  card && card['0'].formatted_description.entities[0].text;
    const ctaLabel = card &&  card['0'].cta[0].text;
    const ctaBg = card &&  card['0'].cta[0].bg_color;
    const ctaText = card &&  card['0'].cta[0].text_color

    return(
        <>
        { bigDisplayCard != null ?
        <ExpansionCardStyle>
            <CardExpansion
              icon={icon}
              activeText={activeText}
              passiveText={passiveText}
              description={description}
              ctaLabel={ctaLabel}
              ctaBg={ctaBg}
              ctaText={ctaText}
            />
        </ExpansionCardStyle>
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

export default ExpansionCard;