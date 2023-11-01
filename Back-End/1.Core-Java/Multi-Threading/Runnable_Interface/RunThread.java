package Runnable_Interface;

class Thread1 implements Runnable{
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName());
        }
    }
}

class RunThread {
    public static void main(String[] args) {
        
        Thread1 t1 = new Thread1();

        Thread thread1 = new Thread(t1);
        Thread thread2 = new Thread(t1);
        Thread thread3 = new Thread(t1);
        Thread thread4 = new Thread(t1);

        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();

        // Run the main thread only
        // thread1.run();
        // thread2.run();
        // thread3.run();
        // thread4.run();
    }
}