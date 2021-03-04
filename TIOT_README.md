## 시작하기

```bash
git clone https://TIOTDevOps@dev.azure.com/TIOTDevOps/TIOT_UI/_git/TIOT_UI
cd TIOT_UI
yarn install
```

## 실행 및 테스트

```
yarn start
```

http://localhost:3000

#### 환경 변수

- 개발 
  .env.development
- 상용
  .env.production


## 빌드와 배포

```bash
yarn build
serve -s build

# Docker Compose
# docker-compose up -d --build

```

## 폴더 구조

- src - 프로젝트의 소스 
- src/assets - 자원 이미지, CSS 등이 포함된 폴더  
- src/common - 공통 파일들 redux store 설정 및 helper가 포함됨
  - hook - 커스텀 hook 이 포함된 폴더
  - mock - 테스트 api, dummy data 등이 포함됨
  - reducer - 카테고리 메뉴별 action/reducer를 모아 놓은 폴더
  - saga - 카테고리 메뉴별 saga 등을 모아놓은 폴더
  - util - 프로젝트에 사용된 각종 util 함수들을 모아 놓은 폴더
- src/component - 커스텀 컴포넌트들이 포함된 폴더
- src/container - 비지니스와 관련된 로직을 처리하는 컴포넌트들이 포함된 폴더

## 알려진 이슈

- ZPopup 에서 ZContorl(Text, Select) 이 갱신되지 않는 현상
- ZPopup 에서 style width 속성이 적용되지 않는 현상
- ZPopup 을 닫은 후 ZTable 이 갱신되지 않는 현상
- yarn.lock 을 수정하면 프로젝트가 실행되지 않습니다.


## 참고

### ZARA REACT UI
 - http://172.21.4.63:5000/

### CLIENT MANAGER API
- http://172.21.4.63:20200/swagger-ui/index.html

### 해당 프로젝트를 구성하는 주요 라이브러리는 아래와 같습니다.

 - zara-ui/react (http://172.21.4.63:5000/)
 - react-hook (https://reactjs.org/docs/hooks-intro.html)
 - redux (https://redux.js.org/)
 - redux-saga (https://redux-saga.js.org/)
 - immer (https://github.com/immerjs/immer)
 - axios (https://www.axios.com/)
 - react-bootstrap (https://react-bootstrap.github.io/)
 - echarts (https://echarts.apache.org/en/index.html)
 - echarts-for-react (https://www.npmjs.com/package/echarts-for-react)
 - recharts (https://recharts.org/en-US/)