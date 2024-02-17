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
