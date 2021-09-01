/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  constructor() {
    super();
    console.log(' constructor connected');
    this.myString = 'To-Do List Items';
    this.todoList = ['React', 'Angular', 'LITelement', 'Typescript', 'Javascript'];
    //this.itemPresent = this.todoList.length > 0 ? true : false;
}
//itemPresent: boolean;
static get properties() {
    return {
        myString: { type: String, reflect: true },
        todoList: { type: Array },
        itemPresent: { type: Boolean }
    };
}
static get styles() {
    return css `
  p { color: red; }
`;
}
connectedCallback() {
    super.connectedCallback();
    console.log('connected');
}
deleteTodo(value) {
    this.todoList = this.todoList.filter(todo => todo !== value);
}
handleAddTodoBtn() {
    var inputValue = this.shadowRoot.querySelector("#todo_text").value;
    console.log(inputValue, "***");
    this.addTodo(inputValue);
}
addTodo(value) {
    this.todoList = [...this.todoList, value];
}
render() {
    return html `
  <p>${this.myString}</p>
  <form>
  <input type="text" value="" id="todo_text" name="todoItem" />
  <input type="button" value="Add todo" @click="${this.handleAddTodoBtn}">
  </form>
  <ul class="list-group">
    ${this.todoList.map(i => html `<li  class="list-group-item">${i} 
    <button @click="${() => this.deleteTodo(i)}">Delete</button></li>`)}
  </ul>
  ${this.todoList.length > 0 ?
        html `<p>Render some HTML if itemPresent is true</p>` :
        html `<p>Render some other HTML if itemPresent is false</p>`}
`;
}
}

window.customElements.define('my-element', MyElement);
