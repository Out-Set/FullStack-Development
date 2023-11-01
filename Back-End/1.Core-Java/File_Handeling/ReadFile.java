import java.io.FileInputStream;
import java.io.IOException;

class ReadFile{
    public static void main(String[] args)  throws IOException{
        
        FileInputStream fis = new FileInputStream("file.txt");

        try {
            int i=0;
            while(i != -1){
                i = fis.read();
                System.out.print((char)i);
            }
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println("exception");
        }
        finally{
            fis.close();
        }
    }
}