import java.util.*;
import java.lang.System.out.println;

public class Chapter2 {
    public static void exec() {
        Scanner scanner = new Scanner(System.in);
        println("Welcome uranai");
        println("Insert your name");
        String name = scanner.nextLine();
        println("Insert your age");
        String ageString = scanner.nextLine();
        int fortune = new Random().nextInt(4);
        fortune++;

        println("result : " + ageString + "_" + name + "_" + fortune);
        scanner.close();
    }
}
