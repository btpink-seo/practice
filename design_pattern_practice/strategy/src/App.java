import duck.Duck;
import duck.MallardDuck;
import duck.ModelDuck;
import fly.FlyWithWings;
import quack.Squeak;

public class App {
    public static void main(String[] args) throws Exception {
        Duck mallard = new MallardDuck();
        mallard.display();
        mallard.performFly();
        mallard.performQuack();

        Duck model = new ModelDuck();
        model.display();
        model.performFly();
        model.performQuack();
        model.setFlyBehavior(new FlyWithWings());
        model.setQuackBehavior(new Squeak());
        model.performFly();
        model.performQuack();
    }
}
