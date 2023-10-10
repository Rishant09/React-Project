import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from "./NumberSelector"
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button } from './styled/Button'
import { OutlineButton } from './styled/Button'
import Rules from './Rules'

const Gameplay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber]= useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);

    const generateRandomNumber = (min,max) => {
        console.log(Math.floor(Math.random() * (max-min)+ min));
        return Math.floor(Math.random() * (max-min) + min);
    }
    const roleDice = () => {
        if(!selectedNumber){
        setError("You have not selected any number");
        return;
    }
         
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);
    
    if(selectedNumber === randomNumber)
        {setScore((prev) => + randomNumber);}
        else
       { setScore((prev) => - 2);}

       setSelectedNumber(undefined); 
    };   
    const resetScore = () => {
        setScore(0);
    } 
  return (
    <MainContainer>
        <div className='top_section' >
            <TotalScore 
            score={score}
            />
            <NumberSelector
              error={error}
              setError={setError}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}  
            />
        </div>
        <RoleDice 
            roleDice={roleDice}
            currentDice={currentDice}
        />
        <div className='btns'>
        <OutlineButton onClick={resetScore} >Reset Score</OutlineButton>
        <Button 
        onClick={() => setShowRules((prev) =>!prev)}
        >{showRules ? "Hide":"Show"} Rules
        </Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay;

const MainContainer = styled.div`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px
    }

`;









