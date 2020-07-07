<template>
    <div class="app-toolbar md-layout md-centered md-alignment-center-center ">
        <template v-if="this.$route.name !== 'new'">
            <TypeFilterMenu/>
            <div class="button-space"/>
            <OrderByMenu/>
            <span class="app-toolbar-space"></span>
            <md-button to="/new" class="md-primary md-raised">
                <md-icon>add</md-icon>
                New
            </md-button>
        </template>
        <template v-else>
            <md-button to="/" class="md-primary md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
                Back to list
            </md-button>
            <span class="app-toolbar-space"></span>
        </template>

        <h1 class="md-title app-title">Apsiyon Movies</h1>

    </div>
</template>

<script>
    import TypeFilterMenu from "@/components/TypeFilterMenu";
    import OrderByMenu from "@/components/OrderByMenu";

    export default {
        name: "ToolBar",
        components: {OrderByMenu, TypeFilterMenu}
    }
</script>

<style scoped>

    .app-toolbar {
        position: relative;
    }

    .app-title {
        position: absolute;
        margin: 0 !important;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

    }

    .app-toolbar-space {
        flex: 1;
    }

    .button-space {
        min-width: 20px;
    }
</style>
