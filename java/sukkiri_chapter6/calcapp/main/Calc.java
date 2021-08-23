package calcapp.main;
import calcapp.logics.*;

public class Calc {
    public static void main(String[] args) {
        int a = 10; int b = 2;
        int total = CalcLogic.tatu(a, b);
        int delta = calcapp.logics.CalcLogic.hiku(a, b);
        System.out.println("total : " + total + ", delta : " + delta);
    }
}
