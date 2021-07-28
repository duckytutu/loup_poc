import styled from "styled-components";
import React from "react";

const ImageContainer = styled.div`
  &&& {
    position: relative;
    height: 0;
    padding-top: 56.35%; // 3:2
    @media screen and (max-width: 960px){
      padding-top: 74.957%; // 4:3
    }
  }
`
const StyledImage = styled.picture`
  &&& {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const CardPicture = (props: any) => {
    return (
        <ImageContainer>
            <StyledImage>
                <source srcSet={props.imageList.landscapewidedesktop1x.url} style={{objectFit: "cover", width: "100%"}} media="(min-width: 960px)"/>
                <img alt="" src={props.imageList.landscapemobile3x.url} style={{objectFit: "cover", width: "100%"}}/>
            </StyledImage>
        </ImageContainer>
    )
}

export default React.memo(CardPicture);
