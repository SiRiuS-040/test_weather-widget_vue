<template>
    <div
        class="weather-info-param-item"
    >
        {{ collectStr(data) }}
    </div>
</template>

<script>
export default {
    name: "WeatherInfoParamItem",

    props: {
        data: {
            type: Object,
        },
    },

    methods: {
        collectStr(data) {
            return `${data.name}: ${data.value} ${data.metric}`
        },
    }
}
</script>

<style lang="scss">
    @import "../components/styles/weatherInfoParamItem/weather-info-status-item";
</style>