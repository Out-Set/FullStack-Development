package Inheritance;

class Base2 {

    void show(){
        System.out.println("show from base");;
    }
}

class Method_Overriding extends Base2 {
    
    void show(){
        super.show();
        System.out.println("show from child");
    }

    public static void main(String[] args) {
        Method_Overriding c1 = new Method_Overriding();
        c1.show();
    }
}
