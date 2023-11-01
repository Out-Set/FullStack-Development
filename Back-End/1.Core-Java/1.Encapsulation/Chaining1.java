package Encapsulation;

// Output: Deafult Cons 10 30 60

public class Chaining1 {
    
    Chaining1(){
        // No this()
        System.out.println("Deafult Cons");
    }
    
    Chaining1(int x){
        this();
        System.out.println(x);
    }

    Chaining1(int x, int y){
        this(10);
        System.out.println(x+y);
    }

    Chaining1(int x, int y, int z){
        this(10, 20);
        System.out .println(x+y+z);
    }

    public static void main(String[] args) {

        new Chaining1(10, 20, 30);
    }
}
