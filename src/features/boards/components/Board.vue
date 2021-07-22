<template>
    <v-card
            elevation="5"
            max-height="200"
    >
        <v-card-text
            class="pa-0"
        >
            <v-toolbar dark color="primary">
                <v-toolbar-title>
                    {{ board.name }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-actions class="d-flex justify-end mb-6">
                <v-btn
                    text
                    class="btn-action"
                    @click="onEdit"
                >
                    <i class="fas fa-edit"></i>
                </v-btn>
                <v-btn
                    text
                    class="btn-action teal accent-4"
                    @click="onDelete"
                >
                    <i class="fas fa-trash-alt"></i>
                </v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapState} from 'vuex'
    import BoardsService from '../services/BoardsService'

    export default {
        name: 'Board',
        props: {
            board: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                testLocal: 'aaa'
            }
        },
        computed: {
            ...mapState('Board', ['test'])
        },
        methods: {
            async onDelete() {
                await BoardsService.deleteBoardById(this.board.id)
                this.$emit('refreshBoards')
            },
            onEdit() {
                this.$router.push({
                    name: 'boardDetails',
                    params: {name: this.board.name},
                    query: {
                        id: this.board.id
                    }
                })
            }
        }
    }
</script>

<style scoped>
</style>
