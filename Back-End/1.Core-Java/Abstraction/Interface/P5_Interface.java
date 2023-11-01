package Interface;

interface My6 {
    
    default void show(){
        System.out.println("show form My6 interface");
    }
}

interface My7 {

    default void show(){
        System.out.println("show form My7 interface");
    }
}

class P5_Interface implements My6, My7 {

    public void show(){
        System.out.println("show from child");
    }

    public static void main(String[] args) {
        My6 m = new P5_Interface();
        m.show();
        My7 m1 = new P5_Interface();
        m1.show();
    }
}

// willl goto interface My6, checks if this method is available then goto child class 
//  whether it is implemented? if yes run the child class method.
