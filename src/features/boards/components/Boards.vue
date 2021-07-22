<template>
    <v-app>
        <v-container
            fluid
            grid-list-md
            class="pa-5"
        >
            <v-layout row wrap>
                <v-flex
                    class="xs4"
                    v-for="board in getBoards"
                    :key="board.id"
                >
                    <Board
                        :board="board"
                        @refreshBoards="loadBoards"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import BoardsService from '../services/BoardsService'
    import Board from "./Board"

    export default {
        name: 'Boards',
        components: {Board},
        data() {
            return {
                boards: []
            }
        },
        computed: {
            getBoards() {
                return this.boards
            }
        },
        created() {
            this.loadBoards()
        },
        methods: {
            async loadBoards() {
                const boardsRes = await BoardsService.getMyBoards()
                this.boards = boardsRes.data
            }
        }
    }
</script>

<style scoped>
</style>
