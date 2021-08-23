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

        intArr3 = null;
        // intArr3[0] = 0;
        // System.out.println(intArr3[0]);

        int[][] intArr4 = {{1,2,3},{4,5,6}};
        // int[][] intArr4 = new int[3][2];
        intArr4[0] = new int[] {7, 8, 9, 10};

        for (int[] is : intArr4) {
            for (int is2 : is) {
                System.out.println(is2);
            }
            System.out.println("=====");
        }
    }
}
