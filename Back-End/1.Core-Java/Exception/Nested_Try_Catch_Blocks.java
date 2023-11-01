package Exception;

public class Nested_Try_Catch_Blocks {
    public static void main(String[] args) {
        
        try {
            
            try{
                int x = 10/0;
                System.out.println(x);
            }
            catch(ArithmeticException ae) {
                System.out.println("Division By Zero");
            }
    
            try {
                int y[] = {10, 20};
                y[4] = 90;
                System.out.println(y);
            }
            catch(ArrayIndexOutOfBoundsException e) {
                System.out.println("Array Index Out of Bounds");
            }
        } 
        catch(Exception e) {
            System.out.println(e);
        }
    }
}
