import java.util.*;

public class Chapter2 {
    public static void exec() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome uranai");
        System.out.println("Insert your name");
        String name = scanner.nextLine();
        System.out.println("Insert your age");
        String ageString = scanner.nextLine();
        int fortune = new Random().nextInt(4);
        fortune++;

        System.out.println("result : " + ageString + "_" + name + "_" + fortune);
        scanner.close();
    }
}
