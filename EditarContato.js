import React from "react";

export default class EditarContato extends React.Component {
    constructor() {
        super()

        //const { title, done } = props.task

        this.state = { 
            nome: "",
            cpf: "",
            telefone: "",
            email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    handleChange(event){
        this.setState({ nome: event.target.value })
        this.setState({ cpf: event.target.value })
        this.setState({ telefone: event.target.value })
        this.setState({ email: event.target.value })
    }
    save()
    {
        const newContato = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            email: this.state.email
        }  
    }
    fetchTasks() {
        fetch("http://localhost:3001/contato")
          .then(response => response.json())
          .then(tasks => this.setState({ tasks: tasks, version: this.state.version + 1 }))
     //method: "POST",
    //headers: {"Content-Type": "application/json"}
      //body: JSON.stringify(newContato));          

        this.setState({nome:""});
        this.setState({cpf:""});
        this.setState({telefone:""});
        this.setState({email:""});
        this.props.cadastrar(contatoCallback());
    }

    render() {
        
    return (<div>
            <form>
              <h1>DADOS PERSONAIS</h1>

              <div class="form-group">
              <label for="">Nome Completo</label>
              <input type="nome" class="form-control" id="exampleInputnome" aria-describedby="nomeHelp" placeholder="Seu nome"></input>
              <small id="nomeHelp" class="form-text text-muted"></small>
              </div>
        
              <div class="form-group">
              <label for="">CPF:</label>
              <input type="cpf" class="form-control" id="exampleInputCpf" aria-describedby="cpfHelp" placeholder="123-456-789-11"></input>
              <small id="cpfHelp" class="number 000-000-000-00"></small>
              </div>
        
              <div class="form-group">
              <label for="">Telefone:</label>
              <input type="telefone" class="form-control" id="exampleInputTelefone" aria-describedby="telefoneHelp" placeholder="(22)2222-2222"></input>
              <small id="telefoneHelp" class="form-text text-muted"></small>
              </div>
        
              <div class="form-group">
              <label for="">Email:</label>
              <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="exemplo@email.com"></input>
              <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
              </div>
            
        
              <form action="#">
              <div class="menssagem_container">
                  
              <button type="submit" class="mt-4 btn btn-primary" disabled>Enviar</button>
                </div>
                </form>
            
        
       
             <p>Obrigado pela confianza</p>
             <p> Alguma duvida comuniquese com nós:</p>
             <p>Tlef; (22) 1234-5678</p>
            </form>
            </div>
        );    
    }
}
