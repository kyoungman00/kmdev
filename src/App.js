
import './App.css';
import style from './App.module.css';
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
      <div className={style.box}>app module css</div>
      <Welcom/>

      <Hello />
      <Welcom/>

    </div>
  );
}

export default App;
