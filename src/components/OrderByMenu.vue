<template>
    <md-menu md-size="medium" md-align-trigger :mdCloseOnSelect="false">
        <md-button md-menu-trigger class="md-primary md-raised">
            Sort
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
                    return this.$store.state.filter.orderBy
                },
                set(orderBy) {
                    this.$store.commit('set', ['filter', {
                        ...this.$store.state.filter,
                        orderBy
                    }])
                }
            }
        }
    }
</script>
