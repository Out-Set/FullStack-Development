package Imp_Concepts;

class Thread2 extends Thread{
    Thread2(String str){
        super(str);
        start();
    }

    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println(getName());
            try {
                Thread.sleep(1000);
            } catch (Exception e) { }
        }
    }
}

class Thread3 extends Thread{
    Thread3(String str){
        super(str);
        start();
    }

    public void run(){
        for(int i=1; i<=10; i++){
            System.out.println(getName());
            try {
                Thread.sleep(1000);
            } catch (Exception e) { }
        }
    }
}

public class ThreadSleep {
    public static void main(String[] args) {
        Thread2 t2 = new Thread2("Ducat-1");
        Thread3 t3 = new Thread3("Ducat-2");
    }
}
