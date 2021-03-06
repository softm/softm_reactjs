#### Redux?
 - state 변경 
 - state == data
 - data 관리
 - store
 
#### Vanilla Redux
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>Vanilla Redux</title>
  </head>
  <body>
    <button id="add">Add</button>
    <span>0</span>
    <button id="minus">Minus</button>
  </body>
</html>

```
```js
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
let count=0;

const updateText = (count)=>{
  number.innerText = count;
}

const handleAdd = () => {
  count++;
  updateText(count);
};

const handleMinus = () => {
  count--;
  updateText(count);
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click",handleMinus);
```

### # Install Redux
 - ```yarn add redux```