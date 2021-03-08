public class Soy extends CondimentDecorator {
    Beverage beverage;

    public Soy(Beverage beverage) {
        this.beverage = beverage;
    }

    public String getDescription() {
        return this.beverage.getDescription() + ", 두유";
    }

    public double cost() {
        return this.beverage.cost() + .15;
    }
}
