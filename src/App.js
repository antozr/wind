
import './App.scss';
import Foot from './Components/Foot';
import Header from './Components/Header';
import HeadTitle from './Components/HeadTitle';
import ListCard from './Components/ListCard';

function App() {
  return (
    <div className="app">
      <Header />
      <HeadTitle />
      
      <ListCard />
      <Foot />
    </div>
  );
}

export default App;
