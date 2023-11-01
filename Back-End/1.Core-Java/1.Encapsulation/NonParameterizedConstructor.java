package Encapsulation;

// 3.Encapsulation

public class NonParameterizedConstructor {
    
    int id;
    String name;
    int salary;
    static String cname = "Google";

    NonParameterizedConstructor(){
        id = 101;
        name = "Vijay";
        salary = 7894522;
    }

    void display(){
        System.out.println("Id: " + id);;
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Company Name: " + cname);
        System.out.println();
    }

    public static void main(String[] args) {
        NonParameterizedConstructor emp1 = new NonParameterizedConstructor();        
        emp1.display();
    }
}
