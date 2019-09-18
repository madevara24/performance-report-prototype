import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state:{
        //projects
        selectedProjects: null,
        projects: [
            { projectName: 'Insight', projectId: 1 },
            { projectName: 'Roundabout', projectId: 2 },
            { projectName: 'Hexagon', projectId: 3 },
            { projectName: 'Fast Forward', projectId: 4 },
            { projectName: 'Skipper', projectId: 5 },
        ],

        //people
        selectedPerson: null,
    },
    getters:{
        selectedProjects: state => {
            return state.selectedProjects
        },
        projectSelections: state => {
            var projectSelections = state.projects.map( project => {
                return {
                    name: project.projectName,
                    id: project.projectId
                }
            })
            return projectSelections
        }
    },
    mutations:{
        // selectProject: state =>
    }
})