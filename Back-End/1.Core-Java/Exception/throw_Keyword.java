package Exception;

class DemoExec {
    
    int age;

    void ageValidation(int age) throws Exception {
        if(age<18) {
            throw new ageException("You are UnderAged");
        }
    }
}

public class throw_Keyword {
    public static void main(String[] args) {
        
        DemoExec d1 = new DemoExec();
        
        try {
            d1.ageValidation(16);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

class ageException extends Exception {
    ageException(String str){
        super(str);
    }
}
