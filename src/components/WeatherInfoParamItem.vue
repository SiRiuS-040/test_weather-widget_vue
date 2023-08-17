<template>
    <div
        class="weather-info-param-item"
    >
        <span
            v-if="data.hasIcon"
            class="weather-info-param-item__icon-wrapper"
        >
            <img
                :src="require(`../assets/icon-${data.icon}.svg`)"
                alt="paramIcon"
                class="weather-info-param-item__icon"
                :style="`transform: rotate(${data.iconAngle}deg)`"
            >
        </span>


        <span>{{ collectStr(data) }}</span>
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
    @import "../components/styles/weatherInfoParamItem/weather-info-param-item";
</style>