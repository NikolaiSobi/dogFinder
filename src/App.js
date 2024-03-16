import './App.css';
import Dog from './Dog';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dogs/:name' element={<Dog />}></Route>
        <Route path='/dogs' element={props.dogs.map((dog) => <img src={dog.src} height="250" width="450"></img>)}></Route>
      </Routes>

        <div className="App">
          <div className="Dogs">
            {props.dogs.map((dog) => <Dog name={dog.name} age={dog.age} src={dog.src} facts={dog.facts}/>)}
          </div>
        </div>
    </BrowserRouter>
    );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/0/e5/0e5a1140-27ac-54c3-967a-44a460d8eb80/59d7c918a679f.image.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://media1.popsugar-assets.com/files/thumbor/1KlBWh16t1ek2MadMGGzlLNA7xA=/fit-in/792x594/top/filters:format_auto():upscale()/2019/11/05/771/n/44701584/3478d2d9068b7ab6_GettyImages-1097692094.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://media.istockphoto.com/id/490849353/photo/cute-white-male-poodle-puppy.jpg?s=612x612&w=0&k=20&c=kKPn9_U2N0G1OCPWIZnhHmBs7f_ZPcWAR3bzQ29njBM=",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
