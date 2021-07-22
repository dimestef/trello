<template>
    <v-row justify="center">
        <v-dialog
                v-model="show"
                max-width="390"
                persistent
        >
            <v-card
                    class="comment-card"
            >
                <v-toolbar dark color="primary">
                    <v-toolbar-title>
                        Comments:
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-list
                                    class="comment-list"
                            >
                                <v-progress-circular
                                        v-if="!isCommentsLoaded"
                                        indeterminate
                                        color="primary"
                                />
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ comments.length > 0 ? '' : 'There are no comments...' }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                        v-for="(comment, index) in comments"
                                        :key="index"
                                >
                                    <v-card
                                            class="mb-1 pa-1 comment-list-item"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{ comment.memberCreator.fullName || '' }}
                                                <small>{{ getDate(comment.date) }}</small>
                                            </v-list-item-title>
                                            <v-list-item-subtitle v-html="comment.data.text || ''"/>
                                        </v-list-item-content>
                                    </v-card>
                                </v-list-item>
                            </v-list>
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
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import BoardsService from '../services/BoardsService'

    export default {
        name: 'BoardListCardCommentsModal',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            card: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                comments: [],
                isCommentsLoaded: false
            }
        },
        created() {
            this.loadComments()
        },
        methods: {
            async loadComments() {
                this.comments = await BoardsService.getBoardListCardComments(this.card.id)
                this.isCommentsLoaded = true
            },
            onClose() {
                this.$emit('onClose', false)
            },
            getDate(date) {
                return new Date(date).getDate() + "-" + (new Date(date).getMonth() + 1) +
                    "-" + new Date(date).getFullYear()
            }
        }
    }
</script>

<style scoped>
    .list {
        background-color: #ebecf0;
    }

    .comment-list {
        width: 100%;
        text-align: left;
    }

    .comment-list-item {
        width: 100%;
    }
</style>
