import React, { Component } from 'react';
import './App.css';
import pictures from "./pictures.json";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";

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
  pictures,
  selectedPicturesArray: [],
  currentScore: 0
};



selectPicture = id => {
let selectedPicturesArray = this.state.selectedPicturesArray;
  if(selectedPicturesArray.includes(id)) {
    alert("Sorry, you lose!");
    this.setState({pictures, selectedPicturesArray: [], currentScore: 0});
  }
    else {
      selectedPicturesArray.push(id);
      this.setState({currentScore: selectedPicturesArray.length});
      shuffleArray(this.state.pictures);
      this.setState({ pictures });
    }
  };
 
render() {
  const shuffledPictures = shuffleArray(this.state.pictures);
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <Score>Your Score: {this.state.currentScore}
      </Score>
      {shuffledPictures.map(picture => (
      <PictureCard
        selectPicture = {this.selectPicture}
          id={picture.id}
          key={picture.id}
          image={picture.image}
        />
        ))};
    </Wrapper>
  )
}
}

export default App;
