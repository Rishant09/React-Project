import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
        <p>Select any Number</p>
        <p>after click on  dice  if selected number is equal to dice number you      will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
      </RulesContainer>
  )
};

export default Rules;

const RulesContainer = styled.div`
    max-width:800px;
    background-color: #fbf1f1;
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h1{
        font-size:24px;
    }
    .text{
       margin-top:24px;
    }

`;