<template>

    <v-container id="project-selector">
        <v-row>
            <v-col cols=12 xs=12 md=6 lg=4>
                <v-select
                class="my-2"
                @change="selectProject(selectedProject.projectId)"
                v-model="selectedProject"
                :items="projects"
                item-text="projectName"
                item-value="projectId"
                label="Select Project"
                return-object
                single-line
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            selectedProject: null,
            projects: [
                { projectName: 'Insight', projectId: 1 },
                { projectName: 'Roundabout', projectId: 2 },
                { projectName: 'Hexagon', projectId: 3 },
                { projectName: 'Fast Forward', projectId: 4 },
                { projectName: 'Skipper', projectId: 5 },
            ],
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