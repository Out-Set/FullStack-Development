package Nested_Classes;

public class Local_Nested_Class {

    int x = 10;
    static int y = 20;

    void display(){
        int z = 30;

        class Inner{

            void show(){
                System.out.println(x);
                System.out.println(y);
                System.out.println(z);
            }
        }

        Inner I = new Inner();
        I.show();
    }


    public static void main(String[] args) {
        Local_Nested_Class outer = new Local_Nested_Class();
        outer.display();
    }
}
