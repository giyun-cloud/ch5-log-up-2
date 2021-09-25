import temaplte from './app.template';
import { AnyObject } from './types';



export default class App {
  template = temaplte;
  data: AnyObject;
  container: HTMLElement;
  fields: AnyObject[];
  active: boolean = false;

  constructor(container: string, data: AnyObject = {}) {
    this.container = document.querySelector(container) as HTMLElement;
    this.data = data;
    this.fields = [];

    this.initialize();

    setInterval()
  }

  private onSubmit = (e: Event) => {
    e.preventDefault();

    if(!this.active) return;

    const submitData: AnyObject = this.fields
      .map(field => ({[field.name]: field.value}))
      .reduce((a,b) => ({...a,...b}), {});

    console.log(submitData);
  }

  public render = () => {
    this.container.innerHTML = this.template(this.data);
    this.fields.forEach(field => {
      field.render(true);
    });

    this.container.addEventListener('submit', this.onSubmit)
  }
}