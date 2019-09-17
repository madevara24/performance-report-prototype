<template>
    <div>
        <!-- <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select> -->
        <v-select v-model="select" :items="items" label="Item"></v-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                'Insight','Roundabout','Alchemist','Hexagon'
            ]
        }
    },
}
</script>