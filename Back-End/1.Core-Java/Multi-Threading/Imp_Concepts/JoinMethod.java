package Imp_Concepts;

class Thread4 extends Thread{
    Thread4(String str){
        super(str);
    }

    public void run(){
        for(int i=1; i<=10; i++){
            System.out.println(getName());
            try {
                Thread.sleep(1000);
            } catch (Exception e) { }
        }
        System.out.println("This thread is dead: " + getName());
    }
}

class Thread5 extends Thread{
    Thread5(String str){
        super(str);
    }

    public void run(){
        for(int i=11; i<=20; i++){
            System.out.println(getName());
            try {
                Thread.sleep(1000);
            } catch (Exception e) { }
        }
        System.out.println("This thread is dead: " + getName());
    }
}

class Thread6 extends Thread{
    Thread6(String str){
        super(str);
    }

    public void run(){
        for(int i=21; i<=30; i++){
            System.out.println(getName());
            try {
                Thread.sleep(1000);
            } catch (Exception e) { }
        }
        System.out.println("This thread is dead: " + getName());
    }
}

public class JoinMethod {
    public static void main(String[] args) {
        
        Thread4 t4 = new Thread4("T1");
        Thread5 t5 = new Thread5("T2");
        Thread6 t6 = new Thread6("T3");

        t4.start();
        t5.start();
        t6.start();

        try {
            t4.join();
            t5.join();
            t6.join();
        } catch (Exception e) { }
    }
}
