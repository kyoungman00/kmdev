
import './App.css';
import Hello from './component/Hello';
import Welcom from './component/Welcome';

function App() {
  const name = "tom";
  const naver = {
    name:"네이버",
    url:"https://naver.com",
  };

  return (
    <div className="App">
      <Hello />
      <Welcom/>
      <Hello />
      <Welcom/>

    </div>
  );
}

export default App;
