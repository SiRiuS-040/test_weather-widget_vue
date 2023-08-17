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
                    name: 'Wind speed',
                    value: 100,
                    metric: 'm/s',
                    hasIcon: true,
                    icon: 'direction',
                    iconAngle: 0,
                },
                {
                    name: 'Pressure',
                    value: 1000,
                    metric: 'hPa',
                    hasIcon: false,
                    icon: '',
                    iconAngle: 0,
                },
                {
                    name: 'Min temp',
                    value: 10,
                    metric: '°С',
                    hasIcon: false,
                    icon: '',
                    iconAngle: 0,
                },
                {
                    name: 'Max temp',
                    value: 15,
                    metric: '°С',
                    hasIcon: false,
                    icon: '',
                    iconAngle: 0,
                },
                {
                    name: 'Humidity',
                    value: 75,
                    metric: '%',
                    hasIcon: false,
                    icon: '',
                    iconAngle: 0,
                },
            ]
        }
    },
    cardsList: [],
};
