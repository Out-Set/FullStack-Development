package Abstract_Class;

abstract class GST {

    int amount;
    int gst;
    int discount;

    abstract void gst();
    abstract void discount();

    GST(){
        this(10, 20);
        System.out.println("Default constructor form Abstract class.");
    }

    GST(int x, int y){
        System.out.println("hello form abstract class");
    }
}
class Example extends GST {

    void set(int amount, int gst, int discount){
        this.amount = amount;
        this.gst = gst;
        this.discount = discount;        
    }

    void gst(){
        int gstAmount = (amount*gst)/100;
        System.out.println(gstAmount);
    }

    void discount(){
        int discAmount = (amount*discount)/100;
        System.out.println(discAmount);
    }

    int payable(){
        return (amount+gst+discount);
    }

    Example(){
        super();
    }

    public static void main(String[] args) {
        
        Example e1 = new Example();
        e1.set(50000, 18, 10);
        e1.gst();
        e1.discount();

        System.out.println("Payable: "+ e1.payable());
    }
}
