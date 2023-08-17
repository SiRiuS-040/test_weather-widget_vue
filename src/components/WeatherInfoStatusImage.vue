<template>
    <div class="weather-info-status-image">
        <span
            class="weather-info-status-image__icon"
            v-html="appWeatherIcons[iconName].svg"
        >
        </span>
    </div>
</template>

<script>
import {appWeatherIcons} from "./features/iconStorage";

export default {
    name: "WeatherInfoStatusImage",

    props: {
        iconName: {
            type: String,
            default: '01d'
        },
    },

    data () {
        return {
            appWeatherIcons,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/weatherInfoStatusImage/weather-info-status-image";
</style>