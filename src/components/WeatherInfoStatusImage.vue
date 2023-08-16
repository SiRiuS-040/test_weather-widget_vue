<template>
    <div class="weather-info-status-image">
        <img
            :src="require(`../assets/icons/${iconName}.svg`)"
            class="weather-info-status-image__icon"
        />
    </div>
</template>

<script>
export default {
    name: "WeatherInfoStatusImage",

    props: {
        iconName: {
            type: String,
            default: '01d'
        },
    },

    setup() {
        return {
        };
    },
}
</script>

<style lang="scss">
    @import "../components/styles/weatherInfoStatusImage/weather-info-status-image";
</style>