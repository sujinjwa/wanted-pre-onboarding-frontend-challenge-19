# wanted-pre-onboarding-frontend-challenge-19

3월 프론트엔드 프리온보딩 과정을 위한 사전과제

## 과제 확인을 위한 npm 실행 명령어

```
npm run start
```

## 요구 사항 정리

### 세팅

- [] 과제 제출 최상단에 개인 이력서 주소 첨부해주세요.
- [x] create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [x] 아래 과제 공통 세팅의 폴더 구조를 확인합니다.

```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx
```

- [x] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 issues에 올리면 됩니다.
- [x] 과제물은 main 브랜치에 올립니다.
- [x] 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [x] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [x] 함수형 컴포넌트를 사용해 코드를 짜주세요.

### 기능 구현

1. 컴포넌트 추가

- [x] 최상단에 컴포넌트 추가 기능을 위한 input 창과 Add 버튼을 만든다.

  - [x] input 창의 placeholder는 '입력해주세요', Add 버튼의 value는 'Add'이다.

- [x] Add 버튼을 누르거나 입력창에 입력 후 엔터키를 누르면 하단에 컴포넌트가 추가된다.

  - [x] 입력창이 빈 값인 경우 추가 기능이 실행되지 않도록 한다.

2. 컴포넌트 삭제

- [x] 추가된 컴포넌트의 우측에 삭제 기능을 위한 Delete 버튼을 만든다.

  - [x] Delete 버튼의 value는 'Delete'이다.

- [x] Delete 버튼을 클릭하면 해당 컴포넌트가 삭제된다.
