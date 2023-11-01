package Imp_Concepts;

class Thread1 implements Runnable{
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName());
        }
    }
}

public class GetNameAndSetName {
    public static void main(String[] args) {
        
        Thread1 t1 = new Thread1();

        Thread thread1 = new Thread(t1);
        Thread thread2 = new Thread(t1);

        // setName()
        thread1.setName("Thread-1");
        thread2.setName("Thread-2");

        thread1.start();
        thread2.start();
    }
}
