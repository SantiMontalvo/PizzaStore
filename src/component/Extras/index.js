import React from "react";
import {
  ExtrasContainer,
  ExtrasHeading,
  ExtrasWrapper,
  ExtrasCard,
  ExtrasImg,
  ExtrasInfo,
  ExtrasTitle,
  ExtrasDesc,
  ExtrasPrice,
  ExtrasButton,
} from "./ExtrasElements";

function Extras({ heading, data }) {
  return (
    <ExtrasContainer>
      <ExtrasHeading>{heading}</ExtrasHeading>
      <ExtrasWrapper>
        {data.map((product, i) => {
          return (
            <ExtrasCard key={i}>
              <ExtrasImg src={product.img} alt={product.alt} />
              <ExtrasInfo>
                <ExtrasTitle>{product.name}</ExtrasTitle>
                <ExtrasDesc>{product.desc}</ExtrasDesc>
                <ExtrasPrice>{product.price}</ExtrasPrice>
                <ExtrasButton>{product.button}</ExtrasButton>
              </ExtrasInfo>
            </ExtrasCard>
          );
        })}
      </ExtrasWrapper>
    </ExtrasContainer>
  );
}

export default Extras;
