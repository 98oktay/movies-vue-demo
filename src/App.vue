<template>
    <md-app :md-theme="this.$store.state.theme" id="app">
      <md-app-toolbar class="md-light" md-elevation="0">
        <ToolBar />
      </md-app-toolbar>
        <md-app-content>
            <div class="md-layout md-centered">

                <router-view></router-view>
            </div>
          <ThemeSwitcher />
        </md-app-content>
    </md-app>

</template>

<script>
    import './custom.scss'
    import ToolBar from "@/components/ToolBar";
    import ThemeSwitcher from "@/components/ThemeSwitcher";

    export default {
        name: 'App',
        components: {ThemeSwitcher, ToolBar}
    }
</script>
