import java.net.*;
import java.io.*;

class MyClient{
    MyClient() throws Exception{
        Socket s = new Socket("localhost",4545);

        DataInputStream din = new DataInputStream(s.getInputStream());
        DataOutputStream dout = new DataOutputStream(s.getOutputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String s1 = "";
        String s2 = "";

        while(!s1.equals("stop")){
            s1 = br.readLine();
            dout.writeUTF(s1);
            dout.flush();
            s2 = din.readUTF();
            System.out.println("Server says: "+s2);
        }
        dout.close();
        s.close();
    }

    public static void main(String[] args) throws Exception{
        new MyClient();
    }
}