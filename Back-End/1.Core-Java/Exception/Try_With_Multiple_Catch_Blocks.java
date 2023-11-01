package Exception;

public class Try_With_Multiple_Catch_Blocks {
    public static void main(String[] args) {
        
        try{
            // int x = 10/0;
            // System.out.println(x);

            int y[] = {10, 20};
            y[4] = 90;
            System.out.println(y);
        }
        catch(ArithmeticException ae) {

            System.out.println("Division By Zero");
        }
        catch(ArrayIndexOutOfBoundsException e) {

            System.out.println(e.getMessage());
            e.printStackTrace();
            System.out.println("Array Index Out of Bounds");
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}


