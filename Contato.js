import React from "react";
import EditarContato from "./EditarContato";

export default class Contato extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.delete = this.delete.bind(this);
        this.switchEdit = this.switchEdit.bind(this);
    }

    delete() {
        const { id } = this.props.contato;
        const url = `http://localhost:3001/contato/${id}`;

        fetch(url, {
            method: "DELETE"
        })

        this.props.fetchContatoCallback();
    }

    switchEdit() {
        this.setState({ editing: !this.state.editing })
    }

    render() {
        this.props.contato
        contato => { id, title, done }

        const { id, title, done } = this.props.contato;

        return (
            <li>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Done: {done ? "Pronto!" : "Pendente"}</div>

                <button onClick={this.delete}>Delete</button>
                <button onClick={this.switchEdit}>Edit</button>

                {
                    this.state.editing ?
                        <EditarContato 
                            contato={this.props.contato}
                            fetchContatoCallback={this.props.fetchContatoCallback}
                            switchEdit={this.switchEdit}
                        /> :
                        null
                }
            </li>
        )
    }
}