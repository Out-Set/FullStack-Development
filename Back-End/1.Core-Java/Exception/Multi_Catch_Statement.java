package Exception;

import java.util.Scanner;
 
public class Multi_Catch_Statement {
    public static void main(String args[]) {

        Scanner scn = new Scanner(System.in);

        try {
            int n = Integer.parseInt(scn.nextLine());
            if (99%n == 0)
                System.out.println(n + " is a factor of 99");
        }
        catch (NumberFormatException | ArithmeticException ex) {
            System.out.println("Exception encountered " + ex);
        }

        scn.close();
    }
}
