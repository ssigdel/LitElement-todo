import { css, html, LitElement } from "lit-element";

//list component
class ListElement extends LitElement{
    //property
    static get properties(){
        return {
            value: {type: String}
        }
    }

    constructor(){
        super();
    }

    //styles
    static get styles(){
        return css `
        .list-item{
            display: flex;
            justify-content: space-between;
            border-left: 5px solid  #0275d8;
            padding: 10px;
            margin: 15px 0;
            font-family: "Poppins", sans-serif;
            background: white;
        }
        .delete-btn{
            color: white;
            background-color: #d9534f;
            border: none;
            border-radius: 5px;
        }
        .edit-btn{
            color: white;
            background-color: #0275d8;
            border: none;
            border-radius: 5px;
        }
        `;
    }

    //handle delete click
    handleDeleteClick(){
        document.querySelector('todo-element').shadowRoot.querySelector('.my-todo').removeChild(this)
    }

    //handle edit click
    handleEditClick(){
        this.shadowRoot.querySelector('.list-text').setAttribute('contenteditable', true)
    }

    //render template
    render(){
        return html `
            <div class="list-item">
                <div class="list-text">${this.value}</div>
                <div>
                    <button class="edit-btn" @click="${this.handleEditClick}">Edit</button>
                    
                    <button class="delete-btn" @click="${this.handleDeleteClick}">Delete</button>
                </div>
            </div>
        `
    }
}

//define custom element
customElements.define('list-element', ListElement)

