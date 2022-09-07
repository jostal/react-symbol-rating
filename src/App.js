import logo from './logo.svg';
import StarRating from "./components/stars/StarRating";
import './App.css';

function App() {
  return (
    <div className="App">
      <StarRating
        rating={3.4}
        stars={5}
        icon={'★'}
      />
    </div>
  );
}

export default App;
