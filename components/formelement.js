 import {LitElement, html, css} from 'lit';
 
 export class FormElement extends LitElement {
 
   constructor() {
     super();
     console.log(' constructor connected');
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
 }
 
 handleAddTodoBtn() {
     var inputValue = this.shadowRoot.querySelector("#todo_text").value;
     console.log(inputValue, "*****")
     this.addTodo(inputValue);
 }
 
 addTodo(value) {
     this.todoList = [...this.todoList, value];
 }
 
 render() {
     return html `
   <form>
   <input type="text" value="" id="todo_text" name="todoItem" />
   <input type="button" value="Add todo" @click="${this.handleAddTodoBtn}">
   </form>
 `;
 }
 }
 
 window.customElements.define('form-element', FormElement);
 