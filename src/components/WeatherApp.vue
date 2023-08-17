<template>
    <div class="weather-app">
        <UiButton
            v-if="!appData.settings.isSettingsOpen"
            @click="openSettings"
            icon="settings"
            buttonType="settings"
            class="weather-app__open-settings"
        >
        </UiButton>
        <WeatherAppSettings
            v-if="appData.settings.isSettingsOpen"
        />
        <div
            v-if="(appData.cardsList.length === 0) && !appData.settings.isSettingsOpen && appData.settings.userCityNotLocated"
            class="weather-app__content"
        >
            <p class="weather-app__plug-message">
                Automatic set up failed
            </p>
            <p class="weather-app__plug-message">
                Please choose your location
            </p>
        </div>
        <div
            v-if="!appData.settings.isSettingsOpen"
            class="weather-app__cards"
        >
            <WeatherAppCard
                firstCard
                v-if="!appData.settings.userCityNotLocated && (appData.cardsList.length === 0)"
                :data="appData.startCard"
            />
            <WeatherAppCard
                v-for="(card) in appData.cardsList"
                :key="card.cardData.id"
                :data="card"
            />
        </div>
    </div>
</template>

<script>

import UiButton from "./UiButton.vue";
import WeatherAppCard from "./WeatherAppCard.vue";
import WeatherAppSettings from "./WeatherAppSettings.vue";
import { appData } from "./features/weatherAppData";
import { firstStart, setStartCard, updateCardsFromLocalStorage } from "./features/useWeatherApp";

export default {
    name: "WeatherApp",
    components: {
        UiButton,
        WeatherAppCard,
        WeatherAppSettings,
    },

    data() {
        return {
            appData,
        };
    },

    mounted() {
        let currentData = this.appData
        firstStart(this.appData)
        setInterval(function() {
            setStartCard(currentData)
            updateCardsFromLocalStorage(currentData)
        }, this.appData.settings.updatePeriod);

    },

    methods: {
        openSettings() {
            this.appData.settings.isSettingsOpen = !this.appData.settings.isSettingsOpen;
        },
    },
}
</script>

<style lang="scss">
    @import "../components/styles/weatherApp/weather-app";
</style>