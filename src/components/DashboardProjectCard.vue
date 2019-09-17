<template>
  <v-card class="px-3 mb-5" flat>
    <v-card-title>
      <router-link :to="{ name: 'project', params: { projectId: projectData.id }}">{{projectData.name}}</router-link>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
        <v-row>
            <v-col cols="12" md="6" xs="12">Sprint Progression : {{projectData.sprintProgress}}/{{projectData.sprintDuration}}</v-col>
            <v-col cols="12" md="6" xs="12">Task Progression : {{projectData.completedTasks}}/{{projectData.totalTasks}}</v-col>
        </v-row>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        projectData:{
                name: null,
                sprintDuration: null,
                sprintProgress: null,
                totalTasks: null,
                completedTasks: null,
                link: null
            }
    },
    methods: {
      selectProject(){
        // go to project overview page with selected project in display
      }
    },
}
</script>