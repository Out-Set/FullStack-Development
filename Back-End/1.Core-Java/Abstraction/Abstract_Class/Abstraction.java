package Abstract_Class;

abstract class base {

    int x;
    int y;

    base(int x, int y){
        this.x = x;
        this.y = y;
    }

    base(){
        System.out.println(x);
        System.out.println(y);
    }

    abstract void display();

}
class Abstraction extends base {

    void get(int x, int y){
        this.x = x;
        this.y = y;
    }

    void display(){
        System.out.println("display from child");
    }
    
    public static void main(String[] args) {
        base ab = new Abstraction();
        
    }
}