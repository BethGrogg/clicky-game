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
  const shuffledPictures = shuffleArray(this.state.pictures);
}
render() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      {shuffledPictures.map((pictures, id) => (
        <PictureCard
          id={pictures.id}
          key={pictures.id}
          image={pictures.image}
        />
        ))};
    </Wrapper>
  )
}
}

export default App;
