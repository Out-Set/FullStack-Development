package Encapsulation;

// 5.Encapsulation
// We do Constructor Chaining with the help of this() Method.

public class Constructor_Chaining {

    Constructor_Chaining(){
        this(10);
        System.out.println("Deafult Cons");
    }
    
    Constructor_Chaining(int x){
        this(10, 20);
        System.out.println(x);
    }

    Constructor_Chaining(int x, int y){
        this(10, 20, 30);
        System.out.println(x+y);
    }

    Constructor_Chaining(int x, int y, int z){
        System.out .println(x+y+z);
    }

    public static void main(String[] args) {

        new Constructor_Chaining();
    }
}
