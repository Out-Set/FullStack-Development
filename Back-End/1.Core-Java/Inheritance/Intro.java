package Inheritance;

class Base1 {

    int x; 
    int y;

    void show(){
        System.out.println(x);
        System.out.println(y);
    }
}

class Intro extends Base1 {
    void set(int x, int y){
        this.x = x;
        this.y = y;
    }

    public static void main(String[] args) {
        Intro c1 = new Intro();
        c1.set(10, 20);
        c1.show();
    }
}