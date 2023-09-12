// import React from 'react'
// import styled from "styled.components"
import { Button } from "../../App";
import styled from "styled-components"
import { BASE_URL } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map(({name, image, text,price}) => (
          <card key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(3)}</Button>
            </div>
          </card>
        ))}

      </FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResult;
const FoodCardContainer = styled.section`
height:100vh;
background-image:url("/bg.png");
background-size:cover
`;
const FoodCards = styled.div`
display:flex;
justify-content:space-between
`;
const card =styled.div`

width:340px;
height:167px;
border:8.66px solid ;
border-image-source:radial-gradient(80.69% 288.78% at 188.28% 112.58%,#eabfff 0%,
  rgba(135,38,183,0) 100%
  ),


radial-gradient(
  80.39% 222.5% at -13.755 -12.36%, 
  #98f9ff 0%, 
     rgba(255,255,255,0) 100%

);

background:url(.png),
radial-gradient(
  90.16% 14.01% at 15.32% 21.04%,
  rgba(165,239,255,0.2) 0% ,
  rgba(110,191,244,0.0447917) 77.08% ,
  rgba(70, 144,213,0) 100%
)
`;


const food_info=styled.div`
display:flex
justify-content:space-between
`;
