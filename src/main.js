import { css, html, LitElement } from "lit-element";

//todo component
class TodoElement extends LitElement{
    constructor(){
        super();
    }

    //styles
    static get styles(){
        return css `
        :host{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h1{
            text-align: center;
            font-family: "Volkhov", serif;
            color: #181e4b;
        }
        `;
    }

    //render template
    render(){
        return html `
        <div class="my-todo">
            <h1>Todo</h1>
            <input-element></input-element>
        </div>
        `
    }
}

//define custom element
customElements.define('todo-element', TodoElement)

