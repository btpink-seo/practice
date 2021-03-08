public class Whip extends CondimentDecorator {
    Beverage beverage;

    public Whip(Beverage beverage) {
        this.beverage = beverage;
    }

    public String getDescription() {
        return this.beverage.getDescription() + ", 휘핑";
    }

    public double cost() {
        return this.beverage.cost() + .10;
    }
}
