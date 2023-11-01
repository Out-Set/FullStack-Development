package Strings;

class P1 {
    public static void main(String[] args) {
        
        String s = "Hello";
        String s1 = "Hello";
        String s2 = "hello";

        String s3 = new String("Hello");
        String s4 = new String("hello");
        String s5 = new String("hello");


        System.out.println(s == s1);
        System.out.println(s == s2);
        System.out.println(s1 == s2);

        System.out.println(s == s3);
        System.out.println(s2 == s3);
        System.out.println(s2 == s5);
        System.out.println(s4 == s5);
    }
}