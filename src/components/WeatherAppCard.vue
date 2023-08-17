<template>
    <div
        class="weather-app-card"
    >
        <div class="weather-app-card__wrapper">
            <div class="weather-app-card__title-wrapper">
                <p
                    class="weather-app-card__title">
                        {{ `${card.cardData.name}, ${card.cardData.country}` }}
                </p>
            </div>
            <div class="weather-app-card__content weather-info">
                <div class="weather-info__main">
                    <div class="weather-info__visual">
                        <WeatherInfoStatusImage
                            :iconName="card.cardData.icon"
                            class="weather-info__visual-image"
                        />
                        <div class="weather-app-card__status-desc">
                            {{ `${card.cardData.temp}°` }}
                        </div>
                    </div>
                    <p class="weather-info__desc">
                        {{ card.cardData.weatherInfo }}
                    </p>
                </div>
                <div class="weather-info__params">
                    <WeatherInfoParamItem
                        v-for="(item, index) in card.cardData.weatherParams"
                        :data="item"
                        :key="index"
                        class="weather-info__param-item"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import WeatherInfoStatusImage from "./WeatherInfoStatusImage.vue";
import WeatherInfoParamItem from "./WeatherInfoParamItem.vue";

export default {
    name: "WeatherAppCard",

    components: {
        WeatherInfoStatusImage,
        WeatherInfoParamItem,
    },

    props: {
        firstCard: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Object,
        },
    },

    data(props) {
        return {
            card: props.data,
        };
    },
}

</script>

<style lang="scss">
    @import "../components/styles/weatherAppCard/weather-app-card";
</style>