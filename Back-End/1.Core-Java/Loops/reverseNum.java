class reverseNum{
    public static void main(String[] args) {
        int num = 4819804;

        // reverseNum.oneToN(100);

        reverseNum.revNum(num);

        reverseNum.revStr("savan");

        reverseNum.string("helllo");
        
    }

    static void revNum(int num){

        if(num<=0){
            return;
        }

        int res = num % 10;

        revNum(num/10);

        System.out.println(res);

    }

    static void revStr(String str){

        if(str.length()<=0){
            return;
        }

        int res = str.charAt(str.length()-1);

        System.out.println((char)res);

        revStr(str.substring(0, str.length()-1));

        // System.out.println((char)res);

    }

    static void oneToN(int num){
        if(num<=0){
            return;
        }

        System.out.println(num);
        oneToN(num-1);

        System.out.println(num);
    }

    static void string(String str){
        for(int i=0; i<str.length(); i++){
            System.out.println(str.charAt(i));
        }

        for(int i=str.length()-1; i>=0; i--){
            System.out.println(str.charAt(i));
        }
    }
}