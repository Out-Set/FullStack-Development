package Synchronozation;

// Use 'synchronozed' keyword before function

class ApnaBank2{
    int x;
    int y;

    synchronized int add(int a, int b){
        x=a;
        y=b;

        try {
            Thread.sleep(2000);
        } catch (Exception e) { }

        return x+y;
    }
}

class Thread7 extends Thread{
    ApnaBank2 ab;
    Thread7(ApnaBank2 ab, String str){
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

class Thread8 extends Thread{
    ApnaBank2 ab;
    Thread8(ApnaBank2 ab, String str){
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

class Thread9 extends Thread{
    ApnaBank2 ab;
    Thread9(ApnaBank2 ab, String str){
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


public class Solution {
    public static void main(String[] args) {
        
        ApnaBank2 ab = new ApnaBank2();

        Thread7 t7 = new Thread7(ab, "Customer-1");
        Thread8 t8 = new Thread8(ab, "Customer-2");
        Thread9 t9 = new Thread9(ab, "Customer-3");
    }
}
