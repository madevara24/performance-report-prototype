<template>
    <div>
        <v-sheet color="white px-3" width="inherit">
            <v-row>
                <template>
                    <v-btn class="ma-1" color="primary" dark icon @click="isExtended = !isExtended">
                        <v-icon v-if="isExtended" dark>arrow_drop_down</v-icon>
                        <v-icon v-if="!isExtended" dark>arrow_right</v-icon>
                    </v-btn>
                </template>
                <template v-if="!isExtended">
                        <span class="subtitle-1 d-flex align-center">{{cardData.title}}</span>
                        <v-spacer></v-spacer>
                        <v-btn class="mt-2 mr-2 d-flex align-right" color="primary" dark small>
                            State
                        </v-btn>
                </template>
            </v-row>
        </v-sheet>
    </div>
</template>

<script>
export default {
    props:{
        cardData: null
    },
    data() {
        return {
            isExtended: false
        }
    },
}
</script>