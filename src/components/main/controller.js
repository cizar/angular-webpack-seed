export default class MainController {
  constructor() {
    this.name = "Testing";
    this.count = 0;
  }
  changeName() {
    this.count++;
    this.name = "Changed.. " + this.count;
  }
}
