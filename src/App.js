import React from "react";
import buy from "./img/buy.png";
import cosiness from "./img/cosiness.png";
import intensity from "./img/intensity.png";
import menu from "./img/menu.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
`;

export const Shop = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
background-color: burlywood;
border-radius: 20px;
padding: 20px;

header{
  padding-top: 10px;
  background-color: white;
  width: 85vw;
  height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content:space-between;
  font-family: 'Merriweather', serif;

  img{
    width: 30px;
  }
}

p{
  font-size: 1rem;
  font-family: 'Merriweather', serif;
}

h1, h2{
  text-transform: uppercase;
  font-family: 'Assistant', sans-serif;
}

figure{
  margin: 0 auto;
}

input{
  border-radius: 20px;
  height: 30px;
}

div{
  display: flex;
  justify-content:space-around;
}

button{
  background-color: black;
  color: white;
  border-radius: 20px;
  margin-top: 20px;
  height: 25px;
  text-transform: uppercase;
  font-family: 'Assistant', sans-serif;
}
`
const Input = styled.section`
display: flex;
flex-direction: row;
background-color: transparent;
justify-content:space-between;
width: 85vw;

button{
  background-color: burlywood;
  border: none;
  color: black;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Assistant', sans-serif;
}
`

export default class App extends React.Component{
render(){
  return (
    <Shop>
      <header>
        <img src={menu} />
        <p>Cosiness</p>
        <img src={buy} />
      </header>
      <figure>
      <img src={cosiness} />
      </figure>
      <h1>Cosiness $20</h1>
      <h2>What's inside</h2>
      <p>Chili, oregano, safran, papika</p>
      <h2>Why we love it</h2>
      <p>This one will add a little savoury flavor to any food and turn any meal to a culinary masterpiece</p>
      <div>
        <input type="radio" />
        <label>BAG(75G)</label>
        <input type="radio" />
        <label>JAR(150G)</label>
      </div>
      <Input>
      <button>-</button>
      <p>1</p>
      <button>+</button>
      </Input>
      <button>Add to card</button>
    </Shop>
  )
}
}