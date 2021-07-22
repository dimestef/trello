<template>
    <v-card
        class="list ma-1"
        data-app
    >
        <v-card-text>
            <h3
                class="text--primary"
                @click="updateCardModal(true)"
            >
                {{ card.name }}
            </h3>
        </v-card-text>

        <BoardListCardCommentsModal
            class="card-modal"
            v-if="showCardModal"
            :show="showCardModal"
            :card="card"
            @onClose="updateCardModal"
        />
    </v-card>
</template>

<script>
    import BoardListCardCommentsModal from './BoardListCardCommentsModal'

    export default {
        name: 'BoardListCard',
        components: {
            BoardListCardCommentsModal
        },
        props: {
            card: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                showCardModal: false
            }
        },
        methods: {
            updateCardModal(value) {
                this.showCardModal = value
            }
        }
    }
</script>

<style scoped>
    .list {
        background-color: #ebecf0;
    }

    .card-modal {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>
