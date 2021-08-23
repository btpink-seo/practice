public class Chapter5 {
    public void introduceOneself() {
        String name = "ssh";
        int age = 31;
        int height = 169;
        char tw = 'W';

        System.out.println(name + age + height + tw);
    }

    public void email(String title, String address, String text) {
        System.out.println("to : " + address);
        System.out.println("title : " + title);
        System.out.println("body : " + text);
    }

    public void email(String address, String text) {
        System.out.println("to : " + address);
        System.out.println("title : no title");
        System.out.println("body : " + text);
    }

    public double calcTriangleArea(double bottom, double height) {
        return bottom * height / 2;
    }

    public double calcCircleArea(double radius) {
        return 3.14 * radius * radius;
    }
}
