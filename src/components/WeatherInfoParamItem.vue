<template>
    <div
        class="weather-info-param-item"
    >
        <span
            v-if="data.hasIcon"
            class="weather-info-param-item__icon-wrapper"
        >
            <svg
                class="weather-info-param-item__icon"
                :style="`transform: rotate(${data.iconAngle}deg)`"
                v-html="appAdsIcons[data.icon].svg"
            />
        </span>


        <span>{{ collectStr(data) }}</span>
    </div>
</template>

<script>
import { appAdsIcons } from "./features/iconStorage";

export default {
    name: "WeatherInfoParamItem",

    props: {
        data: {
            type: Object,
        },
    },

    data() {
        return {
            appAdsIcons,
        };
    },

    methods: {
        collectStr(data) {
            return `${data.name}: ${data.value} ${data.metric}`
        },
    }
}
</script>

<style lang="scss">
    @import "../components/styles/weatherInfoParamItem/weather-info-param-item";
</style>