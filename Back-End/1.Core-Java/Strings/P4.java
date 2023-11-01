package Strings;

public class P4 {
    
    String str;
    P4(String str){
        this.str = str;
    }

    public String toString(){
        return str;
    }

    public static void main(String[] args) {

        String s1 = "Good";
        String s2 = "Good";
        if(s1.equals(s2)){
            System.out.println("Both are Same");
        }
        else{
            System.out.println("Not Same");
        }
        
        P4 d1 = new P4("Hello");
        P4 d2 = new P4("Hello");
        // P4 d2 = new P3("hello");

        if(d1.equals(d2)){
            System.out.println("Both are Same");
        }
        else{
            System.out.println("Not Same");
        }
    }
}


// O/p: Both are Same
//      Not Same            Why?????

// Solution program is P5.java
// Since equals() method of Object class checks the references not value/content. So, we have to override the equals() method of Object class in order to perform the desired operations.
// Note, equals() method of String class checks the value/content inside the object.