export const appData = {
    settings: {
        apiKey: '52a8cc36095fe4c746cbaa2d176f915e',
        showPlug: true,
        userCityNotLocated: true,
        isSettingsOpen: false,
        isAddLocationVisible: true,
        updatePeriod: 60000, // обновление сведений каждые 15 минут - 900000
        maxWidgets: 4,
        appLang: 'en',
        appUnits: 'metric',
    },
    startCard: {
        cardData: {
            id: 100000,
            name: 'Paris',
            country: 'FR',
            temp: 25,
            icon: '10n',
            weatherInfo: 'TestTestTest',
            weatherParams: [
                {
                    name: 'Min temp',
                    value: 10,
                    metric: '°С',
                },
                {
                    name: 'Max temp',
                    value: 15,
                    metric: '°С',
                },
                {
                    name: 'Pressure',
                    value: 1000,
                    metric: 'hPa',
                },
                {
                    name: 'Humidity',
                    value: 75,
                    metric: '%',
                },
                {
                    name: 'Wind speed',
                    value: 100,
                    metric: 'm/s',

                },
            ]
        }
    },
    cardsList: [],
};
