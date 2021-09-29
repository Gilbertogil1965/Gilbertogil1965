import React from "react";
import Lista from "./Lista";
import CriarContato from "../CriarContato"
import './App.css';

// Lista de tarefas
// -> Listar tarefa por tarefa
// -> tarefa

export default class App extends React.Component {
  constructor() {
    super();

   this.state = { tasks: [], version: 0,}
   this.fetchTasks = this.fetchTasks.bind(this);
 }

  fetchTasks() {
    fetch("http://localhost:3001/contato")
      .then(response => response.json())
      //console.log(tasks)
      .then(tasks => this.setState({ tasks: tasks, version: this.state.version + 1 }))
  }


  componentDidMount() {
   this.fetchTasks()
 }
 render() {
   return(<div className = "App">
     <CriarTasks createTasksCallback = {this.fetchTasks} />
     <Lista Tasks = {this.state.tasks} />
     </div>
   );
 }
}
  function App() {
    return (
      <div className="App">
        <CriarContato criarContatoCallback={this.fetchContato} />

        <Lista tasks={this.state.tasks} fetchTasksCallback={this.fetchContato} />
      </div>
    );
  }


