public class Chapter4 {
    public void exec() {
        int[] intArr = {1, 2, 3, 4};
        int[] intArr3 = new int[] {1, 2, 3, 4};
        String[] intArr2 = new String[5];

        for (int i : intArr) {
            System.out.println(i);
        }

        for (String i : intArr2) {
            System.out.println(i);
        }
    }
}
