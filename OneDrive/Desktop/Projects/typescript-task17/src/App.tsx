import "./App.css";
import { IHuman, IPerson, INumber, ICar, IBike } from "./Components/types.ts";

function App() {
  const myHuman: IHuman = {
    gender: "Female",
    DOB: "01/02/1780",
    status: true,
  };

  const Person: IPerson = {
    name: "Steele",
    age: 15,
  };

  //console.log(Person);

  const numbers: INumber = {
    dates: [1990, 1002, 1086, 2025],
  };

  const lowestDate = Math.min(...numbers.dates);

  const union: ICar | IBike = {
    make: "Tesla",
    model: "Y",
  };

  const intersection: ICar & IBike = {
    make: "Ferrari",
    model: "GTS",
    brand: "Giant",
    type: "Mountain Bike",
  };

  return (
    <div className="container">
      <h1>Let's Practice writing code in typescript</h1>
      <p>
        Hello, Guess my name before I introduce to you. Okay, Let me introduce myself. I am {Person.name} software engineer at Google. I am a {myHuman.gender} and I am very young to be software engineer at {Person.age}
        years old.
      </p>
      <p>That's my birth date: {myHuman.DOB}, don't get surprised.</p>
      <p>Human Status: {myHuman.status.toString()}</p>
      <h2>Below are the list of Numbers</h2>
      <ol>
        {numbers.dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ol>
      <h3>The Lowest numbers is : {lowestDate}</h3>
      <div className="vehicle">
        <div className="vehicle-info">
          <h1>Luxury Car</h1>
          <p>Make: {union.make}</p>
          <p>Model: {union.model}</p>
        </div>
        <div className="vehicle-info">
          <h1>Luxury Car</h1>
          <p>Make: {intersection.make}</p>
          <p>Model: {intersection.model}</p>
        </div>
        <div className="vehicle-info">
          <h2>Motorbike</h2>
          <p>Brand: {intersection.brand}</p>
          <p>Type: {intersection.type}</p>
        </div>
      </div>
    </div>
  );
}

export default App;