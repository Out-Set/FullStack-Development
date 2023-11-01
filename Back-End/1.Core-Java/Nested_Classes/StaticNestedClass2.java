package Nested_Classes;

public class StaticNestedClass2 {
    
    int x = 20;
    static int y = 20;

    static class Inner{

        int z = 30;
        static int p = 50;
        void show(){
            // System.out.println(x);
            System.out.println(y);
            System.out.println(z);
            // static int z = 56;  // error
        }

        public static void main(String[] args) {
            System.out.println("Main method from inner class");
        }

    }

    public static void main(String[] args) {
        
        System.out.println("Starts from main method");
        System.out.println(y);

        Inner i = new Inner();
        i.show();
    }
}
