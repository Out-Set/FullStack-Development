package Interface;

// Variable in Interface is Public, Static and Final, By-Default.
interface My10 {
    
    // final and static will be addedd by interface, ahead of the variable.
    int x = 10;
}


class P7_Interface implements My10 {

    public static void main(String[] args) {
        System.out.println(x);

        // x = x + 10; 
        // error: The final field My10.x cannot be assigned
    }
}
