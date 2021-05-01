import React, {Fragment, Component} from "react";
import{Container, 
    Row, 
    Col,                                                                                                                                                                                                                                                                            
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Button,
    Label,
    Input} from "reactstrap";
import Menu from "../components/menu"

const divStyle = {
    width: '25ren',
    margin: '20pxs',
};

class ListProjects extends Component{

    state = {
            project:[]
        };
     
    
    render(){

        return(
            <Fragment>
                <Container fluid>
                    <Menu />
                    <Row>
                        <Col>
                           {this.state.project.map(project =>(
                                <Card  color="white">
                                    <CardBody>
                                        <CardTitle className="h3 mb-2 pt-2 front-wight-bold">
                                            {project.title}
                                        </CardTitle>
                                        <CardSubtitle className="mb-3 font-weight-light text-uppercase">
                                            {project.descriptio}
                                        </CardSubtitle>
                                        <CardText ClassName="mb-4"> {project.responsibleName} </CardText>
                                        <CardText ClassName="mb-5"> {project.viability} </CardText>
                                        <CardText ClassName="mb-6"> {project.startDate} </CardText>
                                        <CardText ClassName="mb-7"> {project.endDate} </CardText>
                                        <CardText ClassName="mb-7"> {project.endDate} </CardText>
                                        <Row>
                                            <Col>
                                                <Button color="success">Edit</Button>
                                            </Col>
                                            <Col>
                                                <Button color="danger">Delete</Button>
                                            </Col>
                                            <Col>
                                                <Button color="danger">Cancelar</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                           
                                        </Row>
                                    </CardBody>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
    
export default ListProjects;
