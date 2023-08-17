<template>
    <button
        class="ui-button"
        :class="uiButtonClasses"
    >
        <span
            v-if="icon"
            class="ui-button__icon"
            v-html="appAdsIcons[icon].svg"
        />
        <span class="ui-button__desc">
            <slot name="desc"></slot>
        </span>
    </button>
</template>

<script>
import { appAdsIcons } from "./features/iconStorage";

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
            appAdsIcons,
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