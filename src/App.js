import React, { Component } from 'react';
import './App.css';
import pictures from "./pictures.json";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
class App extends Component {
state = {
  pictures
};



selectPicture = id => {
console.log("in here");
  if (this.state.clicked === true) {
    alert("Sorry, you lose!");
  }
    else {
      this.clicked = true;
      shuffleArray(this.state.pictures);
      this.setState({ pictures });
    }
  };
 
render() {
  const shuffledPictures = shuffleArray(this.state.pictures);
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      {shuffledPictures.map(picture => (
        <PictureCard
        selectPicture = {this.selectPicture}
          id={picture.id}
          key={picture.id}
          image={picture.image}
          clicked={this.clicked}
        />
        ))};
    </Wrapper>
  )
}
}

export default App;
