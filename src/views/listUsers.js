import React, {Fragment, Component} from "react";
import{Container, 
    Row, 
    Col,                                                                                                                                                                                                                                                                            
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Button} from "reactstrap";
import Menu from "../components/menu";

const divStyle = {
    width: '25ren',
    margin: '20pxs',
};

class ListUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:[]
        };
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => {
                this.setState({user: data});
                console.log(this.state.user);
            })
            .catch(console.log);
    }
    render(){

        return(
            <Fragment>
                <Container fluid>
                    <Menu />
                    <Row>
                        <Col>
                            {this.state.user.map(user =>(
                                <Card style={divStyle} color="white">
                                    <CardBody>
                                        <CardTitle className="h3 mb-2 pt-2 front-wight-bold">
                                            {user.name}
                                        </CardTitle>
                                        <CardSubtitle className="mb-3 font-weight-light text-uppercase">
                                            {user.email}
                                        </CardSubtitle>
                                        <CardText ClassName="mb-4"> {user.creationDate} </CardText>
                                        <Row>
                                            <Col>
                                                <Button color="success">Edit</Button>
                                            </Col>
                                            <Col>
                                            <Button color="danger">Delete</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                </Card>

                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
    
export default ListUsers;
