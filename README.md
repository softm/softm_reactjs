How to write your own Virtual DOM : https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060

Virtual DOM 살펴보기 : https://wonism.github.io/deep-dive-into-vdom/

https://stackoverflow.com/questions/41713966/how-babel-and-jsx-related-or-differ

[Virtual DOM 1](https://jsfiddle.net/softm/18xv32hy/)
[Virtual DOM 2](https://jsfiddle.net/softm/cgqnzewm/)
[Virtual DOM 3](https://jsfiddle.net/softm/h9e7daqo/)
[Write your Virtual DOM 2: Props & Events](https://jsfiddle.net/softm/zx75k3fL/)

https://velopert.com/867

https://reactjs.org/docs/getting-started.html

# React?
    - 페이스북에서 개발한 유저인터페이스 라이브러리.
    - 재사용 가능한 UI를 생성.
    - 페이스북, 인스타그램, 야후, 넷플릭스 등에서 이용.

# DOM - Document Object Model
    - 객체를 통해 문서를 표현한는 방법.
    - DOM은 트리형태로 되어있다.

# reflow & repaint를 최소화해야함.
    : 레이아웃을 새로 구성하면서 계산   - reflow
    : 색상변경만                        - repaint

    : reflow가 실행되는 경우.
        :> element.offsetLeft, element.clientWidth, element.getClientRects()
        ::> offsetTop, scrollTop, getComputedStyle() reflow가 여러번 발생할 수 있다.

    : reflow가 빈번히 발생하면 처리 비용이 상승함.
    : Virtual DOM을 이용해 변경된 내용만 반영하는 구조를 구현함.

# Virtual DOM
    - React 이용.
    - Vue.js 2.0 이용.

    ※ 참고
        브라우저는 어떻게 동작하는가? : https://d2.naver.com/helloworld/59361

    let domNode = {
        tag: 'ul',
        attributes: { id: 'myId' },
        children: [
            // where the LI's would go
        ]
    };
    domNode.children.push('<li>Item 3</li>')

    ※ 참고
        http://mygumi.tistory.com/190 [마이구미의 HelloWorld]

# Virtual DOM 실행 구조.
    : domNode 객체 == Virtual DOM
        :: DOM API를 사용하지 않고,
            :: domNode를 변경한다,
                ::: 변경된 부분만 찾아 실제 DOM에 변경해 준다.
        :: domNode는 실제 DOM이 아닌 메모리에 있어 빠르다.

# JSX란?
    - Javascript + XML
      기존 자바스크립트의 확장 문법.

# Babel+JSX
    - Babel은 트랜스파일러이다.
    - JSX를 실행할 수 있게 만들어주는 변환기.

    :: 서버기반으로 트랜스파일링시 type="text/babel"를 이용한다.
        <script type="text/babel">
            (function() {
                var HelloWorld = React.createClass({
                    render : function() {
                        return (
                        <div> Hello World </div>
                        );
                    }
                });
                var element = React.createElement(HelloWorld, {});
                ReactDOM.render(element, document.getElementById("app"));
            })();

        </script>

    :: babel.js를 인클루드하는 방법.
        <script type="text/javascript" src="/js/babel/babel.js"></script>
        <script type="text/jsx"
            data-presets="es2017,react,stage-0"
            data-plugins="transform-decorators-legacy">
            class Hello extends React.Component {
              render() {
                return <div>Hello {this.props.name}</div>;
              }
            }

            ReactDOM.render(
              <Hello name="World" />,
              document.getElementById('container')
            );
        </script>

# JSX를 사용안할경우 비교.
    원본 : https://stackoverflow.com/questions/41713966/how-babel-and-jsx-related-or-differ
        <script>
            class HelloWorld extends Component{
                render(){
                    return <div><h1>Hello World!</h1></div>
                }
            }

            class HelloWorld extends Component{
                render(){
                    return React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h1",
                            null,
                            "Hello World!"
                        )
                    );
                }
            }
        </script>

# Web환경에서 JSX 이용하기( NPM환경이 아닌 Web으로 실행 ).
    ※ 원본 : https://beomi.github.io/2017/03/20/Using-ES6-JSX-on-Client/
    - 모든브라우저는 ES6나 ES7을 미지원.
    - JSX를 미지원.
    - 바벨(Babel)은 ES6(ECMAScript6)을 ES5 문법 트랜스파일링한다.
      [바벨(Babel)](http://babeljs.io/)

    ※ 참고 : https://jsfiddle.net/softm/jvm7xw5L/
    :: example 1
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
        <!-- optional firebug -->
        <script src="https://getfirebug.com/firebug-lite-debug.js"></script>

        <div id="root"></div>

        <script type="text/babel">
            ReactDOM.render(
                <h1>Hello, world!</h1>,
                document.getElementById('root')
            );
        </script>

    :: example 2
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
        <!-- optional firebug -->
        <script src="https://getfirebug.com/firebug-lite-debug.js"></script>

        <div id="test">
        </div>

        <script type="text/babel">
        const  a = <div>
        aaaaaaaaaaaa
        </div>;

        console.log(a);

        // ================ ================ ================
        const Message = props => <div>{props.children}</div>    // 중괄호를 사용한 parameter값 삽입
        const element = (
            // class가 아닌 className 속성
            <div className="container">

                //Component의 children Component
                <Message>Hello World
                <Message>Goodbye World
                <Message>child</Message>
            </Message>
                </Message>
            </div>
        )
        console.log(element);

        ReactDOM.render(
          element,
          document.getElementById('test')
        );
        </script>

# React JSX 사용법.
    ※ 원본 : http://blog.naver.com/PostView.nhn?blogId=magnking&logNo=221025832115&categoryNo=30&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView
    :: 하위요소가 있는경우 container element(div)를 선언한다.
        render(){
             retrun(
                  <div>
                       <h1>Hi</h1>
                       <h2>Yay! Error is gone.</h2>
                  </div>
             )
        }

    :: JavaScript는 {}로 표현.
        render(){
             let text = "Hello React!";
             return(
                  <div>{text}</div>
             );
        }

    :: style 속성은 camelCase로 사용.
        render(){
             let styleA = {
                  color: 'aqua',
                  backgroundColor: 'black'
             };

             return(
                  <div style= {styleA}>React CodeLab</div>
             );
        }

    :: 주석은 {/* ... */} 형식.
        render(){
             return(
                  <div>
                       {/* This is How You comment */}
                       {/*Multi-line
                           Testing*/}
                       React CodeLab
                  </div>
             )
        }

# Create React Component
    class Hello extends React.Component {
      render() {
        return <div>Hello {this.props.name}</div>;
      }
    }

    var HelloWorld = React.createClass({
        render : function() {
            return (
            <div> Hello World </div>
            );
        }
    });


# props
    ※ 원문 : https://www.inflearn.com/course-status-2/
    - 컴포넌트 내부의 Immutable Data
    - JSX 내부에 {this.props.propsName}
    - 컴포넌트를 사용할때 : propsName="value"
    - this.props.children 기본 props로 하위 요소 참조.

    :: propTypes
        - 컴포넌트의 구조 표준을 정의를 검증한다.
            ::: 15.5부터 변경내용.
                - React.PropTypes --> PropTypes
                - prop-types.js를 import해서 사용해야한다.

            ::: 15.5이전
                Message.propTypes = {
                   value:React.PropTypes.string
                   secondValue:React.PropTypes.number.isRequired
                }

            ::: 15.5이후
                // import prop-types.js
                Message.propTypes = {
                   value:PropTypes.string
                   secondValue:PropTypes.number.isRequired
                }

# react - props example
    :: html
        <div id="root"></div>

    :: js
    const  a = <div>
    aaaaaaaaaaaa
    </div>;

    // console.log(a);
    // 1. 함수 컴포넌트
    // const Message = props => <div name={props.name} style={props.defaultStyle}>this element name is "{props.name?props.name:'empty'}" {props.value} : {props.children}</div>    // 중괄호를 사용한 parameter값 삽입

    // 2. 클래스 컴포넌트
    class Message extends React.Component {
      render() {
        return <div name={this.props.name} style={this.props.defaultStyle}>this element name is "{this.props.name?this.props.name:'empty'}" {this.props.value} : {this.props.children}</div>
            ;
      }
    }
    // /**/ 
    Message.propTypes = {
       name:PropTypes.string  
      ,defaultStyle:PropTypes.object.isRequired
    }

    Message.defaultProps = {
        name:"test"
        , defaultstyle:{
        color:"#00ff00"  
      }
    }

    let styleHello = {
      color: 'grey',
      backgroundColor: 'skyblue'
    };

    let styleGoobye = {
      color: 'brown',
      backgroundColor: 'purple'
    };

    let styleChild = {
      color: 'Violet',
      backgroundColor: 'Snow'
    };

    const element = (
        // class가 아닌 className 속성
        <div className="container">

            //Component의 children Component
            <Message name="name_hello"  defaultStyle={styleHello}>Hello World
            <Message name="name_goodbye" defaultStyle={styleGoobye}>Goodbye World
            <Message defaultStyle={styleChild}>child</Message>
          <Message>child2</Message>        
        </Message>
            </Message>
        </div> 
    )
    // console.log(element);
    // console.log("test2"); 

    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    // console.log("test3");

# state
    - 유동적인 데이터
    - JSX에서 {this.state.이름}
    - 초기값 설정이 필수, 생성자(constructor)에서
    - this.state = {}으로 설정.

    - 값을 수정할 때에는 this.setState({...}),렌더링 된 다음엔
    this.state = 절대사용하지 말것.
    forceUpdate();

    https://reactjs.org/docs/events.html#touch-events

# react - state example
    :: html
        <div id="root"></div>

    :: js
    class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value:0,
          value2:0
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState({
          value:this.state.value + 1,
          value2:this.state.value2 + 2
        })

        // setState를 이용해서 값을 갱신해야지
        // 아래처럼하면 안된다고함.
        // this.forceUpdate();
        // this.state.value2 = this.state.value2 + 2
      }

      render() {
        return (
          <div>
            <h2>{this.state.value} , {this.state.value2}</h2>
            <button onClick={this.handleClick}>Press Me</button>
          </div>
        );
      }
    };
    class App extends React.Component {
      render() {
        return (
          <Counter/>
        );
      }
    };

    ReactDOM.render(
      <App></App>,
      document.getElementById("root")
    );

# es6console
    - https://es6console.com/
    - es6 ---> es5



# react - component loop
    :: html
        <div id="root"></div>

    :: js
    class ContactInfo extends React.Component {
        render() {
            return(
                <div>
            {this.props.contact.name} {this.props.contact.phone}
                </div>
            );
        }
    }

    class Contact extends React.Component {
      constructor(props) {
          super(props);
          this.state={
            contactData:[ 
              {name:"김지훈",phone:"010-0000-0001"},
              {name:"이순신",phone:"010-0000-0001"},
              {name:"홍길동",phone:"010-0000-0001"}
            ]
          }
      }

      render() {
          const mapToComponent = (data) => {
            return data.map((contact,i) =>{
                    return(<ContactInfo contact={contact} key={i}/>);
            });
          }

          return(
            <div>
          {mapToComponent(this.state.contactData)}
            </div>
          );
      }

    }

    class App extends React.Component {
      render() {
        return (
          <Contact/>
        );
      }
    };

    ReactDOM.render(
      <App></App>,
      document.getElementById("root")
    );



