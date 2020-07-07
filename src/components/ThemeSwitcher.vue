<template>
    <div id="theme-switcher">
        <md-menu :md-offset-x="-300" :md-offset-y="-36" md-size="medium" @md-opened="visible=true"
                 @md-closed="visible=false">
            <md-button md-menu-trigger class="md-raised settings-button" :class="{visible:visible}">
                <md-icon>settings</md-icon>
            </md-button>
            <md-menu-content class="theme-switcher-menu">
                <div class="theme-switcher-menu-content">
                    <div class="theme-switcher-info">Select a Color Theme</div>
                    <div class="md-layout md-alignment-center-center">
                        <md-chip v-for="(theme,index) in themes" :key="index" :class="`theme-color theme-color-${theme}`" @click="$store.commit('setTheme',theme)"
                                 md-clickable>
                            <md-icon v-if="theme===$store.state.theme">check</md-icon>
                        </md-chip>
                    </div>

                </div>
            </md-menu-content>
        </md-menu>
    </div>
</template>

<script>
    export default {
        name: "ThemeSwitcher",
        data() {
            return {
                visible: false,
                themes: [
                    "default",
                    "gray",
                    "blue",
                    "black"
                ]
            }
        }
    }
</script>
<style scoped lang="scss">
    #theme-switcher {
        position: fixed;
        right: 0;
        top: 100px;
        z-index: 10000;
    }

    .theme-switcher-info {
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
    }

    .theme-switcher-menu {
        border: 1px solid #bbbbbb;
    }

    .theme-switcher-menu-content {
        padding: 20px;
    }

    .theme-color {
        width: 24px;
        height: 24px;
        border-radius: 5px;

        .md-icon {
            margin-left: -12px;
            margin-top: -10px;
            color: #ffffff;
            font-size: 20px !important;
        }

        &-default {
            background: #C39A6B;
        }

        &-gray {
            background: #C5C5C5;
        }

        &-blue {
            background: #8AB2C5;
        }

        &-black {
            background: #666666;
        }
    }

    .settings-button {
        border: 1px solid #bbbbbb;
        border-radius: 30px;
        transition: none;
        &.visible {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }
    }
</style>
