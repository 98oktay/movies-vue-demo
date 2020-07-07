<template>
    <md-menu md-size="medium" md-align-trigger :mdCloseOnSelect="false">
        <md-button md-menu-trigger class="md-primary md-sm md-raised">
            Types
            <md-icon>keyboard_arrow_down</md-icon>
        </md-button>
        <md-menu-content>
            <md-menu-item>
                <md-checkbox v-model="typeFilter" value="all">All</md-checkbox>
            </md-menu-item>
            <md-menu-item>
                <md-checkbox v-model="typeFilter" value="movie">Movies</md-checkbox>
            </md-menu-item>
            <md-menu-item>
                <md-checkbox v-model="typeFilter" value="series">Series</md-checkbox>
            </md-menu-item>
        </md-menu-content>
    </md-menu>
</template>

<script>
    export default {
        name: "TypeFilterMenu",
        computed: {
            typeFilter: {
                get () {
                    return this.$store.state.typeFilter
                },
                set (value) {
                    this.$store.commit('set',['typeFilter',value])
                }
            }
        }
    }
</script>

<style scoped>

</style>
