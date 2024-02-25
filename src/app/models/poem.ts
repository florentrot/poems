export class Poem {
  id: number;
  title: string;
  text: string;
  date: string;

  constructor(id: number, title: string, date: string, text: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.text = text;
  }
}
