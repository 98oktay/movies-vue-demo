<template>

    <div style="width: 100%">
        <md-table style="width: 100%">


            <md-list>
                <md-list-item v-for="item in items" v-bind:key="item.id" class="movie-item">
                    {{item.title}} ({{item.year}})
                    <md-button @click="deleteQuestion(item)" class="md-icon-button md-accent movie-delete-button">
                        <md-icon>delete_outline</md-icon>
                    </md-button>

                    <div class="movie-star"><md-icon>star</md-icon>{{parseFloat(item.score).toFixed(1)}}</div>
                    <VoteButtons :movie="item" @updated="loadMovies" />

                </md-list-item>

            </md-list>

        </md-table>
        <md-dialog :md-active.sync="showDeleteDialog">
            <md-dialog-content class="md-direction-column md-size-medium">
                <md-icon class="dialog-icon md-size-5x">delete_forever</md-icon>
                <md-dialog-title class="md-text-centered" v-if="this.deletableItem">Are you want to delete <br/>
                    {{this.deletableItem.title}} ({{this.deletableItem.year}})?
                </md-dialog-title>
                <div class="md-layout md-alignment-center-center">
                    <md-button class="md-primary" @click="showDeleteDialog = false">Cancel</md-button>
                    <md-button class="md-accent md-raised" @click="deleteConfirm">Delete</md-button>
                </div>
            </md-dialog-content>
        </md-dialog>
        <ListPagination/>
    </div>

</template>

<script>
    import ListPagination from '@/components/ListPagination';
    import DataService from "@/service/DataService";
    import VoteButtons from "@/components/VoteButtons";

    export default {
        name: "MovieList",
        data() {
            return {
                items: [],
                showDeleteDialog: false,
                deletableItem: null
            }
        },
        components: {VoteButtons, ListPagination},

        computed: {
            typeFilter: {
                get() {
                    return this.$store.state.typeFilter
                }
            },
            orderBy: {
                get() {
                    return this.$store.state.orderBy
                }
            },
            page: {
                get() {
                    return this.$store.state.page
                }
            }
        },
        methods: {
            deleteQuestion(item) {
                this.deletableItem = item;
                this.showDeleteDialog = true;
            },

            deleteConfirm() {
                this.showDeleteDialog = false;
                DataService.delete(`movies/${this.deletableItem.id}`).then(() => {
                    this.loadMovies();
                });
            },

            loadMovies() {
                const filters = {
                    _sort: "score",
                    _order: this.orderBy,
                    _limit: this.$store.state.pageLimit,
                    _page: this.$store.state.page
                };
                if (this.typeFilter && this.typeFilter !== "all") {
                    filters.type = this.typeFilter
                }
                DataService.get("movies", filters).then(({data, headers}) => {
                    this.items = data;
                    this.$store.commit("set", ["pageTotal", parseInt(headers['x-total-count'], 10)])
                })
            }
        },
        mounted() {
            this.loadMovies()
        },
        watch: {
            typeFilter() {
                if (this.page > 1) {
                    this.$store.commit("set", ["page", 1]);
                } else {
                    this.loadMovies()
                }
            },
            orderBy() {
                this.loadMovies()
            },
            page() {
                this.loadMovies()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog-icon {
        margin: 20px auto 0;
        font-size: 40px;
        color: #CE0505 !important;
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
    .movie-star {
        margin-right: 100px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        & .md-icon {
            color: #EFCE4A;
        }
    }
    .movie-item {
        background: #00000008;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 0 10px;
        border:  1px solid #BBBBBB;
        &:hover .movie-delete-button {
            opacity: 1;
        }
    }
    .movie-delete-button {
        opacity: 0;
        margin-left: 0;
        margin-right: auto;
    }

</style>
