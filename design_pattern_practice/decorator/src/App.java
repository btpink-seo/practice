public class App {
    public static void main(String[] args) throws Exception {
        Beverage decaf = new Decaf();
        Beverage mocha = new Mocha(decaf);
        Beverage whip = new Whip(mocha);
        System.out.println(whip.getDescription());
        System.out.println(whip.cost());
    }
}
