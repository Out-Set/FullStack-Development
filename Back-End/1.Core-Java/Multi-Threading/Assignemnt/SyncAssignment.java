package Assignemnt;

class Bank {
    int money;
    int t = 5;
    int r = 10;

    synchronized float emi(int p){
        money = p;

        int mul = (money*r*t)/100;
        int res= (mul - money);

        try {
            Thread.sleep(2000);
        } catch (Exception e) { }
        
        return res/12;
    }
}

class User1 extends Thread{
    Bank b;
    User1(Bank b, String str){
        super(str);
        this.b = b;

        start();
    }

    public void run(){
        System.out.println("EMI; " + getName() + b.emi(500));
        System.out.println("Money= "+b.money+ " year= "+b.t+ " rate= "+b.r);
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class User2 extends Thread{
    Bank b;
    User2(Bank b, String str){
        super(str);
        this.b = b;

        start();
    }

    public void run(){
        System.out.println("EMI; " + getName() + b.emi(100));
        System.out.println("Money= "+b.money+ " year= "+b.t+ " rate= "+b.r);
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class User3 extends Thread{
    Bank b;
    User3(Bank b, String str){
        super(str);
        this.b = b;

        start();
    }

    public void run(){
        System.out.println("EMI; " + getName() + b.emi(200));
        System.out.println("Money= "+b.money+ " year= "+b.t+ " rate= "+b.r);
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class User4 extends Thread{
    Bank b;
    User4(Bank b, String str){
        super(str);
        this.b = b;

        start();
    }

    public void run(){
        System.out.println("EMI; " + getName() + b.emi(400));
        System.out.println("Money= "+b.money+ " year= "+b.t+ " rate= "+b.r);
        try {
            Thread.sleep(1000);
        } catch (Exception e) { }
    }
}

class SyncAssignment{
    public static void main(String[] args) {
        
        Bank b = new Bank();
        User1 u1 = new User1(b, "User-1");
        User2 u2 = new User2(b, "User-2");
        User3 u3 = new User3(b, "User-3");
        User4 u4 = new User4(b, "User-4");
    }
}