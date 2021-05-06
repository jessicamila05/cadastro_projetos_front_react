import React from 'react';
import {Table, Button} from 'reactstrap';

export default props => {
    
    const rows = props.Projects.map(project => {
        return(
            <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.descriptio}</td>
                <td>{project.responsibleName}</td>
                <td>{project.viability}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.statusProject}</td>
                <td>
                <Button onClick={e => props.editAction(project.id)} className="btn btn-success disabled">Editar</Button>
                <Button onClick={e => props.deleteAction(project.id)} className="btn btn-danger disabled">Deletar</Button>   
                </td>
            </tr>

        )
        
    })
    return(
        <Table hover>
            <thead>
                <tr>
                    <th>Nome do projeto</th>
                    <th>Descrição</th>
                    <th>Responsavel</th>
                    <th>viabilidade</th>
                    <th>Data de início</th>
                    <th>Data de finalização</th>
                    <th>Situaçao</th>
                    <th>Ações</th>
                    
                </tr>
            </thead>
            <tbody>
                {rows}
                
            </tbody>
            
        </Table>
    )
}