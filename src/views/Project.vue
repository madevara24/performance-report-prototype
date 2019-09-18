<template>
  <div class="about">
    <v-container class="my-5">
      <v-row>
        <v-col cols=12 xs=12 sm=6 lg=4>
          <ProjectSelector />
        </v-col>
      </v-row>
      <v-row>
        <h3>{{selectedProject}}</h3>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectSelector from '@/components/ProjectSelector'
export default {
  components:{
    ProjectSelector
  },
  computed: {
    selectedProject(){
      return this.$store.state.selectedProject
    }
  },
}
</script>