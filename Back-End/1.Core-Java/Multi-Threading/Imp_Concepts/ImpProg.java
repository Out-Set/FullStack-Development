package Imp_Concepts;

// Just like this, in Thread class, There is a start() method and inside start() method there is a run() method.
// So, by default we have to implement run() method only.

class Temp{

    void start(){
        run();
    }

    void run(){
        System.out.println("run method");
    }
}

public class ImpProg {
    public static void main(String[] args) {
        Temp t1 = new Temp();
        t1.start();
    }
}
