package Strings;

public class P3 {

    String str;

    P3(String str){
        this.str = str;
    }

    public String toString(){
        return str;
    }

    public static void main(String[] args) {
        
        P3 p = new P3("hello");
        System.out.println(p);
    }
}
