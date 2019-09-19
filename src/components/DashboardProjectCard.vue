<template>
  <v-card class="px-3 mb-5" flat @click="selectProject(projectData.id)">
    <v-card-title>
      {{projectData.name}}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
        <v-row>
            <v-col class="font-weight-medium" cols="12" md="6" xs="12">Sprint Progression : {{projectData.sprintProgress}}/{{projectData.sprintDuration}}</v-col>
            <v-col class="font-weight-medium" cols="12" md="6" xs="12">Task Progression : {{projectData.completedTasks}}/{{projectData.totalTasks}}</v-col>
        </v-row>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    projectData: null
  },
  methods: {
    selectProject(id){
      this.$store.commit('selectProject', id)
      this.$router.push('project')
    }
  },
}
</script>