### # React Document
  - https://reactjs.org/docs/react-api.html
  - https://react.vlpt.us/basic/
  - chorme plugin : https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc/related
  - vscode extentions : Smart Semicolon

### # Install node
  - NodeJs
  - ```node -v```
  - ```npm -v```

#### # Install wsl2 (Optional)
  - https://docs.microsoft.com/ko-kr/windows/wsl/install-win10  

### # Install yarn
  - ```npm install --global yarn```
  - ```yarn --version```

### # Install npx
  - ```npm install npx -g```
  - ```npm install -g npm \\ To upgrade```

### # Install VSC
  - https://code.visualstudio.com/download

### # Install git
  - https://git-scm.com
  - ```git --version```

### # Learn js, html , css ...
  - http://vanilla-js.com/
  - arra, const, let, object
  - node : pacakage.json

### # React
  - Made by Facebook 
  - [Install React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=ko)
  - [Pacakge React](https://www.npmjs.com/package/react)

### # View js statistic
  - https://stateofjs.com/
    - https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/

### # Create React App ( CRA )
  - https://github.com/facebook/create-react-app
  - ```npx create-react-app my-app```
  - ```cd my-app```  
  - ```code .```

### # Create Git
  - ```git init```
  - ```git remote add origin "https://github.com/softm/react_myapp.git"```
  - ```git add .```
  - ```git commit -m "init"```
  - ```git config --global user.email "softm@nate.com"```
  - ```git config --global user.name "jihoon.kim"```
  - ```git push origin master```

### # React JS Fundamentals Course (2019 Update!)
```javascript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
```
  - ```npm start```
  - ```http://localhost:3000/```

### # Modify App.js
```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>test~~~</h1>
    </div>
  );
}

export default App;
```

### # Add Component - JSX ( Javascript & XML )
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

```

### # Props
```js
function Test2(props) {
  console.log(props);
  return <div>
   <h5>Test2</h5>
    <pre>
    props.param : {props.param}<br/>
    props.something : {props.something}<br/>
    props.papapa : {props.papapa[0]}<br/>
    </pre>
  </div>;
}

function Test3({param, something, papapa}) {
  console.log(param, something, papapa);
  return <div>
  <h5>Test3</h5>
   <pre>
    param : {param}<br/>
    something : {something}<br/>
    papapa : {papapa[0]}<br/>
   </pre>
  </div>;
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
      <Test2 param="test" something={true} papapa={["he"]}/>
      <Test3 param="test" something={true} papapa={["he"]}/>
      {
        list
      }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
```
### # Loop For Map - 1
```js
const list = [
  {
    name:"item1",
    title:"아이템1"
  },
  {
    name:"item2",
    title:"아이템2"
  },
  {
    name:"item3",
    title:"아이템3"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
      <Test2 param="test" something={true} papapa={["he"]}/>
      <Test3 param="test" something={true} papapa={["he"]}/>
      <h1># Loop Test</h1>
      {
        list.map(item=> (
          <Test3 param={item.name} something={true} papapa={["he"]}/>
        ))
      }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### # Loop For Map - 2 : Function
function fRender(item){
  return <Test3 param={item.title}/>;
}
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <h1># Loop Test</h1>
      {
        list.map(fRender)
      }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


### # Loop For Map - 3 : index.js:1 Warning: Each child in a list should have a unique "key" prop.
```js
const list = [
  {
    id:1,
    name:"item1",
    title:"아이템1"
  },
  {
    id:2,
    name:"item2",
    title:"아이템2"
  },
  {
    id:3,
    name:"item3",
    title:"아이템3"
  }
];

function fRender(item){
  return <Test3 key={item.id} param={item.title}/>;
}
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <h1># Loop Test</h1>
      {
        list.map(fRender)
      }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### # Check props type
  - ```npm i prop-types```
```js
import PropsType, { string } from "prop-types";

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
```

### # State , setState
```js
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    count:0
  };
  // setState --> Call render
  add = () =>{
    console.log("add");
    //this.state.count = 1;
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.count + 1}) );
  };
  
  minus = () =>{
    console.log("minus");
    //this.state.count = -1;    
    // this.setState({count:this.state.count - 1});
    this.setState(current => ({count: current.count - 1}) );    
  };

  render() {
    return ( <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
```

### # Life Cycle
  - mount
  - update
  - unmount
  - will -> did
  
```js
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount(){
    console.log("component did mount");
  }
  
  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("unmount")  
  }
  
  state = {
    count: 0
  };

  // setState --> Call render
  add = () => {
    console.log("add");
    //this.state.count = 1;
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    //this.state.count = -1;    
    // this.setState({count:this.state.count - 1});
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    console.log("render");
    return (<div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
```

### # Load setState
```js
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount(){
    console.log("component did mount");
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    },6000);
  }

  render() {
    console.log("render");
    const {isLoading} = this.state;
    return (
      <div>{isLoading?"Loading...":"We are ready"}</div>
    );
  }
}

export default App;
```

### # Using axios
  - ```npm i axios```
  -  yts api
    - https://yts.mx/api#list_movies
    - https://yts.mx/
  
```js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //this.setState({movies:movies});
    this.setState({movies,isLoading : false});    
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log("render");
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    );
  }
}

export default App;

```
### # Render The Movies
#### # Movie
```js
import React from 'react';
import axios from 'axios';
import PropType from "prop-types";

function Movie({id, year, title, summary, poster}){
  return <h4>{title}</h4>
}

Movie.PropType = {
  id:PropType.number.isRequired,
  year:PropType.number.isRequired,
  title:PropType.string.isRequired,
  summary:PropType.string.isRequired,
  poster:PropType.string.isRequired
}

export default Movie;
```

```js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //this.setState({movies:movies});
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie);
        return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
      })}</div>
    );
  }
}

export default App;
```
