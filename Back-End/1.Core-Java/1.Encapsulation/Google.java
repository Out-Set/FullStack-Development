package Encapsulation;

// 1.Encapsulation

class Google{

    int id;
    String name;
    int salary;
    static String cname = "Google";

    void store(int id1, String name1, int salary1){
        id=id1;
        name=name1;
        salary=salary1;
    }

    void display(){
        System.out.println("Id: " + id);;
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Company Name: " + cname);
        System.out.println();
    }

    public static void main(String[] args) {
        Google emp1 = new Google();
        emp1.store(101, "Vijay", 478522);
        emp1.display();

        Google emp2 = new Google();
        emp2.store(102, "Raj", 8555555);
        emp2.display();
    }
}