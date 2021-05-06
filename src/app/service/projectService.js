import ApiService from '../apiService';

export default class ProjectService extends ApiService{

    constructor(){
        super('/project')
    }
    listStatusProject(){
        return[
            {label: 'Select...', value: ''},
            {label: 'Planejado', value: 'Planejado'},
            {label: 'Em desenvolvimento', value: 'Em desenvolvimento'},
            {label: 'Cancelado', value: 'Cancelado'},
            {label: 'Concluído', value: 'Concluído'}     
        ]
    }
    listViability(){
        return[
            {label: 'Select...', value: ''},
            {label: '(5)Alta viabilidade', value: 5},
            {label: '(4)Média viabilidade - Atenção', value: 4},
            {label: '(3)Média viabilidade ', value: 3},
            {label: '(2)Baixa viabilidade', value: 2},
            {label: '(1)Viabilidade muito baixa', value: 1}     
        ]
    }

    consult(projectFilter){
        let params = ''

        if(projectFilter.startDate){
            params = `${params}&startDate=${projectFilter.startDate}`
        }
        if(projectFilter.statusProject){
            params = `${params}&statusProject=${projectFilter.statusProject}`
        }
        if(projectFilter.viability){
            params = `${params}&viability=${projectFilter.viability}`
        }
        if(projectFilter.user){
            params = `${params}&user=${projectFilter.user}`
        }
        return this.get(params);
    }
    deletar(id){
        return this.delete(`/${id}`)
    }

}

