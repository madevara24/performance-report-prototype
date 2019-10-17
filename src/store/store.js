import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*eslint-disable */
export default new Vuex.Store({
    strict: true,
    state:{
        //user
        user:{
            // isLogin: false,
            isLogin: true,
        },
        //projects
        selectedProjectId: null,
        projects: [
            {id:1, name: 'Insight', sprintDuration:7, sprintProgress:3, totalTasks:12, completedTasks:7},
            {id:2, name: 'Roundabout', sprintDuration:7, sprintProgress:7, totalTasks:11, completedTasks:10},
            {id:3, name: 'Hexagon', sprintDuration:14, sprintProgress:8, totalTasks:17, completedTasks:10},
            {id:4, name: 'Fast Forward', sprintDuration:7, sprintProgress:1, totalTasks:5, completedTasks:0},
            {id:5, name: 'Skipper', sprintDuration:14, sprintProgress:5, totalTasks:14, completedTasks:7},
        ],

        //people
        selectedPerson: null,
    },
    methods: {
        getSelectedProject (state) {
            var needle = state.selectedProjectId
            console.log('needle: ' + needle)
            var project = null
            for (let index = 0; index < state.projects.length; index++) {
                if(state.projects[index].id == needle){
                    project = state.projects[index]
                    console.log('project found')
                }
            }
            console.log(project)
            return project
        },
    },
    getters:{
        //user
        getIsLogin(state){
            return state.user.isLogin
        },
        //projects
        projectData(state){
            return state.projects
        },
        
        selectedProjectName (state) {
            var displayText = null
            if (this.getSelectedProject()) {
                displayText = this.getSelectedProject().name
            }else{
                displayText = 'No selected project'
            }
            //eslint-disable-next-line
            console.log('Display text : '+displayText)
            return displayText
        },
        projectSelections (state) {
            var projectSelections = state.projects.map( project => {
                return {
                    name: project.name,
                    id: project.id
                }
            })
            return projectSelections
        }
    },
    mutations:{
        //users
        setLogin(state, login){
            state.user.isLogin = login
        },
        //project
        selectProject (state, projectId) {
            state.selectedProjectId = projectId
        }
    }
})