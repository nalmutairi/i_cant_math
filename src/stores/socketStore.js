import { decorate, observable, computed, action } from "mobx";
import socketIOClient from "socket.io-client";

class socketStore {
  constructor() {
    this.question = "";
    this.users = [];
    this.scores = [];
    this.code = "Test";
    this.socket = socketIOClient("http://104.248.142.166");
  }

  joinRoom(username, room) {
    this.socket.emit("user joined", {
      username: username,
      room: room
    });
  }

  choseTopic(topic) {
    this.socket.emit("topic", topic);
  }

  choseLevel(level) {
    this.socket.emit("level", level);
  }

  // getQuestion() {
  //   this.socket.on("FromAPI", data => (this.question = data));
  // }
  //
  // getUsers() {
  //   this.socket.on("list", data => {
  //     console.log("user list data: ", data);
  //     this.users = data;
  //   });
  // }
  //
  // getCode() {
  //   this.socket.on("room code", data => {
  //     console.log("DATA", data);
  //     this.code = data;
  //   });
  //   this.getUsers();
  // }

  startGame(roomcode) {
    this.socket.emit("start", roomcode);
  }

  playNow() {
    this.socket.emit("new game");
  }
}

decorate(socketStore, {
  question: observable,
  socket: observable,
  scores: observable,
  users: observable,
  joinRoom: action,
  getQuestion: action,
  playNow: action
});

const newsocket = new socketStore();
newsocket.socket.on("list", data => (newsocket.users = data));
newsocket.socket.on("room code", data => {
  newsocket.code = data;
});
// newsocket.socket.on("FromAPI", data => {
//   console.log("IM HERE", data);
//   newsocket.question = data;
// });
newsocket.socket.on("points", data => {
  newsocket.scores = data;
});

export default newsocket;
