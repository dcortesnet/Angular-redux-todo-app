export class TodoModel {
  id: number;
  text: string;
  isComplete: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text.charAt(0).toUpperCase() + text.slice(1);
    this.isComplete = false;
  }
}
