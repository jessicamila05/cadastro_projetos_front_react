import React, { Fragment, Component } from "react";
import {
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    Button,
    Label,
    Input,
    Form,
    FormGroup
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Select from '../../components/select';
import Menu from '../../components/menu';
import ProjectsTable from './projectTable';
import LocalStorageService from '../../app/service/localStorageService';
import ProjectService from '../../app/service/projectService'

class ListProjects extends Component {

    state = {
        startDate: '',
        statusProject: '',
        viability: '',
        projects: []
    };

    constructor(){
        super();
        this.service = new ProjectService();
    }

    take = () =>{
        const userLogin = LocalStorageService.searchItem('_user_login');

        const projectFilter = {
            startDate: this.state.startDate,
            statusProject: this.statusProject,
            viability: this. viability,
            user: userLogin.id    
        }
        this.service 
            .consult(projectFilter)
            .then(response => {
                this.setState({projects: response.data})
            }).catch(error => {
                console.log(this.state)
            })
    };

    delete = (project) => {
        this.service
            .delete(project.id)
            .then(response => {
                const projects =  this.state.project;
                const index = projects.indexOf(project);
                projects.splice(index, 1);
                this.setState(projects)
                this.setState({projects: response.data})
            })
    }




    render() {
        const statusProject = this.service.listStatusProject();
        const viability = this.service.listViability();
            

        return (
            <Fragment>
                <Container fluid>
                    <Menu />
                    <Card color="white">
                    <CardHeader tag="h2">Consultar Projetos</CardHeader>
                        <CardBody>
                            <Form className="from">
                                <Row>
                                <FormGroup className="col-md-4">
                                        <Label for="exampleDate">Data de início</Label>
                                           <Input
                                             type="date"
                                             name="date"
                                             id="exampleDate"
                                             placeholder="startDate"
                                             value={this.state.startDate}
                                             onChange={e => this.setState({startDate: e.target.value})}
                                           />
                                    </FormGroup> 
                                    <FormGroup className="col-md-4">
                                        <Label for="exampleSelect">Situação</Label>
                                           <Select 
                                            value={this.state.statusProject}
                                            onChange={e => this.setState({statusProject: e.target.value})}
                                           list={statusProject}/> 
                                    </FormGroup>
                                    <FormGroup className="col-md-4">
                                        <Label for="exampleSelect">Viabilidade</Label>
                                           <Select
                                            value={this.state.viability}
                                            onChange={e => this.setState({viability: e.target.value})}
                                            list={viability}/> 
                                    </FormGroup>
                                </Row>  
                                <Row>
                                    <Button onClick={this.take} className="btn btn-success disabled">Buscar</Button>
                                    <Button onClick={this.register} className="btn btn-danger disabled">Cadastrar</Button>
                                </Row>  
                                <br/><br/>
                            </Form>
                                <Row>
                                    <ProjectsTable Projects={this.state.projects}
                                    deleteAction={this.delete}
                                    editAction={this.editAction}/>
                                </Row>
                        </CardBody>
                    </Card>       
                </Container>
            </Fragment>
        );
    }
}

export default withRouter (ListProjects);
