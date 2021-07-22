<template>
    <v-row justify="center">
        <v-dialog
            v-model="show"
            max-width="390"
            persistent
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>
                        Enter information for the card
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-text-field
                                label="Title"
                                v-model="title"
                            />
                            <v-text-field
                                label="Description"
                                v-model="description"
                            />
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="onClose"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        :disabled="!title"
                        @click="addCard"
                    >
                        Add
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: 'BoardListCardModal',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            onClose() {
                this.$emit('onClose', false)
            },
            addCard() {
                this.$emit('addCard', this.title, this.description)
            }
        }
    }
</script>

<style scoped>
    .list {
        background-color: #ebecf0;
    }
</style>
