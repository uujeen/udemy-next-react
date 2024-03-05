## 서론

빠르게 학습하고 적용시키기에 급급했던 지난 날들에 뼈대를 붙이기 위해 강의를 보며 Next.js 기초를 탄탄하게 다지고자 강의를 시청하고 기록을 남기려고 합니다.

## Udemy Next-react 강의

Link : https://www.udemy.com/course/nextjs-react-incl-two-paths/

### NOTE: Next (app route)

> Next.js는 기본적으로 `SSR`을 제공한다.

Next.js는 기본적으로 리액트 컴포넌트를 서버 컴포넌트로 인지하여 `Server Side Rendering(SSR)`을 제공한다.
일반 리액트 컴포넌트를 서버 컴포넌트로 인지하여 JSX코드가 서버에서 실행된 후 브라우저에 넘겨져 HTML로 렌더링된다.

> 파일 시스템을 통한 경로 추가

`localhost:3000/about` 해당 경로에 들어가고 싶다면, `app/about`이라는 폴더를 생성하고 `page.jsx` or `page.tsx`를 통해 NextJS에게 해당 경로의 페이지에 접근할 수 있다고 알려줄 수 있다.

Next.js에는 이런 파일 컨벤션이 정의되어 있는데 예로 `layout, page, not-found, error.tsx`가 있다
더 자세한 내용은 [Next.js 파일 컨벤션](https://nextjs.org/docs/app/api-reference/file-conventions) 해당 링크에서 확인할 수 있다.

> 경로 이동하기

기존 방식대로 a태그의 href로 이동할 경우 백엔드에서 새로운 페이지를 다운받는 방식으로 페이지를 이동한다.(새로고침 아이콘이 일시적으로 변경되는 것을 확인하여 간단히 알 수 있다.)

이 의미는 React와 같이 더이상 SPA(Single Page Application)이 아니라는 의미이다.
기본적으로 Next.js는 HTML과 JS를 서버에서 랜더링하고 클라이언트에 보내기 때문에 당연하다고 이해할 수 있지만.

`Next.js에선 둘 다 사용이 가능하다.`
a태그가 아닌 Link태그를 동일한 방식으로 사용할 경우 페이지를 벗어나는게 아닌 화면 뒤에서 클라이언트에서 페이지 내용이 서버에서 렌더링되고 클라이언트에 보내져 클라이언트 사이드 자바스크립트 코드가 실행 돼 반영되는 것이다.
