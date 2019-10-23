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
                <template v-if="isExtended">
                    <v-text-field v-model="cardData.title">

                    </v-text-field>
                </template>
            </v-row>
            <template v-if="isExtended">
                <v-form>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field single-line dense solo readonly v-model="cardData.id" hide-details>
                                <template v-slot:append-outer>
                                    <v-btn icon @click="copyCardId()"><v-icon>file_copy</v-icon></v-btn>
                                    <v-btn icon><v-icon>delete</v-icon></v-btn>
                                </template>
                            </v-text-field>
                            <input type="hidden" id="cardIdSelector" :value="cardData.id">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-subheader>State</v-subheader>
                        </v-col>
                        <v-col cols="9" class="py-1 my-1">
                            <v-row>
                                <v-col cols="6" class="py-0">
                                    <v-btn class="mt-2 mr-2 d-flex align-center" color="primary" dark small>
                                        State
                                    </v-btn>
                                </v-col>
                                <v-col cols="6" class="py-1 my-1">
                                    <v-select dense :items="select.cardStates" hide-details class="pt-1">

                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-form>
            </template>
        </v-sheet>
        <v-snackbar
        v-model="copyCardIdSnackbar.isUp"
        :timeout="2000"
        >
        {{ copyCardIdSnackbar.message }}
        <v-btn
            color="blue"
            text
            @click="copyCardIdSnackbar.isUp = false"
        >
            Close
        </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    props:{
        cardData: null
    },
    data() {
        return {
            isExtended: false,
            copyCardIdSnackbar: {
                isUp: false,
                message: null
            },
            select: {
                cardStates: ['Create','Planned','Started','Finished','Accepted','Rejected','Released']
            }
        }
    },
    methods: {
        copyCardId(){
            console.log('Click copy')
            let copiedCardId = document.querySelector('#cardIdSelector')
            copiedCardId.setAttribute('type', 'text')
            copiedCardId.select()

            try {
                var success = document.execCommand('copy')
                var message = success ? 'successful' : 'unsuccessful';
                this.copyCardIdSnackbar.message = 'Card ID copied to clipboard'
            } catch (error) {
                this.copyCardIdSnackbar.message = 'Fail to copy Card ID'
            }
            copiedCardId.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
            this.copyCardIdSnackbar.isUp = true
            console.log(this.copyCardIdSnackbar)
        }

    },
}
</script>