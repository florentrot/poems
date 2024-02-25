export class Poem {
  id: number;
  title: string;
  text: string;
  data: string;

  constructor(id: number, title: string, data: string, text: string) {
    this.id = id;
    this.title = title;
    this.data = data;
    this.text = text;
  }
}
