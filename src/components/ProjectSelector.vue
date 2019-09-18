<template>
    <v-select
    class="my-2"
    prepend-icon="folder"
    @change="selectProject(selectedProject.id)"
    v-model="selectedProject"
    :items="projectSelections"
    item-text="name"
    item-value="id"
    label="Select Project"
    hint="Select the project you want to view"
    persistent-hint
    return-object
    single-line
    outlined
    ></v-select>
          
</template>

<script>
export default {
    computed: {
        projectSelections(){
            return this.$store.getters.projectSelections
        }
    },
    data() {
        return {
            selectedProject: null,
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