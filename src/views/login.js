import React, { Component } from 'react';
import {
    Form,
    Button,
    Container,
    FormGroup,
    Label,
    Input,
    Col,
    FormFeedback,
    
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AuthService  from '../app/service/authService';
import LocalStorageService from '../app/service/localStorageService';
import Toastr, { messageError } from '../components/toastr';

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    constructor(){
        super();
        this.service = new AuthService();
    }

    login = () => {
        this.service.authUser({
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            LocalStorageService.addItem('_user_login', response.data)
            this.props.history.push('/projects')
        }).catch( erro => {
           messageError(erro.response.data);
        })
    }

    goUserRegistration = () => {
        this.props.history.push('/userRegister')
    }
   
    
    render() {
        
        return (
            <Container className="jumbotron">
                <h2 className="display-3">Login</h2>
                <Form className='from'>
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for="exampleInputEmail1">E-mail *:</Label>
                            <Input
                                type="email"
                                name="email"
                                id='exampleInputEmail1'
                                aria-describedby="emailHelp"
                                placeholder="Digite o email"
                                value={this.state.email}
                                onChange={e => this.setState({email: e.target.value})}
                                
                            />
                            <FormFeedback className="valid-feedback">
                                Usuário logado!
                            </FormFeedback>
                            <FormFeedback  className="invalid-feedback">
                                Uh oh! Parece que há algo errado com o e-mail digitado. Por favor insira um email correto.
                            </FormFeedback>
                            
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label className="form-control-label" for='examplePassword'>Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='********'
                                value={this.state.password}
                                onChange={e => this.setState({'password': e.target.value})}
                              
                            />
                            <FormFeedback className="invalid-feedback">Por favor insira sua senha!</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Button onClick={this.login}>Entrar</Button>
                    <Button  onClick={this.goUserRegistration} className="btn btn-secondary">Novo Usuário</Button>
                </Form>
            </Container>
        );

    }
}
export default withRouter (Login);

