<template>
    <v-card
        class="d-flex list"
    >
        <v-card-text
            class="list-cards"
        >
            <h3 class="text--primary">
                {{ list.name }}
            </h3>
            <draggable
                class="list-group"
                :list="cards"
                @start="dragging = true"
                @end="dragging = false"
                group="list"
            >
                <BoardListCard
                    class="list-group-item"
                    v-for="(card, index) in cards"
                    :key="index"
                    :card="card"
                />
            </draggable>
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
        <BoardListCardModal
            class="cardModal"
            v-if="showListCardModal"
            :show="showListCardModal"
            @addCard="addCard"
            @onClose="updateListCardModal"
        />
    </v-card>
</template>

<script>
    import BoardsService from '../services/BoardsService'
    import BoardListCard from './BoardListCard'
    import draggable from 'vuedraggable'
    import BoardListCardModal from './BoardListCardModal'

    export default {
        name: 'BoardDetails',
        components: {
            BoardListCardModal,
            BoardListCard,
            draggable
        },
        props: {
            list: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                cards: [],
                showListCardModal: false
            }
        },
        created() {
            this.loadCards()
        },
        methods: {
            async loadCards() {
                this.cards = await BoardsService.getBoardListCards(this.list.id)
            },
            onEdit() {
                this.showListCardModal = true
            },
            async onDelete() {
                const payload = {
                    closed: true
                }
                await BoardsService.updateBoardList(this.list.id, payload)
                this.$emit('reloadList')
            },
            async addCard(title, description) {
                const payload = {
                    name: title,
                    desc: description,
                    idList: this.list.id
                }
                this.showListCardModal = false
                await BoardsService.createCard(payload)
                this.loadCards()
            },
            updateListCardModal(value) {
                this.showListCardModal = value
            }
        }
    }
</script>

<style scoped>
    .list, .list-cards {
        background-color: #ebecf0;
    }
</style>
