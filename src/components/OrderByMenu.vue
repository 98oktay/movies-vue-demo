<template>
    <md-menu md-size="medium" md-align-trigger :mdCloseOnSelect="false">
        <md-button md-menu-trigger class="md-primary md-raised">Sort By
            <md-icon>keyboard_arrow_down</md-icon>
        </md-button>
        <md-menu-content>
            <md-menu-item>
                <md-radio v-model="orderBy" value="desc">Score (Desc)</md-radio>
            </md-menu-item>
            <md-menu-item>
                <md-radio v-model="orderBy" value="asc"> Score (Asc)</md-radio>
            </md-menu-item>
        </md-menu-content>
    </md-menu>
</template>

<script>
    export default {
        name: "OrderByMenu",
        computed: {
            orderBy: {
                get() {
                    return this.$store.state.orderBy
                },
                set(value) {
                    this.$store.commit('set', ['orderBy', value])
                }
            }
        }
    }
</script>

<style scoped>

</style>
