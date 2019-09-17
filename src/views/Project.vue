<template>
  <div class="about">
    <v-container class="my-5">
      <v-row>
        <ProjectSelector />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectSelector from '@/components/ProjectSelector'
export default {
  components:{
    ProjectSelector
  }
}
</script>