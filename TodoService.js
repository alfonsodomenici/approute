import { keycloak } from "./app.js";

export default class TodoService {

    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/todos';
    }

    async all() {
        const resp = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + keycloak.token
            }
        });
        const todosPromise = await resp.json();
        return todosPromise;
    }

    save(todo) {
        fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(todo)
        })
        .then(response => response.json())
        .then(json => console.log(Json.stringify(json)))
        .catch(error => console.log(error));
    }

    async save1(todo) {
        console.log(JSON.stringify(todo));
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': 'Bearer ' + keycloak.token
            },
            body: JSON.stringify(todo)
        }).catch(error=>console.log(error));

        const content = await response.json(); 
        console.log(content);
    }


}