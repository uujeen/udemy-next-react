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

Component.module.css
Component.jsx

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

> React 랜더링, useState, useRef 훅과 변수

React는 컴포넌트 함수를 실행시키면서 함수가 반환하는 JSX 코드를 실행한다. 그리고 HTML 스냅샷을 찍어 그걸 랜더링 시킨다.
그리고 React는 컴포넌트를 처음 실행되었을 때에만 랜더링 한다.
따라서 변수를 출력하고 싶으면 useState를 사용해야 React는 해당 변수가 변경된 것을 인지했을 때 비로소 리랜더링이 일어나 화면에 변화된 값을 볼 수 있는 것이다. 만약 변수로써 기능과 변수의 값을 유지하고 싶다면 useRef를 사용한다.

만약 const, let과 같이 변수를 선언해서 사용할 경우 함수가 재실행되면 초기값으로 돌아가 기존 값을 잃어버리기 떄문이다.

그냥 당연하게 사용했지만 useState는 배열을 반환하여 0번째는 value 값을 1번째는 변수의 상태를 변경할 수 있는 함수를 반환한다.

```JS
// useState는 배열을 반환한다.
const reactState = useState('');
const value = reactState[0];
const updateState = reactState[1];

// 기존에 우리가 사용했던 방식
const [value, setValue] = useState('');

```

React는 useState에서 반환하는 set함수를 호출했을 때 메모리에 새 상태 값을 저장할 뿐 아니라, 해당 컴포넌트를 재호출한다.

> Virtual DOM

React는 리랜더링이 일어났을 때 찍은 스냅샷(가상 DOM)을 가지고 기존 DOM과 비교하여 달라진 부분이 있다면 해당 UI를 수정한다.
변경된 부분만 업데이트 하므로 불필요하게 DOM을 다 업데이트 하지 않는다.

> 상태 갱신 함수

React에서는 상태 갱신 함수를 바로 실행할 수 있고 아닐 수 도 있기 때문에, 여러 업데이트가 일어날 때 구버전이 잘못된 상태로 업데이트 할 수 있기 때문에, 다음과 같은 안전한 방식으로 업데이트 하는 것을 권장한다.

```JS
// X
  const [posts, setPosts] = useState([]);

  function addPostHandler(item) {
    setPosts([item, ...posts]);
  }

// O
  const [posts, setPosts] = useState([]);

  function addPostHandler(item) {
    setPosts((prev) => [item, ...prev]);
  }
```
