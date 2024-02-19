## Udemy Next-react 강의

### NOTE: React

React는 JSX 코드를 읽고 JS로 변환시켜 브라우저에서 DOM 랜더링을 한다.

> 변수나 상수를 html 코드 내에서 사용하는 방법

```JS
const nextReact = ['Next', 'React'];
const valueName = Math.Random() > 0.5 ? nextReact[0] : nextReact[1];
return (
    <div>{valueName}</div>
)
```

> 컴포넌트는 호출될 때 마다 실행된다.

```JS

// Test.js
const nextReact = ['Next', 'React'];

function Test() {
    const valueName = Math.Random() > 0.5 ? nextReact[0] : nextReact[1];

    return (
        <div>{valueName}</div>
    )
}

// App.js
function App() {
  // 커스텀 컴포넌트는 항상 대문자로 시작해야한다.
  return (
    <main>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </main>
  );
}
// output이 Next, React 랜덤으로 출력된다 이 말은. Test 컴포넌트가 매번 실행된다는 의미
```

> JSX 컴포넌트는 최상위 컴포넌트 한 개만 반환할 수 있다.

```JS

// O
return (
    <main>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </main>
  );

// X
return (
    <Test />
    <Test />
    <Test />
    <Test />
    <Test />
);
```

> Component.module.css

일종의 컨벤션, module.css를 사용해서 해당 컴포넌트에 스타일을 입힐 수 있고, 개발자 도구로 스타일을 확인해보면 변환된 클래스 이름으로 변환된 것을 확인할 수 있다.

```JS
import classes from './Post.module.css';
// 위와 같이 import 시켜 사용할 수 있다.
function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}
```

Component.module.css
Component.jsx
