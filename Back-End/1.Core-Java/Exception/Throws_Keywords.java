package Exception;

import java.io.FileOutputStream;

public class Throws_Keywords {
    public static void main(String[] args) throws Exception {
        
        FileOutputStream fos = new FileOutputStream("a.txt");
        System.out.println(fos);
    }
}
