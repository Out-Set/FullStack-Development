package Interface;

interface My8 {
    
    void show();
}

interface My9 {

    void show();
}

class P6_Interface implements My8, My9 {

    public void show(){
        System.out.println("show from child");
    }

    public static void main(String[] args) {
        My6 m = new P5_Interface();
        m.show();
        My7 m1 = new P5_Interface();
        m1.show();
    }
}

