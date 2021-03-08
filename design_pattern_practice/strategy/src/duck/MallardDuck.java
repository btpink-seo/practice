package duck;
import fly.FlyWithWings;
import quack.Quack;

public class MallardDuck extends Duck {
    public MallardDuck() {
        quackBehavior = new Quack();
        flyBehavior = new FlyWithWings();
    }

    public void display() {
        System.out.println("-------------------");
        System.out.println("진짜 마가모 입니다.");
        System.out.println("-------------------");
    }
}
