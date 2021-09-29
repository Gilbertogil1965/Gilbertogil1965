import React from "react";
import { render } from "react-dom";
import Contato from "./Contato";

export default class Lista extends React.Component {
    construtor() {
        super();
        this.state = {
            tasks:[]
        }
    }


//export default function Lista(props) {
   // const contatoList = props.contato.map(contato => {
       // return <Contato key={contato.id} contato={contato} fetchContatoCallback={props.fetchContatoCallback} />
    //})
    
    return (
        
        <ul>    
            "Contato" [
        {
         "id": 1,
         "name": "Luis Eduardo",
         "CPF": "111-111-111-11",
         "email":"luis@gmail",
         "telefone": "(92)1111-1111"
        },
        {
         "id": 2,
         "name": "Antonio Cabello",
         "CPF": "222-222-222-22",
         "email":"antonio@gmail",
         "telefone": "(92)2222-2222"
        },
        {
         "id": 3,
         "name": "Maria Parra",
         "CPF": "333-333-333-33",
         "email":"maria@gmail",
         "telefone": "(92)3333-3333"
        },
        {
         "id": 4,
         "name": "Cesar Carvajal",
         "CPF": "444-444-444-44",
         "email":"cesar@gmail",
         "telefone": "(92)4444-4444"
        },
        {
         "id": 5,
         "name": "Freddy Linares",
         "CPF": "555-555-555-55",
         "email":"freddy@gmail",
         "telefone": "(92)5555-5555"
        },
        {
         "id": 6,
         "name": "Jesus Roman",
         "CPF": "666-666-666-66",
         "email":"jesus@gmail",
         "telefone": "(92)6666-6666"
        },
        {
         "id": 7,
         "name": "Pedro Torres",
         "CPF": "777-777-777-77",
         "email":"pedro@gmail",
         "telefone": "(92)7777-7777"
        },
        {
         "id": 8,
         "name": "Estefani Aguilera",
         "CPF": "888-888-888-88",
         "email":"estefani@gmail",
         "telefone": "(92)8888-8888"
        }
        ]
        </ul>
    )
    
    

    //fetchContato() {
        //fetch("http://localhost:3001/contato")
         // .then(response => response.json())
          //console.log(tasks))
          //.then(contato => this.setState({ contato: contato, version: this.state.version + 1 }))
      //}
    
    componentDidMount(); {
        fetch("http://localhost:3001/contato")
        .then(response => response.json())
        .then(tasks =>tasks.setState({tasks:tasks}))}
    render(); {
        const taskList = this.setState.map(task =>{
            return <Contato key={taskList.id}task = {task}/>})
          //return(<ul>{taskList}</ul>); 
        }
    


    


    