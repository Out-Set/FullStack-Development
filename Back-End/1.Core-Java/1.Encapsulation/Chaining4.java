package Encapsulation;

// 30 Default Cons 10 60

public class Chaining4 {
    
    Chaining4(){
        this(10, 20);
        System.out.println("Deafult Cons");
    }
    
    Chaining4(int x){
        this();
        System.out.println(x);
    }

    Chaining4(int x, int y){
        // No this()
        System.out.println(x+y);
    }

    Chaining4(int x, int y, int z){
        this(10);
        System.out .println(x+y+z);
    }

    public static void main(String[] args) {

        new Chaining4(10, 20, 30);
    }
}
