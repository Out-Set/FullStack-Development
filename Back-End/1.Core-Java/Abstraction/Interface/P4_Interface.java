package Interface;

// We can achieve Multiple-Inheritance through Interface.
interface My4 {
    
    static void show(){
        System.out.println("show form My4 interface");
    }
}

interface My5 {
    static void show(){
        System.out.println("show form My5 interface");
    }
}

class P4_Interface implements My4, My5 {

    public static void main(String[] args) {
        My4.show();
        My5.show();
    }
}
