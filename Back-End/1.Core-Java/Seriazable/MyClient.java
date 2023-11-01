import java.io.*;

public class MyClient {
    ObjectOutputStream oos;

    MyClient() throws Exception{
        
        oos = new ObjectOutputStream(new FileOutputStream("ducat.txt"));

        Emp e1 = new Emp(10, 20, 30, 40);
        oos.writeObject(e1);        
    }

    public static void main(String[] args) throws Exception {
        new MyClient();
    }
}
