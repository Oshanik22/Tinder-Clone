
import './App.css';
import TinderCards from './Components/TinderCards';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
function App() {
  return (
    <div className="app">
      {/* commet */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
