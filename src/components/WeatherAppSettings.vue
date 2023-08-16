<template>
    <div class="weather-app-settings">
        <div
            class="weather-app-card__content"
        >
            <div class="weather-app-card__title-wrapper">
                <div class="weather-app-card__title">
                    Settings
                </div>
                <UiButton
                    @click="closeSettings"
                    icon="close"
                    buttonType="close"
                    class="weather-app-card__btn "
                >
                </UiButton>
            </div>
            <draggable
                :list="appData.cardsList"
                group="cards"
                @start="drag=true"
                @end="drag=false"
                item-key="cardData"
                class="weather-app-settings__location-list"
            >
                <template #item="{element}">
                    <WeatherAppCardSettingsLocation
                        :data="element.cardData"
                    />
                </template>
            </draggable>
        </div>
        <div
            v-if="appData.settings.isAddLocationVisible"
            class="weather-app-card__wrapper"
        >
            <div class="weather-app-card__title-wrapper">
                <div class="weather-app-card__title">
                    Add location
                </div>
            </div>
            <div class="weather-app-card__content">
                <div class="weather-app-settings__search">
                    <label>
                        <input
                            v-model="searchInput"
                            type="text"
                            placeholder="Enter City Name"
                            class="weather-app-settings__search-input"
                        >
                    </label>
                    <UiButton
                        @click="addNewLocation"
                        icon="add2"
                        buttonType="add"
                        class="weather-app-settings__btn"
                    >
                    </UiButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import UiButton from './UiButton.vue';
import WeatherAppCardSettingsLocation from './WeatherAppCardSettingsLocation.vue';

import {appData} from "./features/weatherAppData";

import { saveLocationsToStorage, addLocation } from "./features/useWeatherApp";

export default {
    name: "WeatherAppSettings",

    components: {
        draggable,
        UiButton,
        WeatherAppCardSettingsLocation,
    },

    props: {
        data: {
            type: Object,
        },
    },

    data(props) {
        let searchInput = ''

        return {
            card: props.data,
            drag: true,
            searchInput,
            saveLocationsToStorage,
            addLocation,
            appData,
        };
    },

    methods: {
        closeSettings() {
            this.appData.settings.isSettingsOpen = !this.appData.settings.isSettingsOpen;
        },

        checkAddLocationVisibility() {
            if (this.appData.cardsList.length >= this.appData.settings.maxWidgets) {
                this.appData.settings.isAddLocationVisible = false;
            }
        },

        addNewLocation() {
            if (this.searchInput) {
                addLocation(this.searchInput, this.appData)
                this.searchInput = '';
            }
        }
    },
}

</script>

<style lang="scss">
    @import "../components/styles/weatherAppSettings/weather-app-settings";
</style>