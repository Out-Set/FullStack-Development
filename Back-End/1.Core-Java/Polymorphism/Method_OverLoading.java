package Polymorphism;

public class Method_OverLoading {

    void add(int x, int y){
        System.out.println(x+y);
    }

    void add(int x, int y, int z){
        System.out.println(x+y+z);
    }

    void add(int x, int y, int z, int a){
        System.out.println(x+y+z-a);
    }

    void add(int age, String name){
        System.out.println("Age: " + age+ ", name: " + name);
    }

    void add(double salary, String name, int age){
        System.out.println("Age: " + age+ ", name: " + name + ", Salary: " + salary);
    }


    public static void main(String[] args) {
        Method_OverLoading o1 = new Method_OverLoading();
        o1.add(10, 20);
        o1.add(10, 20, 30);
        o1.add(10, 20, 30, 40);
        o1.add(25, "Savan");
        o1.add(100000, "Savan", 25);
    }
}
