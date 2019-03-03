import { decorate, observable, computed, action } from "mobx";
import socketIOClient from "socket.io-client";

class QuestionStore {
  constructor() {
    this.state = {
      question: "",
      difficulty: "",
      topic: ""
    };
    // this.loading = true;
  }

  socket = socketIOClient("http://127.0.0.1:3000");

  getQuestion() {
    console.log("HELL0");
    this.socket.on("FromAPI", data => {
      this.setState({ question: data.question });
    });
  }

  // fetchQuestions() {
  //   return instance
  //     .get("")
  //     .then(res => res.data)
  //     .then(questions => {
  //       this.questions = questions;
  //       // this.loading = false;
  //     })
  //     .catch(err => console.error(err));
  // }
}

decorate(QuestionStore, {
  question: observable,
  getQuestion: action
});

export default QuestionStore;
