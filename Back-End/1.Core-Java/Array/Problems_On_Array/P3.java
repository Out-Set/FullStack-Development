package Problems_On_Array;

// 2D Array in wave form

public class P3 {
    public static void main(String[] args) {
        
        int arr[][] = {{10, 20, 30}, {40, 50, 60}, {70, 80, 90}};

        boolean t = true;
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                if(t){
                    System.out.print(arr[j][i] + " ");
                }

                if(!t){
                    System.out.print(arr[2*1-j][i] + " ");
                }
            }
            t = !t;
            System.out.println();
        }
    }
}
