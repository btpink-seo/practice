package use_api;

import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;

public class CurrentConditionsDisplay2 implements PropertyChangeListener, DisplayElement {
    private float temperature;
    private float humidity;
    private Subject weatherData;

    public CurrentConditionsDisplay2(Subject weatherData) {
        this.weatherData = weatherData;
        this.weatherData.addPropertyChangeListener(this);
    }

    @Override
    public void propertyChange(PropertyChangeEvent evt) {
        Object obs = evt.getSource();

        if (obs instanceof WeatherData2) {
            this.weatherData = (WeatherData2) evt.getNewValue();
            this.temperature = this.weatherData.getTemperature();
            this.humidity = this.weatherData.getHumidity();
            display();
        }
    }

    @Override
    public void display() {
        System.out.println("current weather condition : temp" + temperature + "℃, humididy : " + humidity + "%");
    }
}
