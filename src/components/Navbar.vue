<template>
  <div>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="sideDrawer = !sideDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text">
          <span class="font-weight-light">AU</span>
          <span class="">SOM</span>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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

    <v-navigation-drawer v-model="sideDrawer" app>
      <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
    data() {
      return {
        sideDrawer: false,
        links:[
                {icon: 'dashboard', text: 'Dashboard', route: '/' },
                {icon: 'folder', text: 'Projects', route: '/projects' },
                {icon: 'group', text: 'Teams', route: '/teams' },
                {icon: 'person', text: 'Individual', route: '/individuals' },
            ],
      }
    },
}
</script>