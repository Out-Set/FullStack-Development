package Nested_Classes;

public class NonStaticInnerClass {
    
    int x = 10;
    static int y = 20;

    class Inner{

        int z = 30;
        void show(){
            System.out.println(x);
            System.out.println(y);
            System.out.println(z);
        }

        static int x = 10;
        static void fun(){
            System.out.println("hiiii");
        }
    }


    public static void main(String[] args) {
        
        System.out.println("Starts from main method");
        System.out.println(y);

        NonStaticInnerClass outer = new NonStaticInnerClass();
        System.out.println(outer.x);

        NonStaticInnerClass.Inner i = outer.new Inner();
        i.show();        
    }
}
