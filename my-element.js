/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import { ListElement } from './components/listElement';
import { FormElement } from './components/formelement';

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
}

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
}

render() {
    return html `
  <p>${this.myString}</p>
  <form-element .todoList = ${this.todoList}></form-element>
  <list-element  .todoList = ${this.todoList}></list-element>
  ${this.todoList.length > 0 ?
        html `<p>Render some HTML if itemPresent is true</p>` :
        html `<p>Render some other HTML if itemPresent is false</p>`}
`;
}
}

window.customElements.define('my-element', MyElement);
