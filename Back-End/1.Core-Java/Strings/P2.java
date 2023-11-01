package Strings;

public class P2 {

    String str;

    P2(String str){
        this.str = str;
    }

    public static void main(String[] args) {

        String s = "hello";
        System.out.println(s);
        
        P2 p = new P2("hello");
        System.out.println(p);
        // Why we are not getting value inside p(i.e. hello) ?
    }
}

// Solution is P3.java
// We are passing the value to P2 class constructor but not returning the value.
// So, to get the value inside the object p we have to override the toString() method of Object class.