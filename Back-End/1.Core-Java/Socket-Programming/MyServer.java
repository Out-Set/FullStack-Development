import java.net.*;
import java.io.*;

public class MyServer {
    MyServer() throws Exception{
        ServerSocket ss = new ServerSocket(4545);
        System.out.println("Server is started......");

        Socket s = ss.accept();

        DataInputStream din = new DataInputStream(s.getInputStream());
        DataOutputStream dout = new DataOutputStream(s.getOutputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String s1 = "";
        String s2 = "";

        while(!s1.equals("stop")){
            s1 = din.readUTF();
            System.out.println("Client says: " + s1);
            s2 = br.readLine();
            dout.writeUTF(s2);
            dout.flush();
        }
        din.close();
        dout.close();
        ss.close();
    }

    public static void main(String[] args) throws Exception{
        new MyServer();
    }
}
