package Exception;

class Finally_Block {
    public static void main(String[] args) {
        
        try{
            int x = 10/0;
            System.out.println(x);
        }
        catch(ArithmeticException ae) {
            System.out.println("Division By Zero");
        } 
        finally {
            System.out.println("Finally block will always be executed");
        }
    }
}
