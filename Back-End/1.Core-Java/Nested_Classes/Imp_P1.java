package Nested_Classes;

import Nested_Classes.NonStaticInnerClass.Inner;

public class Imp_P1 {
    
    int x = 10;
    static int y = 20;

    My display(){
        int z = 30;

        class Inner implements My{

            public void show(){
                System.out.println(x);
                System.out.println(y);
                System.out.println(z);
            }
        }

        return new Inner();
    }

    public static void main(String[] args) {
        
        Imp_P1 outer = new Imp_P1();
        My m = outer.display();
        m.show();        
    }
}

interface My{
    void show();
}
