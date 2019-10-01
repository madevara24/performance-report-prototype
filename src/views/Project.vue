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
            <v-card-title>Sprint Progression</v-card-title>
            <v-card-text>
              The burndown chart goes here
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Deliverabillity</v-card-title>
            <v-card-text>
              The deliverability graph goes here
              Deliverabillity : completed/total (shown per iteration)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Rejection</v-card-title>
            <v-card-text>
              The rejection graph goes here
              Rejection : average number of task iteration per iteration
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Task Lifecycle</v-card-title>
            <v-card-text>
              The task lifecycle graph goes here
              Task lifecycle : average duration of each task state (per iteration)
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