class Todo {
    id: string;
    text: string;

    constructor(text: string){
        this.id = Math.random().toLocaleString();
        this.text = text;
    }
}

export default Todo;