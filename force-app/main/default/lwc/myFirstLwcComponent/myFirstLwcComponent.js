import { LightningElement } from 'lwc';

export default class MyFirstLwcComponent extends LightningElement {
    greeting = 'World, Anurag!';
    changeHandler(event) {
      this.greeting = event.target.value;
    }
}