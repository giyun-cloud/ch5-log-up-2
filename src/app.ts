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
}