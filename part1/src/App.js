import React from 'react';
import logo from './logo.svg';
import './App.css';
const REACT_VERSION = React.version;

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}</p>
    </>
  )
}

const Header = props => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
)}

const Content = props => {

  
  return (
    <div>
      {
        props.parts.map((data , i) => {
          return <Part part= {data.part} exercise = {data.exercise} key={i}/>
    
        })
      }
    </div>
)}

const Part = props => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
)}


const Total = props => {

  let total = 0;
  props.parts.map(data => {
    total += Number(data.exercise);
    
  })

  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => { 
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const parts = [
    {part:part1,exercise:exercises1},
    {part:part2,exercise:exercises2},
    {part:part3,exercise:exercises3}];

  return (
    <div className="App">
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  );
}


export default App;
