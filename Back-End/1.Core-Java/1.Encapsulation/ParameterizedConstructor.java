package Encapsulation;

// 4.Encapsulation
public class ParameterizedConstructor {
    
    int id;
    String name;
    int salary;
    static String cname = "Google";

    ParameterizedConstructor(int id, String name, int salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    void display(){
        System.out.println("Id: " + id);;
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Company Name: " + cname);
        System.out.println();
    }

    public static void main(String[] args) {
        ParameterizedConstructor emp1 = new ParameterizedConstructor(101, "Vijay", 478522);
        emp1.display();

        ParameterizedConstructor emp2 = new ParameterizedConstructor(102, "Raj", 8555555);        
        emp2.display();
    }
}
