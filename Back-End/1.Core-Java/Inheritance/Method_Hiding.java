package Inheritance;

class base {
    
    static void show(){
        System.out.println("show from base class");
    }
}
class Method_Hiding {

    static void show(){
        System.out.println("show form child class");
    }
    
    public static void main(String[] args) {
        
        Method_Hiding h = new Method_Hiding();
        Method_Hiding.show();
    }
}