<template>
    <div class="weather-app-card-settings-location">
        <UiButton
            icon="menu"
            buttonType="drag"
        >
        </UiButton>
            {{ cardData.name }}
        <UiButton
            @click="deleteLocation(cardData.id)"
            icon="del3"
            buttonType="del"
        >
        </UiButton>
    </div>
</template>

<script>
import UiButton from '../components/UiButton.vue';
import { appData } from "./features/weatherAppData";
import { saveLocationsToStorage } from "./features/useWeatherApp";

export default {
    name: "WeatherAppCardSettingsLocation",

    components: {
        UiButton,
    },

    props: {
        data: {
            type: Object,
        },
    },

    data(props) {
        return {
            cardData: props.data,
            isSettingsOpen: false,
            appData,
            saveLocationsToStorage,
        };
    },

    methods: {
        checkAddLocationVisibility() {
            if (this.appData.cardsList.length >= this.appData.settings.maxWidgets) {
                this.appData.settings.isAddLocationVisible = false;
            } else {
                this.appData.settings.isAddLocationVisible = true;
            }
        },

        deleteLocation(id) {
            let dataIndex = this.appData.cardsList.findIndex(card => card.cardData.id === id)
            this.appData.cardsList.splice(dataIndex, 1);
            this.checkAddLocationVisibility();
            this.saveLocationsToStorage(this.appData.cardsList)
        },
    },
}

</script>

<style lang="scss">
    @import "../components/styles/WeatherAppCardSettingsLocation/weather-app-card-settings-location";
</style>