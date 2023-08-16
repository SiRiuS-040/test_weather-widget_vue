<template>
    <button
        class="ui-button"
        :class="uiButtonClasses"
    >
        <img
            v-if="icon"
            :src="require(`../assets/icon-${icon}.svg`)"
            class="ui-button__icon"
        >

        <span class="ui-button__desc">
            <slot name="desc"></slot>
        </span>
    </button>
</template>

<script>

export default {
    name: "UiButton",

    props: {
        icon: {
            type: String,
            default: '',
        },
        buttonType: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            // imgPath: require(`../assets/icon-${icon}.svg`),
        }
    },

    setup(props) {
        const uiButtonClasses = props.buttonType ? `ui-button--${props.buttonType}` : '';

        return {
            uiButtonClasses
        };
    },

    methods: {
        setIcon(icon) {
            return `./src/assets/icon-${icon}.svg`
        }
    }
}
</script>

<style lang="scss">
    @import "./styles/uiButton/ui-button.scss";
</style>