import logo from './logo.svg';
import './App.css';
import PropsType, { string } from "prop-types";

function Test2(props) {
  console.log(props);
  return <div>
  <h5>Test2 {props.param}</h5>
</div>;
}

function Test3({param, something, papapa}) {
  console.log(param, something, papapa);
  return <div>
    <h5>Test3 {param}</h5>
  </div>;
}

Test3.propTypes={
  param:PropsType.string.isRequired,
  something:PropsType.bool,
  papapa:PropsType.array
}

const list = [
  {
    id:1,
    name:"item1",
    title:"아이템1",
    rating:3
  },
  {
    id:2,
    name:"item2",
    title:"아이템2",
    rating:1
  },
  {
    id:3,
    name:"item3",
    title:"아이템3",
    rating:5
  }
];
function fRender(item){
  return <Test3 key={item.id} param={item.title}/>;
}

function App() {
  return (
    <div>
      <h1># Loop Test</h1>
      {
        list.map(fRender)
      }
    </div>
  );
}
  
export default App;
