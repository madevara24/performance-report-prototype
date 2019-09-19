<template>
  <div>
    <v-container class="my-5">
      <DashboardProjectCard v-for="project in projects" :key="project.name" :projectData="project"/>      
    </v-container>
  </div>
</template>

<script>
import DashboardProjectCard from '@/components/DashboardProjectCard'
export default {
  created() {
    this.projects = this.getProjects()
  },
  data() {
    return {
      projects: null
    }
  },
  methods: {
    getProjects(){
      return this.$store.getters.projectData
    }
  },
  components: {
    DashboardProjectCard
  },
};
</script>
