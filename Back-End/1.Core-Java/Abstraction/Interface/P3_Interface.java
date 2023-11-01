package Interface;

interface My3 {
    
    // By default, all methods are public and abstract.
    // Interface adds the public abstract ahead of the function.
    void show(); 

}

class P3_Interface implements My3 {

    // while implementing, must add public, because function signature must be the same.
    public void show(){
        System.out.println("show from child");
    }

    public static void main(String[] args) {

        My3 m = new P3_Interface();
        m.show();
    }
}

