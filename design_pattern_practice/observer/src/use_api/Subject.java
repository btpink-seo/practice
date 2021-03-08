package use_api;

import java.beans.PropertyChangeListener;

public interface Subject {
    public void addPropertyChangeListener(PropertyChangeListener listener);
    public void removePropertyChangeListener(PropertyChangeListener listener);
    public float getTemperature();
    public float getHumidity();
    public float getPressure();
}
