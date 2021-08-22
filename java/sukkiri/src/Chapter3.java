import java.util.*;

/**
 * Chapter3
 */
public class Chapter3 {

    public void exec() {
        System.out.println("Chapter3.exec()");
        System.out.println("asdf" == "asdf");
        if ("asdf".equals("asdf")) System.out.println("It's true!!");

        int fortune = new Random().nextInt(4) + 1;
        switch (fortune) {
            case 1:
                System.out.println("1111");
                break;
                case 2:
                System.out.println("2222");
                break;
                case 3:
                System.out.println("3333");
                break;
                case 4:
                System.out.println("4444");
                break;
            default:
                break;
        }

        boolean tenki = false;
        if (tenki == true) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}