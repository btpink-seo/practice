package duck;
import fly.FlyBehavior;
import quack.QuackBehavior;

public abstract class Duck {
    FlyBehavior flyBehavior;
    QuackBehavior quackBehavior;

    public Duck() {
    }

    public abstract void display();

    public void performFly() {
        flyBehavior.fly();
    }

    public void performQuack() {
        quackBehavior.quack();
    }

    public void swim() {
        System.out.println("오리 수영!!");
    }

    public void setFlyBehavior(FlyBehavior fb) {
      flyBehavior = fb;
    }

    public void setQuackBehavior(QuackBehavior qb) {
      quackBehavior = qb;
    }
}
