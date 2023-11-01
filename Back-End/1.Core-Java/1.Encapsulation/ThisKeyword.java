package Encapsulation;

// 2.Encapsulation
 
public class ThisKeyword {
    
    int id;
    String name;
    int salary;
    static String cname = "Google";

    void store(int id, String name, int salary){
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
        ThisKeyword emp1 = new ThisKeyword();
        emp1.store(101, "Vijay", 478522);
        emp1.display();

        ThisKeyword emp2 = new ThisKeyword();
        emp2.store(102, "Raj", 8555555);
        emp2.display();
    }
}
