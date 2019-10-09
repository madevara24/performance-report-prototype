<template>
  <div>
    <v-app-bar flat app>

      <v-toolbar-title class="grey--text">
        <v-btn class="grey--text" depressed text block :ripple="false">
          <div class="title">
            <span class="font-weight-light">AU</span>
            <span class="">SOM</span>
          </div>
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <div class="px-2"></div>
        <ProjectSelector />
      </v-toolbar-items>
      <div class="flex-grow-1"></div>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>person</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

  </div>
</template>

<script>
import ProjectSelector from '@/components/ProjectSelector'

export default {
  data() {
    return {
      sideDrawer: false,
      links:[
              {icon: 'dashboard', text: 'Dashboard', route: '/' },
              // {icon: 'folder', text: 'Projects', route: '/projects' },
              {icon: 'group', text: 'Teams', route: '/teams' },
              {icon: 'person', text: 'Individual', route: '/individuals' },
          ],
    }
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