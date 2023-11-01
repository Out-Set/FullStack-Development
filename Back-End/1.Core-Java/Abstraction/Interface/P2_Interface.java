package Interface;

interface My2 {
    
    default void show(){
        System.out.println("show form My interface");
    }

}
class P2_Interface implements My2 {

    public void show(){
        System.out.println("show from child");
    }

    public static void main(String[] args) {

        // We can’t create an instance(interface can’t be instantiated) of the interface but we can make the reference of it that refers to the Object of its implementing class.
        My2 m = new P2_Interface(); // up-casting
        m.show();

    }
}

// Non-static function should start with default.
// Class implementing it, should start writting method as public.
// 