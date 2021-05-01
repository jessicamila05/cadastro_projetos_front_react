import React, {Fragment,Component } from "react";
import {
    Form,
    Button,
    Container,
    FormGroup,
    Label,
    Input,
    Col,
    //FormFeedback,
} from "reactstrap";
import Menu from "../components/menu"
import { withRouter } from 'react-router-dom'
import {messageSuccess, messageError} from '../components/toastr'
import UserService from '../app/service/userService';


class UserResgister extends Component {

    state={
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    constructor(){
        super();
        this.service = new UserService();
    }

    validate(){
        const msgs = []

        if(!this.state.name){
            msgs.push('O campo Email é obrigatório.')
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe um Email válido.')
        }
        
        if(!this.state.password || this.state.confirmPassword){
            msgs.push('Por favor, confirme a senha!')
        }else if(this.state.password !==  this.state.confirmPassword){
            msgs.push('As senhas não batem')
        }
        

        return msgs;
    }
    register = () =>{
        const msgs = this.validate();

        if(msgs &&  msgs.length > 0){
            msgs.forEach((msg, index) => {
                messageError(msgs)
            });
            return false;
        }
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.service.save(user)
        .then(response =>{
            messageSuccess('Usuário cadastrado! Pode acessar o sistema')
            this.props.history.push('/')
        }).catch(error => {
            messageError('Algo deu errado!')
        })
    }
    cancel = () => {
        this.props.history.push('/')
    }
    render() {
        
        return (
            <Fragment>
                <Menu />
                <Container className="jumbotron" >
                <h2 className="display-3">Cadastrar Usuário</h2>
                <Form className="from">
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for="inputValid">Nome *:</Label>
                            <Input
                                type="text"
                                name="name"
                                id="exampleName"
                                placeholder="Your Name "
                                onChange={e => this.setState({name: e.target.value})}

                              
                            />

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for="inputValid">E-mail *:</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                onChange={e => this.setState({email: e.target.value})}
                            />

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for="examplePassword">Senha *:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                onChange={e => this.setState({password: e.target.value})}
                               
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for="examplePassword">Senha *:</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="********"
                                onChange={e => this.setState({password: e.target.value})}
                               
                            />
                        </FormGroup>
                    </Col>

                   
                    <Button onClick={this.register} className="btn btn-success disabled">Salvar</Button>
                    <Button onClick={this.cancel} className="btn btn-danger disabled">Cancelar</Button>
                </Form>
            </Container>

            </Fragment>
            
        );

    }
}

export default  withRouter (UserResgister);
