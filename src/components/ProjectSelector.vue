<template>

    <v-container id="project-selector">
        <v-row>
            <v-col cols=12 xs=12 md=6 lg=4>
                <v-overflow-btn
                class="my-2"
                @change="selectProject(selectedProject)"
                v-model="selectedProject"
                :items="items"
                label="Projects"
                target="#project-selector"
                editable></v-overflow-btn>
            </v-col>
        </v-row>
        <!-- <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select> -->
        <!-- <v-select v-model="select" :items="items" label="Projects"></v-select> -->
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            selectedProject: null,
            items: [
                {text:'Insight',id:1},
                {text:'Roundabout',id:1},
                {text:'Alchemist',id:1},
                {text:'Hexagon',id:1},

            ]
        }
    },
    methods: {
        selectProject(name){
            //eslint-disable-next-line
            console.log(name)
        }
    },
}
</script>