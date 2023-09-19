import logo from './logo.svg';
import './App.css';
import MultipleAxesChart from './components/MultipleAxesChart';
import ColumnChart from './components/ColumnChart';
import StackedColumnChart from './components/StackedColumnChart';

function App() {
  return (
    <div className="App">
     <MultipleAxesChart />
     <ColumnChart />
     <StackedColumnChart />
    </div>
  );
}

export default App;
