package Interface;

interface My1 {
    static void show(){
        System.out.println("show form My interface");
    }

}
public class P1_Interface implements My1 {
    public static void main(String[] args) {
        My1.show();
    }
}


// Whether you implement or not the static function of interface, without creating an object you can call it directly.


