package Package;

public class Demo {

    public void show() {
        System.out.println("show from package 1");
    }

    public static void main(String[] args) {
        Demo d1 = new Demo();
        d1.show();
    }
}