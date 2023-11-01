package Inheritance;

class base5 {
    void show(){
        System.out.println("show form base");
    }
}
class Down_Casting extends base5 {

    void show(){
        System.out.println("show from child class");
    }

    void display() {
        System.out.println("display from child class");
    }

    public static void main(String[] args) {

        base5 b = new Down_Casting(); // up-casting
        b.show();
        
        Down_Casting d = (Down_Casting)b; // down-casting
        d.display();
    }
}
