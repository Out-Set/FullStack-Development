package Strings;

public class P5 {
    String str;
    P5(String str){
        this.str = str;
    }

    public String toString(){
        return str;
    }

    public boolean equals(P5 str){
        if(this.str == str.str){
            return true;
        }
        else{
            return false;
        }
    }

    public static void main(String[] args) {
        
        P5 d1 = new P5("Hello");
        P5 d2 = new P5("Hello");
        // P3 d2 = new P3("hello");

        if(d1.equals(d2)){
            System.out.println("Both are Same");
        }
        else{
            System.out.println("Not Same");
        }
    }
}
