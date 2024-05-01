import copilotkit
import requests

# Function to fetch weather forecast using CopilotKit and Weather API
def get_weather_forecast(location, date):
    # Use CopilotKit to generate weather forecast
    forecast_query = f"Weather forecast for {location} on {date}"
    weather_forecast = copilotkit.complete(forecast_query)
    
    # Fetch actual weather data from Weather API based on location and date
    # Replace 'API_KEY' and 'BASE_URL' with your Weather API credentials
    api_key = '0d7681a20b574ac09ad144602240105'
    base_url = 'https://api.weatherapi.com/v1/forecast.json'
    response = requests.get(f"{base_url}?key={api_key}&q={location}&dt={date}")
    actual_forecast = response.json()
    
    return {
        'generated_forecast': weather_forecast,
        'actual_forecast': actual_forecast
    }

# Example usage

location = "New York"
date = "2024-05-01"
forecast = get_weather_forecast(location, date)
print("Generated Forecast:", forecast['generated_forecast'])
print("Actual Forecast:", forecast['actual_forecast'])
