package use_api;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;

public class WeatherData2 implements Subject {
    private final PropertyChangeSupport pcs;

    private float temperature;
    private float humidity;
    private float pressure;

    public WeatherData2() {
        pcs = new PropertyChangeSupport(this);
    }

    public void addPropertyChangeListener(PropertyChangeListener listener) {
        this.pcs.addPropertyChangeListener(listener);
    }

    public void removePropertyChangeListener(PropertyChangeListener listener) {
        this.pcs.removePropertyChangeListener(listener);
    }

    public void setMeasurements(float temperature, float humidity, float pressure) {
        WeatherData2 prevWeatherData2 = this;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.pcs.firePropertyChange("WeatherData", prevWeatherData2, this);
    }

    public float getTemperature() {
        return this.temperature;
    }

    public float getHumidity() {
        return this.humidity;
    }

    public float getPressure() {
        return this.pressure;
    }
}
