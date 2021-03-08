import use_api.*;

public class App {
    public static void main(String[] args) throws Exception {
        WeatherData weatherData = new WeatherData();

        new CurrentConditionsDisplay(weatherData);

        weatherData.setMeasurements(27, 65, 30.4f);
        weatherData.setMeasurements(28, 70, 29.2f);
        weatherData.setMeasurements(26, 90, 29.2f);

        System.out.println("================================");

        WeatherData2 weatherData2 = new WeatherData2();

        new CurrentConditionsDisplay2(weatherData2);

        weatherData2.setMeasurements(27, 65, 30.4f);
        weatherData2.setMeasurements(28, 70, 29.2f);
        weatherData2.setMeasurements(26, 90, 29.2f);
    }
}
