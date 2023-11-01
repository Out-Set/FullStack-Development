package Two_Dimensional_Array;

public class FindMin {
    public static void main(String[] args) {
        
        int arr[][] = {{10, 20, 30}, {40, 50, 60}, {70, 80, 90}};

        int min = arr[0][0];
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                if(arr[i][j] < min){
                    min = arr[i][j];
                }
            }
        }

        System.out.println(min);
    }
}
