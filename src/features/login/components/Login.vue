<template>
    <v-app>
        <v-main>
            <v-card
                    class="loginWrapper"
                    elevation="4"
            >
                <div>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>
                            Trello - plan your work.
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    id="token"
                                    v-model="token"
                                    class="my-5"
                                    name="input-10-1"
                                    label="Enter trello token"
                                    hint="Copy the token from below"
                                    :rules="[rulesToken.required, rulesToken.min]"
                            />
                            <v-text-field
                                    id="apiKey"
                                    v-model="apiKey"
                                    class="my-5"
                                    name="input-10-1"
                                    label="Enter trello API key"
                                    hint="Copy the API key from below"
                                    :rules="[rulesApiKey.required, rulesApiKey.min]"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                                id="login"
                                color="primary"
                                dark
                                class="mb-5"
                                :width="100"
                                :class="{'login-disabled-button' : (
                                    token !== 'db86a6a9f80f68f067d6053d50c8f9c5ef954107bde7b343475728d088055c41'
                                    ||
                                    apiKey !== 'aeee2ad688a0aac88c62a2bb3cb86579'
                                    )
                                }"
                                @click="onLogin"
                        >
                            Login
                        </v-btn>
                    </v-card-actions>
                </div>
            </v-card>
            <div class="loginWrapper">
                <v-banner
                        single-line
                >
                    <b>Trello tocken:</b>
                    <p>
                        <small>db86a6a9f80f68f067d6053d50c8f9c5ef954107bde7b343475728d088055c41</small>
                    </p>
                </v-banner>
                <v-banner
                        single-line
                >
                    <b>Trello developer API key:</b>
                    <p>
                        <small>
                            aeee2ad688a0aac88c62a2bb3cb86579
                        </small>
                    </p>
                </v-banner>
            </div>
        </v-main>
    </v-app>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                token: '',
                apiKey: '',
                rulesToken: {
                    required: value => !!value || 'Required.',
                    min: v => v === 'db86a6a9f80f68f067d6053d50c8f9c5ef954107bde7b343475728d088055c41' || 'You must enter the token from below'
                },
                rulesApiKey: {
                    required: value => !!value || 'Required.',
                    min: v => v === 'aeee2ad688a0aac88c62a2bb3cb86579' || 'You must enter the API key from below'
                }
            }
        },
        methods: {
            ...mapActions('Login', ['setIsUserLoggedIn', 'setToken', 'setApiKey']),
            onLogin() {
                this.setToken(this.token)
                this.setApiKey(this.apiKey)
                this.setIsUserLoggedIn(true)
                this.$router.push('/boards')
            }
        }
    }
</script>

<style scoped>
    .loginWrapper {
        width: 40%;
        margin: auto;
    }

    .login-disabled-button {
        pointer-events: none;
        opacity: 0.6;
    }
</style>
