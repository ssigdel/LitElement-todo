import { css, html, LitElement } from "lit-element";

//input component
class InputElement extends LitElement{
    constructor(){
        super();
    }

    //styles
    static get styles(){
        return css `
        input[type="text"]{
            padding: 5px;
            width: 300px;
            outline: none;
            font-size: 16px;
        }
        .add-btn{
            padding: 10px;
            font-size: 14px;
            color: white;
            background-color: #0275d8;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        `;
    }

    //render template
    render(){
        return html `
            <input type="text" placeholder="Enter todo"/>
            <button class="add-btn" @click="${this.handleAddClick}">Add</button>
        `
    }

    //handle add button click
    handleAddClick(){
        const inputBox = this.shadowRoot.querySelector('input[type="text"]')

        //add only if there is value
        if(inputBox.value){
            let listItem = document.createElement('list-element')

            listItem.setAttribute('value', inputBox.value) 

            document.querySelector('todo-element').shadowRoot.querySelector('.my-todo').appendChild(listItem)

            inputBox.value = ''
        }
    }
}

//define custom element
customElements.define('input-element', InputElement)

