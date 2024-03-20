## 서론

빠르게 학습하고 적용시키기에 급급했던 지난 날들에 뼈대를 붙이기 위해 강의를 보며 Next.js 기초를 탄탄하게 다지고자 강의를 시청하고 기록을 남기려고 합니다.

## Udemy Next-react 강의

Link : https://www.udemy.com/course/nextjs-react-incl-two-paths/

## NOTE: Next.js (app router)

### Next.js는 기본적으로 `SSR`을 제공한다.

Next.js는 기본적으로 리액트 컴포넌트를 서버 컴포넌트로 인지하여 `Server Side Rendering(SSR)`을 제공한다.

일반 리액트 컴포넌트를 서버 컴포넌트로 인지하여 JSX코드가 서버에서 실행된 후 브라우저에 넘겨져 HTML로 렌더링된다.

### 라우팅 방식 (app router)

> App router 동작 원리

`localhost:3000/about` 해당 경로에 들어가고 싶다면, `app/about`이라는 폴더를 생성하고 `page.jsx` or `page.tsx`를 통해 NextJS에게 해당 경로의 페이지에 접근할 수 있다고 알려줄 수 있다.

about 폴더에 page 파일이 없다면 Next에서는 해당 경로를 인식할 수 없어 404에러를 반환한다.

Next.js에는 이런 파일 컨벤션이 정의되어 있는데 예로 `layout, page, not-found, error.tsx`가 있다.

더 자세한 내용은 [Next.js 파일 컨벤션](https://nextjs.org/docs/app/api-reference/file-conventions) 해당 링크에서 확인할 수 있다.

### 경로 이동하기

기존 방식대로 a태그의 href로 이동할 경우 백엔드에서 새로운 페이지를 다운받는 방식으로 페이지를 이동한다.(새로고침 아이콘이 일시적으로 변경되는 것을 확인하여 간단히 알 수 있다.)

이 의미는 React와 같이 더이상 SPA(Single Page Application)이 아니라는 의미이다.

기본적으로 Next.js는 HTML과 JS를 서버에서 렌더링하고 클라이언트에 보내기 때문에 당연하다고 이해할 수 있지만.

> Next.js에선 둘 다 사용이 가능하다.

a태그가 아닌 Link태그를 동일한 방식으로 사용할 경우 페이지를 벗어나는게 아닌 화면 뒤에서 클라이언트에서 페이지 내용이 서버에서 렌더링되고 클라이언트에 보내져 클라이언트 사이드 자바스크립트 코드가 실행 돼 반영되는 것이다.

### Layout

모든 Next 프로젝트는 최소 하나의 `Root Layout`이 존재해야한다.
layout은 말 그대로 페이지가 렌더링 되는 레이아웃(Wrapper)을 의미한다.

Next 프로젝트는 head 요소와 metadata와 같은 데이터는 `metadata`라는 변수 또는 상수를 export할 시 해당 페이지의 메타데이터를 설정할 수 있다.

여기서 선언된 메타데이터는 해당 레이아웃이 포함된 모든 페이지에 설정된다.

따라서 layout에 head 태그가 없는 이유는 메타데이터에서 설정되거나 Next.js로 인해 이면에서 자동으로 설정된다.

++ 이전 프로젝트에서 메타데이터를 동적으로 설정해준 적이 있는데 api로 데이터를 불러와 해당 메타데이터 요소를 할당 해줌으로써 적용이 가능하다.

- global.css
  Root Layout에서 선언된 global.css로 인해 로딩된 모든 페이지에서 사용이 가능하다.
- icon.png
  icon으로 이름이 설정된 이미지 파일의 경우 Next.js에서 자체적으로 favicon으로 인식한다.

### import

import 방식을 예전처럼 @를 사용해서 할 수 있는데 다음과 같이 @ 사용하면 root 디렉토리에서 부터 탐색을 한다.

동작 원리는 `jsconfig.json` or `tsconfig.json` 에서 아래와 같이 설정되어 있기 때문에 가능한 것이다.

```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

여기서 말하는 root 디렉토리는 app 디렉토리 외부에 있는 폴더를 의미한다.

```JS
// 둘 다 동일하다
import Header from '../components/Header';
import Header from '@/components/Header';
```

### Dynamic Route

블로그를 예시로 하나의 글을 작성할 때 마다 `/blog/post-1`, `/blog/post-2` 과 같이 라우팅할 폴더를 계속 만들 수 없다.

따라서 `/blog/[post]`와 같이 해당 폴더를 대괄호로 묶어주는 컨벤션을 적용해줌으로써 `/blog/1`, `/blog/2`, `/blog/everything` 과 같이 동적으로 라우팅을 할 수 있다.

하지만, 예를 들어 blog 하위 폴더에 posting이라는 폴더가 존재한다면 어디로 라우팅이 될까?

정답은 `/blog/posting` 페이지로 라우팅 된다. Next.js에서는 이론적으로 posting도 동적 segment의 값으로 맞지만, 이미 명명된 폴더가 존재할 경우에는 해당 폴더로 라우팅된다.

### Layout

레이아웃과 페이지의 경우 컴포넌트들을 직접 렌더링하는 것이 아니다.

JSX 코드에 직접 사용하는 것이 아니라 Next.js에서 대신 사용해준다.

### Img

Next.js에서는 리액트 프로젝트와 다르게 img 파일을 그대로 src에 적용할 수 없고 src 프로퍼티로 접근 해야한다.

Next.js에서는 import 시킨 이미지가 src 프로퍼티에 저장된 객체가 될 것이기 때문이다.

```JS
import logoImg from '@/assets/logo.png';

export default function Header() {
  return (
    <header>
      <Link href="/">
        {/* <img src={logoImg}></img> */}
        <img src={logoImg.src}></img>
      </Link>
    </header>
  );
}

```
