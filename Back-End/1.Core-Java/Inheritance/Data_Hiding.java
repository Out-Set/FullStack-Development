package Inheritance;

class Base3 {
    int x = 10;
}

class Data_Hiding extends Base3 {
    int x = 20;

    void show(){
        System.out.println(x);
        System.out.println(this.x);
        System.out.println(super.x);
    }

    public static void main(String[] args) {
        Data_Hiding c3 = new Data_Hiding();
        c3.show();
    }
}

