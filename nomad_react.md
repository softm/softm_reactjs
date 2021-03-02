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

### # Create react app
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
