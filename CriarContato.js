import React from "react";


export default class CriarContato extends React.Component {
    constructor() {
        super()
        this.state = {title:""}
        this.handleChange = this.handleChange.bind(this)}
        handleChange(event) {
            this.setState({title:event.target.value})
        }
    render() {
        return (
            <div>
            <h1>DADOS PERSONAIS</h1>
    
    <div class="form-group">
      <label for="">Nome Completo</label>
      <input type="nome" class="form-control" id="exampleInputnome" aria-describedby="nomeHelp" placeholder="Seu nome" onChange = {this.handleChange}></input>
      <small id="nomeHelp" class="form-text text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">CPF:</label>
      <input type="cpf" class="form-control" id="exampleInputCpf" aria-describedby="cpfHelp" placeholder="123-456-789-11" onChange={this.handleChange}></input>
      <small id="cpfHelp" class="number 000-000-000-00"></small>
    </div>

    <div class="form-group">
      <label for="">Telefone:</label>
      <input type="telefone" class="form-control" id="exampleInputTelefone" aria-describedby="telefoneHelp" placeholder="(22)2222-2222" onChange={this.handleChange}></input>
      <small id="telefoneHelp" class="form-text text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Email:</label>
      <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="exemplo@email.com" onChange= {this.handleChange}></input>
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
    
  
            </div>
    
           
        );
    }
}
