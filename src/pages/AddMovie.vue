<template>
    <div class="md-layout">

        <md-card class="md-center md-layout-item md-size-40 md-small-size-100 md-elevation-0">
            <md-card-header>
                <div class="md-title">New Movie or Series</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <label>Type</label>
                        <div>
                            <md-radio v-model="type" class="md-primary" value="movie" :disabled="sending">Movie
                            </md-radio>
                            <md-radio v-model="type" class="md-primary" value="series" :disabled="sending">Series
                            </md-radio>
                        </div>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Movie Title</label>
                            <md-input aria-autocomplete="none" v-model="title"
                                      :disabled="sending"/>
                        </md-field>

                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Release Year</label>
                            <md-input aria-autocomplete="none" type="number" v-model="year"
                                      :disabled="sending"/>
                        </md-field>
                    </div>
                </div>

                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Initial Score</label>
                            <md-input aria-autocomplete="none" type="number" v-model="score"
                                      :disabled="sending"/>
                        </md-field>
                    </div>
                </div>

            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending"/>

            <md-card-actions>
                <md-button type="submit" class="md-primary  md-raised" @click="save" :disabled="sending">Save</md-button>
            </md-card-actions>
        </md-card>
        <md-dialog :md-active.sync="showSavedDialog">
            <md-dialog-content class="md-direction-column md-size-medium">
                <md-icon class="dialog-icon md-size-5x">check</md-icon>
                <md-dialog-title class="md-text-centered">Saved
                </md-dialog-title>
                <div class="md-layout md-alignment-center-center">
                    <md-button class="md-primary md-raised" to="/">OK</md-button>
                </div>
            </md-dialog-content>
        </md-dialog>
    </div>
</template>

<script>
    import DataService from "@/service/DataService";

    export default {
        name: "AddMovie",
        data() {
            return {
                showSavedDialog: false,
                sending: false,
                title: "",
                score: null,
                year: null,
                type: "movie"
            }
        },
        methods: {
            save() {
                const {title, score, year, type} = this;

                this.sending = true;
                DataService.post(`movies`, {
                    title,
                    score: parseInt(score),
                    year: parseInt(year),
                    type
                }).then(() => {
                    this.sending = false;
                    this.showSavedDialog = true;
                });
            }
        },
        mounted() {

            console.log(this.$route.name)
        }
    }
</script>

<style scoped>

    .md-center {
        margin: 0 auto;
    }

    .dialog-icon {
        margin: 20px auto 0;
        font-size: 40px;
        color: #7ED321 !important;
    }

    .md-size-medium {
        min-width: 400px;
    }

    .md-direction-column {
        display: flex;
        flex-direction: column;
    }

    .md-text-centered {
        text-align: center;
    }
</style>
