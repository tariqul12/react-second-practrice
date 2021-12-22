import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const nayoks=['Jasim','BappaRaj','Rajjak','Manna'];
  const ages=[12,34,55,45,66]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MovieCount></MovieCount>
        <MovieCount></MovieCount>
        {
          nayoks.map(nayok=><li>{nayok}</li>)
        }
        {
          nayoks.map(nayok=><Nayok name={nayok}></Nayok>)
        }

      </header>
    </div>
  );
}
function Nayok(props){
  const nayokStyle={
    border:"2px solid red",
    margin:'20px',
    padding:'30px'
    
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name} </h1>
      <h2>I have done 5 movie {props.age || 30} years </h2>
    </div>
  )
}
function MovieCount(){
   const nayeka=[{name:"Sabana",age:49},{name:"Sabnor",age:50},{name:"pornima",age:36},{name:"Bobita",age:60}];
  const [count,setCount]=useState(5)
  // let handelClick=()=> setCount(count +1);
  // console.log(count,setCount)
  return (
    <div>
      <button onClick={()=>setCount(count-1)}>discount</button>
      <button onClick={()=> setCount(count +1)}>Count</button>
      <h3>Numbers of movies: {count}  </h3>
      {
        nayeka.map(ny=><MovieDisplay movie={count} name={ny.name} age={ny.age}></MovieDisplay>)
      }

    </div>
  )
}
function MovieDisplay(props){
  const styleS=
  {
    border:"2px solid red",
    margin:"30px",
    padding:"20px"
  }
  return (
    <div style={styleS}>
      <h4>Movie I have acted: {props.movie} </h4>
      <h5>nayeka name: {props.name}</h5>
      <h6>Nayeka der age: {props.age}</h6>
    </div>
  )
}
export default App;
