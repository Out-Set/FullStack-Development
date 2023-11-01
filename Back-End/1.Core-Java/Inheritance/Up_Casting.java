package Inheritance;

class base4 {
    void show(){
        System.out.println("show form base");
    }
}
class Up_Casting extends base4 {

    void show(){
        System.out.println("show from child class");
    }

    void display() {
        System.out.println("display from child class");
    }

    public static void main(String[] args) {

        base4 b = new Up_Casting(); // up-casting
        b.show();
        //b.display(); //error: The method display() is undefined for the type base4
    }
}
