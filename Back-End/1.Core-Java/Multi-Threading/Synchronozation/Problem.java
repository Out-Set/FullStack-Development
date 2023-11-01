package Synchronozation;

class ApnaBank1{
    int x;
    int y;

    int add(int a, int b){
        x=a;
        y=b;

        try {
            Thread.sleep(2000);
        } catch (Exception e) { }

        return x+y;
    }
}

class Thread4 extends Thread{
    ApnaBank1 ab;
    Thread4(ApnaBank1 ab, String str){
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

class Thread5 extends Thread{
    ApnaBank1 ab;
    Thread5(ApnaBank1 ab, String str){
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

class Thread6 extends Thread{
    ApnaBank1 ab;
    Thread6(ApnaBank1 ab, String str){
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


public class Problem {
    public static void main(String[] args) {
        
        ApnaBank1 ab = new ApnaBank1();

        Thread4 t4 = new Thread4(ab, "Customer-1");
        Thread5 t5 = new Thread5(ab, "Customer-2");
        Thread6 t6 = new Thread6(ab, "Customer-3");
    }
}
