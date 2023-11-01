class Shared{
    int x;
    synchronized void show(String s, int a){
        x=a;
        System.out.println("Starting in method "+s+" "+x);
        try {
            Thread.currentThread().wait();
            Thread.currentThread().notify();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Exitting in method "+s+" "+x);
    }
}

class CustomThred1 implements Runnable{
    Shared s;
    public CustomThred1(Shared s){
        this.s=s;
    }

    public void run(){
        s.show(Thread.currentThread().getName(), 10);
    }
}

class CustomThred2 implements Runnable{
    Shared s;
    public CustomThred2(Shared s){
        this.s=s;
    }

    public void run(){
        s.show(Thread.currentThread().getName(), 20);
    }
}

public class RunSync{
    public static void main(String...args) {
        
        Shared st = new Shared();

        CustomThred1 t1 = new CustomThred1(st);
        CustomThred2 t2 = new CustomThred2(st);

        Thread t3 = new Thread(t1);
        Thread t4 = new Thread(t2);

        t3.start();
        t4.start();
    }
}

