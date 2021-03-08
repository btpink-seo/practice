public abstract class Beverage {
    String description = "정체불명의 음료";

    public String getDescription() {
        return description;
    }

    public abstract double cost();
}
