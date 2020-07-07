<template>
    <div id="vote-buttons-wrapper">
        Give Points
        <div id="vote-buttons">
            <md-button @click="pointUp" class="md-icon-button">
                <md-icon class="md-size-2x">arrow_drop_up</md-icon>
            </md-button>

            <md-button @click="pointDown" class="md-icon-button md-icon-button-down">
                <md-icon class="md-size-2x">arrow_drop_down</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    import DataService from "@/service/DataService";

    export default {
        name: "VoteButtons",
        props: ['movie'],
        methods: {
            pointUp() {
                const score = Math.min(10,Math.max(0,parseFloat(this.movie.score) + 0.1)).toFixed(1);
                DataService.put(`movies/${this.movie.id}`, {
                    ...this.movie,
                    score: parseFloat(score)
                }).then(() => {
                    this.$emit('updated')
                });

            },
            pointDown() {
                const score = Math.min(10,Math.max(0,parseFloat(this.movie.score) - 0.1)).toFixed(1);
                DataService.put(`movies/${this.movie.id}`, {
                    ...this.movie,
                    score: parseFloat(score)
                }).then(() => {
                    this.$emit('updated')
                });

            }
        }
    }
</script>

<style lang="scss" scoped>

    #vote-buttons-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    #vote-buttons {
        display: flex;
        flex-direction: column;

        .md-icon-button {
            margin: 0 0;
            font-size: 32px;

            .md-icon {
                color: #7ED321 !important
            }
        }

        .md-icon-button-down {
            margin-top: -10px;

            .md-icon {
                color: #CD3043 !important
            }
        }
    }
</style>
