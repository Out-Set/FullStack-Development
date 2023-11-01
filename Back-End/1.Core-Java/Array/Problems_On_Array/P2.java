package Problems_On_Array;

public class P2 {
    public static void main(String[] args) {
        int arr[][] = {{10, 20, 30}, {40, 50, 60}, {70, 80, 90}};

        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        // Ascending
        for(int i=0; i<arr.length; i++){
            for(int j=i; j<arr[i].length; j++){
                System.out.print(arr[i][j] + " ");

                if(arr[i][j] > max){
                    max = arr[i][j];
                }

                if(arr[i][j] < min) {
                    min = arr[i][j];
                }
            }
            System.out.println();
        }

        System.out.println("Max=" + max);
        System.out.println("Min=" + min);


        // Descending
        for(int i=arr.length-1; i>=0; i--){
            for(int j=i; j<arr[i].length; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
