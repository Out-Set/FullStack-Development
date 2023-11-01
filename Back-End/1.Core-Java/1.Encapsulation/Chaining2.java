package Encapsulation;

// Output: 60 10 30 Deafult Cons

public class Chaining2 {
    
    Chaining2(){
        this(10, 20);
        System.out.println("Deafult Cons");
    }
    
    Chaining2(int x){
        this(10, 20, 30);
        System.out.println(x);
    }

    Chaining2(int x, int y){
        this(10);
        System.out.println(x+y);
    }

    Chaining2(int x, int y, int z){
        // No this()
        System.out .println(x+y+z);
    }

    public static void main(String[] args) {

        new Chaining2();
    }
}
