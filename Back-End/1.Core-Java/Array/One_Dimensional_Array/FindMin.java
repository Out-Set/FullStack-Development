package One_Dimensional_Array;

public class FindMin {
    public static void main(String[] args) {
        
        int arr[] = {50, 40, 90, 70, 485, 962, 1, 2};

        int min = arr[0];

        for(int i=1; i<arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }

        System.out.println(min);
    }
}
