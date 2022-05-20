import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

// react : 순수 자바스크립트를 이용해서 컴포넌트를 만들어 나감
// 브라우저가 이해할 수 있는 녀석 : html, css, js
// 아래 react 코드들은 바벨을 이용해서 다시 js로 변환 된다
// 변환된 js를 html과 연결해주는 녀석 : react-dom

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
