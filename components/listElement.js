 import {LitElement, html, css} from 'lit';

 export class ListElement extends LitElement {
 
   constructor() {
     super();
 }
 
 static get properties() {
     return {
         todoList: { type: Array }
     };
 }
 
 static get styles() {
     return css `
   p { color: red; }
 `;
 }
 
 connectedCallback() {
     super.connectedCallback();
     console.log('connected', this.todoList);
 }
 
 deleteTodo(value) {
     this.todoList = this.todoList.filter(todo => todo !== value);
 }
 
 render() {
     return html `
        <ul class="list-group">
            ${this.todoList.map(i => html `<li  class="list-group-item">${i} 
            <button @click="${() => this.deleteTodo(i)}">Delete</button></li>`)}
        </ul>
 `;
 }
 }
 
 window.customElements.define('list-element', ListElement);
 