# 개인 프로젝트 "내 연예인을 위한 MSGs"

### < 목차 >

 **# 개인 프로젝트 팀 "내 연예인을 위한 MSGs**

- 팀원소개

**# 개인 프로젝트 소개**

- 개발 기간, 프로젝트 명&소개&목표

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 기능

  - 필수 요구 사항
  - 선택 사항
  - 파일 구조

<br />

## 프로젝트 팀 소개

**팀원 소개**

---

|                            남해리                            |
| :----------------------------------------------------------: |
|                          Enfj, Infp                          |
| <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="250px" /></p> |
|          [@r03181231](https://github.com/r03181231)          |
|                           FrontEnd                           |


<br />

**목표** 

---

\- 포기하지 말자 ! 

\- 피할 수 없으면 돌아가자 ! 

\- 끝까지 완성하자 !

<br />


## 프로젝트 "오늘만 한다" 



**프로젝트 명** : MSG ( 내 연예인을 위한 Messages)

**개발 기간** : 2024. 01.30 ~ 2024.02.03 (5일)

**프로젝트 소개** : 내가 응원하고 싶은 연예인에게 전하는 메세지를 남기는 사이트

**프로젝트 목표** : 좋아하는 다수의 연예인에게 각각 응원메세지를 남길 수 있는 서비스 



### 🚦 Project Rules

#### **개발 환경**

- **editor** : Visual Studio Code
- **environment** : git, github
- **development** : Javascript, react18.2.0, CSS3, HTML5

<br />

#### Code Convention
- JSX파일 이름 : 파스칼케이스

- JSX파일 내 상위 함수의 변수 : 파스칼 케이스 (ex. export const Pascal = () => {} export Default)

- style 파일 이름 : 파스칼케이스

- 변수 : 카멜케이스

- 클래스명 : 대쉬(-)

- 시멘틱태그로 영역 구별 (ex. header, main, section, footer)

- branch 이름 : props-drilling, context(contextAPI만 이용), redux(redux만 이용)

- issue 이름 : **[타입] - 설명 ( ex. [Feat] - search 기능 구현 )**

  

**개인 작업하기**

- 기능 개발을 위해 작성한 이슈 번호를 사용하여 branch를 생성합니다. (ex. (git branch 사용법 참고))

- 작업 전에 develop branch를 반드시 pull하고 시작합니다. (git pull origin develop)

- commit은 컨벤션을 지켜 메세지를 적습니다.

- push은 해당 작업 branch에 합니다.

- pull request도 컨벤션을 지켜 생성합니다.

- 팀원들의 코드리뷰를 받았으면 merge 합니다.

- 꼭! 브랜치를 헷갈리지 않도록 합시다. 이슈번호 확인!



<br />



#### Commit Convention

**commit type**

- Feat : 기능 구현
- Chore: 기능 변경 없는 코드 변경 사항
- Del : 코드 삭제
- Fix : 버그 수정
- Docs : 문서 수정
- Style : UI 추가 및 수정
- Refactor: 코드 리팩토링
- Test : 테스트 코드, 리팩토링 코드 추가
- Setting: 프로젝트 세팅



**commit message**

- 모든 커밋 메세지 뒤에는 이슈번호를 태깅합니다.
- 커밋 메세지 영어로
- 모든 커밋 메세지는 { **[타입/#이슈번호] 메세지** } 로 작성합니다.
- ex) [Feat/#1] add splash screen



<br />

## 시작 가이드



### Installation

```bash
$ git clone https://github.com/r03181231/msgs-for-my-idol.git
$ cd msgs-for-my-idol
$ yarn install
$ yarn start

```


<br />


## 프로젝트 구성 및 기능

<br />

<p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/85ab3c32-efd1-4938-b884-b7f0dc33295d" width="400px" align="right"></p>






### 권장 요구 사항
- [x]  (1) 프로젝트 셋업
    - CRA boilerplate 로 프로젝트 생성
    - pages/ , components/ , shared/ , assets/ 폴더 작성 및 필요 컴포넌트 사전 작성
    - styled-components, react-router-dom 설치
    - title 변경 (index.html)
    - jsconfig.json (src 폴더 기준 절대경로 설정)
    - 제출된 깃헙에는 props-drilling, context, redux 라는 이름의 각각의 브랜치명이 있어야 합니다.
    - props-drilling 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
    - props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.
    - context 브랜치에서는 props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링합니다.
    - context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.
    - redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링합니다.

  <br />

## 필수 구현 사항

- [x] 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- [x] 아티스트별 게시물 조회 기능 구현 (Home - Read)
- [x] 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- [x] 팬레터 상세 화면 구현 (Detail - Read)
- [x] 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- [x] 상세화면에서 팬레터 삭제 구현 (Detail - Delete)

> **필수 요구 사항!  아래 내용을 꼭 지켜면서 구현해 주세요!**
> 
- [x]  styled-components 를 이용하여 스타일링
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- [x]  전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- [x]  styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
    - 아티스트 선택탭에 적용해 보세요
- [x]  팬레터 등록 시 id는 uuid 라이브러리를 이용
    
    https://www.npmjs.com/package//uuid

## 선택 구현 사항 
- [ ] 모달 구현
    - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용해 봅시다.
- [x] 만능 버튼 구현(공통 컴포넌트 버튼)
    - 하나의 버튼 컴포넌트를 홈화면과 상세화면 모두에서 적용할 수 있도록 해봅시다.
    - props 로 버튼 크기나 버튼 텍스트 등을 받아봅시다.
- [ ] 새로고침해도 UI 유지
    - 로컬스토리지를 이용해 봅시다.
- [ ] 검색 기능 구현
    - query string을 적용해 봅시다. (ex. http://localhost:3000?search=에스파)
    - react-router-dom의 useSearchParams를 이용해 보세요.

<br />

### 브랜치 구조
- [x] Props Drilling → Context API → Redux 순으로 각각 별도의 브랜치


<br />

### 2. 파일 구조


---

#### 브랜치 이름 : props-drilling(정식명칭: prop-drilling)
<div>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/aa3742b3-d294-4490-9a59-6b4a5f66ac54" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/7ead0f2d-0891-4410-b782-a7b9d614426b" width="150px" /><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/c6181b5d-d833-4e17-9899-5f2e78b65a68" width="150px" align="left" /><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/e397c87c-806b-4ed9-b053-5f7b58a4775e" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/5e8edc28-b407-43cd-adc3-d2dfcd3eb160" width="150px"  align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/e071e841-be16-4cfe-aa15-12fe8fe6ca63" width="150px"  /><p>
 
</div>

<br />

---

#### 브랜치 이름 : context
<div>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/ff083e68-b160-45e1-83de-07b6ead2a608" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/032cc3c2-d6ff-4e68-909c-6cf5b3958165" width="150px"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/94265e5d-d30a-45d1-b12f-43dd77ffa4ee" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/d70bb958-0ab3-4a66-8ce9-0ef8f2920017" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/656696eb-6f99-4f38-8ce2-4052eb8dfdf6" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/aee11e3a-ac0e-45f2-88b2-1f7c89366285" width="150px" /><p>
 
</div>

<br />

---

#### 브랜치 이름 : redux
<div>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/323ebbd7-9e31-4a52-8284-64741134e401" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/c67d3f92-3d71-488e-9ae7-370fe188a6a2" width="150px" /><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/45335800-4dbe-4eef-84f8-6ca7c691e321" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/dc9e98e1-62dc-4fda-89ab-ce6e2f90c56c" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/4b6b4527-f32d-4392-ad52-610e95618ca4" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/8ac31e57-0a46-45b2-af63-3d16487e9d72" width="150px"/><p>
 
</div>






