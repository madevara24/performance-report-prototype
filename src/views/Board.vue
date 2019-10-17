<template>
    <div>
        <v-row class="black">
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="iceboxColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="backlogColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="doneColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="grey">
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="iceboxColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="backlogColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" class="py-0 px-3 custom-border grey" >
                <v-row><BoardColumnHeader :headerData="doneColumn"/></v-row>
                <v-row>
                    <v-card v-for="n in 12" :key="n" class="my-1 mx-2" flat><v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BoardColumnHeader from '../components/BoardColumnHeader.vue'
export default {
    data() {
        return {
            iceboxColumn:{
                title:'Icebox'
            },
            backlogColumn:{
                title:'Current Iteration/Backlog'
            },
            doneColumn:{
                title:'Done'
            }
        }
    },
    components: {
        BoardColumnHeader
    }
}
</script>

<style scoped>
    .custom-border {
        border: 10px red;
    }
</style>