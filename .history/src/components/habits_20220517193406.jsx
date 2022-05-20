import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0 },
      { name: "Running", count: 0 },
      { name: "Coding", count: 0 },
    ],
  };
  //Habits 라는 컨테이너 컴포넌트를 만들었음.
  // render안에서는 habits들을 빙글빙글 돌면서 render에 있는 habit들과 연결시켜주었다.
  // map에서 habit이라는 state data들을 하나씩 전달하게 된다.
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
