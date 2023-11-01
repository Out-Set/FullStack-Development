package Synchronozation;

class ApnaBank{
    int x;
    int y;
    int add(int x, int y){
        return x+y;
    }
}

class Thread1 extends Thread{
    ApnaBank ab;
    Thread1(ApnaBank ab, String str){
        super(str);
        this.ab = ab;
        start();
    }

    public void run(){
        System.out.println("Thread1 addition: "+getName()+"   --->"+ab.add(10, 20));
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class Thread2 extends Thread{
    ApnaBank ab;
    Thread2(ApnaBank ab, String str){
        super(str);
        this.ab = ab;
        start();
    }

    public void run(){
        System.out.println("Thread1 addition: "+getName()+"   --->"+ab.add(100, 200));
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class Thread3 extends Thread{
    ApnaBank ab;
    Thread3(ApnaBank ab, String str){
        super(str);
        this.ab = ab;
        start();
    }

    public void run(){
        System.out.println("Thread1 addition: "+getName()+"   --->"+ab.add(1000, 2000));
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}


public class Intro_To_Sync {
    public static void main(String[] args) {
        
        ApnaBank ab = new ApnaBank();

        Thread1 t1 = new Thread1(ab, "Customer-1");
        Thread2 t2 = new Thread2(ab, "Customer-2");
        Thread3 t3 = new Thread3(ab, "Customer-3");
    }
}