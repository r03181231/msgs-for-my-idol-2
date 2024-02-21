# 개인 프로젝트 "내 연예인을 위한 MSGs.ver2"

### < 목차 >

 **# 개인 프로젝트 팀 "내 연예인을 위한 MSGs.ver2**

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

**개발 기간** : 2024. 02.18 ~ 2024.02.21 (4일)

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
$ git clone https://github.com/r03181231/msgs-for-my-idol-2.git
$ cd msgs-for-my-idol-2
$ yarn install
$ yarn start

```


<br />


## 프로젝트 구성 및 기능

<br />

<p><img src="https://github.com/r03181231/msgs-for-my-idol/assets/152264010/85ab3c32-efd1-4938-b884-b7f0dc33295d" width="400px" align="right"></p>






### 권장 요구 사항 및 필수 구현 사항
- [x]  (1) 프로젝트 셋업
- [x]  (2) “redux-thunk” 브랜치 생성 및 이동
- [x]  (3) Router 셋업
- [x]  (4) Redux를 Redux-Toolkit 으로 리팩터링
- [x]]  (5) 로그인 화면 UI 작업
- [x]  (6) 로그인 화면 API 연결
- [x]  (7) Layout 컴포넌트 작성
- [x]  (8) 홈 화면 UI 수정
- [x]  (9) json-server 셋업
- [x]  (10) 홈 화면 API 연결
- [x]  (11) 상세 화면 UI 및 API 연결
- [ ]  (12) 프로필 화면 UI
- [ ]  (13) 프로필 화면 API 연결
- [ ]  (14) 13단계까지 모두 완료하셨다면 선택구현사항들에 도전해 보시면 되겠습니다!
  <br />
  
## 선택 구현 사항 
- [ ] 모달 구현
    - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용해 봅시다.
- [x] 만능 버튼 구현(공통 컴포넌트 버튼)
    - 하나의 버튼 컴포넌트를 홈화면과 상세화면 모두에서 적용할 수 있도록 해봅시다.
    - props 로 버튼 크기나 버튼 텍스트 등을 받아봅시다.
- [x] 새로고침해도 UI 유지
    - 로컬스토리지를 이용해 봅시다.
- [ ] 검색 기능 구현
    - query string을 적용해 봅시다. (ex. http://localhost:3000?search=에스파)
    - react-router-dom의 useSearchParams를 이용해 보세요.

<br />

<br />

### 2. 파일 구조

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






