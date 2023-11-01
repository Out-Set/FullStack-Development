package Encapsulation;

// Output: 10 60 Deafult Cons 30

public class Chaining3 {
    
    Chaining3(){
        this(10, 20, 30);
        System.out.println("Deafult Cons");
    }
    
    Chaining3(int x){
        // No this()
        System.out.println(x);
    }

    Chaining3(int x, int y){
        this();
        System.out.println(x+y);
    }

    Chaining3(int x, int y, int z){
        this(10);
        System.out .println(x+y+z);
    }

    public static void main(String[] args) {

        new Chaining3(10, 20);
    }
}
