package One_Dimensional_Array;

class FindMax {
    public static void main(String[] args) {
        
        int arr[] = {50, 40, 90, 70, 485, 962, 1, 2};

        int max = arr[0];

        for(int i=1; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }

        System.out.println(max);
    }
}