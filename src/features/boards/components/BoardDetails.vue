<template>
    <v-app>
        <v-container
            fluid
        >
            <v-row
                class="boardDetailsRow"
            >
                <v-col
                    v-for="(list, index) in lists"
                    :key="index"
                >
                    <BoardList
                        :list="list"
                        @reloadList="loadLists"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import BoardsService from '../services/BoardsService'
    import BoardList from './BoardList'

    export default {
        name: 'BoardDetails',
        components: {
            BoardList
        },
        data() {
            return {
                lists: []
            }
        },
        created() {
            this.loadLists()
        },
        methods: {
            async loadLists() {
                this.lists = await BoardsService.getBoardLists(this.$route.query.id)
            }
        }
    }
</script>

<style scoped>
    .boardDetailsRow {
        flex-wrap: inherit;
        overflow-y: auto;
    }
</style>
