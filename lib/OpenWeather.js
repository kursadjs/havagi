const key = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

export async function getWeatherLocation(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=tr`)
        .then((response) => response.json())
        .then((data) => data);
    return response
}

export async function getWeatherCity(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`)
        .then((response) => response.json())
        .then((data) => data);
    return response
}