<template>
  <div class="about">
    <v-container class="my-5">
      <v-row>
        <v-col cols=12 xs=12 sm=6 lg=4>
          <ProjectSelector />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Project Name</v-card-title>
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectSelector from '@/components/ProjectSelector'
export default {
  created() {
    //eslint-disable-next-line
    // console.log(this.$route.params.projectId)
  },
  components:{
    ProjectSelector
  },
  computed: {
    selectedProject(){
      return this.$store.state.selectedProject
    }
  },
  methods: {
    applySelectedProject(){
    }
  },
}
</script>