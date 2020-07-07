<template>

    <paginate
            :md-theme="this.$store.state.theme"
            :value="this.$store.state.page"
            :page-count="this.$store.state.pageTotal / this.$store.state.pageLimit"
            :click-handler="changePage"
            :prev-text="'keyboard_arrow_left'"
            :prev-link-class="'md-icon md-icon-font'"
            :next-link-class="'md-icon md-icon-font'"
            :next-text="'keyboard_arrow_right'"
            noLiSurround
            :container-class="'list-pagination'"
            :activeClass="'active'"
            :page-class="'list-page-item'">
    </paginate>

</template>

<script>
    export default {
        name: "ListPagination",
        methods: {
            changePage(page) {
                this.$store.commit("set", ["page", page])
            }
        }
    }
</script>

<style lang="scss">

    .list-pagination {
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;

        a {
            display: flex;
            margin: 0 0 0 -1px;
            align-items: center;
            justify-content: center;
            border: 1px solid #cecece;
            outline: none;
            text-decoration: none !important;
            padding: 1px 20px;
            height: 36px;

            &.active {
                position: relative;
                color: #ffffff !important;
                border-color: var(--md-theme-default-primary);
                background: var(--md-theme-default-primary);
            }
        }

        a:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        a:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        &[md-theme=gray] a.active {
            border-color: var(--md-theme-gray-primary);
            background: var(--md-theme-gray-primary);
        }
        &[md-theme=blue] a.active {
            border-color: var(--md-theme-blue-primary);
            background: var(--md-theme-blue-primary);
        }

        &[md-theme=black] a.active {
            border-color: var(--md-theme-black-primary);
            background: var(--md-theme-black-primary);
        }
    }

</style>
