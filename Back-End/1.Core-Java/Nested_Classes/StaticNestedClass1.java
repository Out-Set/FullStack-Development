package Nested_Classes;

public class StaticNestedClass1 {

    int x = 10;
    static int y = 20;
    
    static class Inner {
        
        static void show(){
            // System.out.println(x);
            System.out.println(y);
            // static int z = 56;  // error
        }
    }

    public static void main(String[] args) {
        
        System.out.println("Starts from Here: ");
        System.out.println(y);

        Inner.show();
    }
}
