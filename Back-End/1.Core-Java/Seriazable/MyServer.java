import java.io.*;

public class MyServer {
    ObjectInputStream ois;

    MyServer() throws Exception {

        ois = new ObjectInputStream(new FileInputStream("ducat.txt"));

        Emp e1 = (Emp)ois.readObject();
        System.out.println(e1.x);
        System.out.println(e1.y);
        System.out.println(e1.a);
        System.out.println(e1.z);
    }

    public static void main(String[] args) throws Exception {
        new MyServer();
    }
}
