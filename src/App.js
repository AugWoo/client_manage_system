import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    name: 'woo',
    job: 'student',
    gender: 'male',
    img: 'https://placeimg.com/64/64/1',
  },
  {
    id: 2,
    name: 'son',
    job: 'doctor',
    gender: 'female',
    img: 'https://placeimg.com/64/64/2',
  },
  {
    id: 3,
    name: 'chris',
    job: 'home',
    gender: 'male',
    img: 'https://placeimg.com/64/64/3',
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            id={c.id}
            name={c.name}
            img={c.img}
            job={c.job}
            gender={c.gender}
          />
        );
      })}
    </div>
  );
}

export default App;
