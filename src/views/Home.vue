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
  components: {
    DashboardProjectCard
  },
  data() {
    return {
      projects:[
        {id:1, name: 'Insight', sprintDuration:7, sprintProgress:3, totalTasks:12, completedTasks:7},
        {id:2, name: 'Hexagon', sprintDuration:14, sprintProgress:8, totalTasks:17, completedTasks:10}
      ]
    }
  },
};
</script>
