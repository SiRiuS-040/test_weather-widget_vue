
function useGetWeatherUrl(cityName, data) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${data.settings.appLang}&units=${data.settings.appUnits}&cnt=3&appid=${data.settings.apiKey}`
}

function useFindCityUrl(coords, data) {
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=${data.settings.apiKey}`
}

export function checkAddLocationVisibility(data) {
    if (data.cardsList.length >= data.settings.maxWidgets) {
        data.settings.isAddLocationVisible = false;
    } else {
        data.settings.isAddLocationVisible = true;
    }
}

function addCardsFromLocalStorage(data) {
    let dataFromStorageData = JSON.parse( localStorage.savedLocations )

    const reduceWay = () => dataFromStorageData.reduce(
        (acc, item) => acc.then(addLocation(item, data)),
        Promise.resolve())
        .then();
    reduceWay();
}

export function updateCardsFromLocalStorage(data) {
    if (localStorage.savedLocations) {
        let dataFromStorageData = JSON.parse( localStorage.savedLocations )
        const reduceWay = () => dataFromStorageData.reduce(
            (acc, item) => acc.then(updateCard(item, data)),
            Promise.resolve())
            .then();

        reduceWay();
    }
}

async function updateCard(cityName, data) {
    const response = await fetch(
        useGetWeatherUrl(cityName, data));
    let responseData = await response.json();

    if (responseData.message !== 'city not found') {
        const newLocation = await Object();
        Object.assign(newLocation, collectCardData(responseData))
        let itemIndex = data.cardsList.findIndex(card => card.cardData.name === cityName)
        Object.assign(data.cardsList[itemIndex], newLocation)
    }
}

export async function addLocation(cityName, data) {
    if (cityName) {
        let itemIndex = data.cardsList.findIndex(card => card.cardData.name.toLowerCase() === cityName.toLowerCase())
        if (itemIndex === -1) {
            const response = await fetch(
                useGetWeatherUrl(cityName, data));
            let responseData = await response.json();

            console.log(responseData)

            if (responseData.message !== 'city not found') {
                const newLocation = await Object();
                Object.assign(newLocation, collectCardData(responseData))
                data.cardsList.push(newLocation);
            }
            checkAddLocationVisibility(data)
            saveLocationsToStorage(data.cardsList)
        }
    }
}

export function saveLocationsToStorage(cardList) {
    let savedLocations = Array();
    cardList.forEach((card) => {
        savedLocations.push(card.cardData.name)
    })
    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
}

export function setStartCard(data) {
    async function getStartData(coords, data) {
        const getUserCityResponse = await fetch(
            useFindCityUrl(coords, data));
        const cityDataResponse = await getUserCityResponse.json();
        if (cityDataResponse.message !== 'city not found' && cityDataResponse.cod != 429) {
            const userCityName = await cityDataResponse[0].name;
            const getFirstCardData = await fetch(
                useGetWeatherUrl(userCityName, data));
            let firstCardData = await getFirstCardData.json();

            if (firstCardData.message !== 'city not found') {
                const newLocation = Object();
                Object.assign(newLocation, collectCardData(firstCardData))
                Object.assign(data.startCard, newLocation)
                data.settings.userCityNotLocated = false;
            }
        }
    }
    navigator.geolocation.getCurrentPosition(
        function(position) {
            getStartData(position.coords, data).then()
        }
    );
}

export function firstStart(data) {
    setStartCard(data)

    if (localStorage.savedLocations) {
        addCardsFromLocalStorage(data)
    }
}

export function collectCardData(data) {
    function dataMathRound(digit) {
        return Math.round(digit)
    }

    function ucFirst (str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const getWeatherInfo = `Feels like ${dataMathRound(data.main.temp)}°С. ${ucFirst(data.weather[0].description)}.`;

    const cardData = {
        id: data.id,
        name: data.name,
        country: data.sys.country,
        temp: dataMathRound(data.main.temp),
        icon: data.weather[0].icon,
        weatherInfo: getWeatherInfo,
        weatherParams: [
            {
                name: 'Wind',
                value: data.wind.speed,
                metric: 'm/s',
                hasIcon: true,
                icon: 'direction',
                iconAngle: data.wind.deg,
            },
            {
                name: 'Pressure',
                value: data.main.pressure,
                metric: 'hPa',
                hasIcon: false,
                icon: '',
                iconAngle: 0,
            },
            {
                name: 'Min temp',
                value: dataMathRound(data.main.temp_min),
                metric: '°С',
                hasIcon: false,
                icon: '',
                iconAngle: 0,
            },
            {
                name: 'Max temp',
                value: dataMathRound(data.main.temp_max),
                metric: '°С',
                hasIcon: false,
                icon: '',
                iconAngle: 0,
            },
            {
                name: 'Humidity',
                value: data.main.humidity,
                metric: '%',
                hasIcon: false,
                icon: '',
                iconAngle: 0,
            },
        ]
    };
    return {
        cardData,
    }
}
