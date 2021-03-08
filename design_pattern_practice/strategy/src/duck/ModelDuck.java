package duck;

import fly.FlyNoWay;
import quack.Quack;

public class ModelDuck extends Duck {
    public ModelDuck() {
        flyBehavior = new FlyNoWay();
        quackBehavior = new Quack();
    }

    public void display() {
        System.out.println("-------------------");
        System.out.println("모형 덕입니다.");
        System.out.println("-------------------");
    }
}
