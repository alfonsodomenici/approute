import TodoService from "./../TodoService.js";

export default class Create extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.service = new TodoService();
        this.txtTitolo=null;
    }

    connectedCallback() {
        this.root.innerHTML = `
        <style> 
            @import url(./../pure.css);

            :host{
                all: initial;
                display:block;
            }
        </style>
        <form class='pure-form'>
           <input type="text" placeholder="titolo"></input>
           <button class='pure-button pure-button-primary'>Save</button>
        </form>
        `;
        const btnSave = this.root.querySelector('button');
        btnSave.addEventListener('click', e => this.onsave(e));
        this.txtTitolo = this.root.querySelector('input');
    }

    onsave(e) {
        this.service.save1({
            title: this.txtTitolo.value,
            body: "xxx",
            userId: 1
        })
    }

}
customElements.define('comp-create', Create);