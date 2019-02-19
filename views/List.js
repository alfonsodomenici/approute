import TodoService from "./../TodoService.js";

export default class List extends HTMLElement {

    constructor() {
        super();
        this.service = new TodoService();
    }

    connectedCallback() {
        this.service.all()
            .then(todos => this.render(todos));
    }

    render(data){
        this.innerHTML = `
            <h1>elenco todo </h1>
            ${data.map(({ id, title }) =>
            `<p>${id}-${title}</p>`
        ).join('')}
        `;
    }
}
customElements.define('comp-list', List);