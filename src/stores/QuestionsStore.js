import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: ""
});

class QuestionStore {
  constructor() {
    this.questions = [];
    // this.loading = true;
  }

  fetchQuestions() {
    return instance
      .get("")
      .then(res => res.data)
      .then(questions => {
        this.questions = questions;
        // this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

export default QuestionStore;
