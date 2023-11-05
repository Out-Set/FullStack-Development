import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Scanner;

public class CallableStatementDemo {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Employee ID: ");
		int id = sc.nextInt();
		
		System.out.println("Enter Employee Name: ");
		String name = sc.next();
		
		sc.close();
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLCDB", "sys as sysdba", "12345");
		CallableStatement stmt = conn.prepareCall("{call insertEmployee(?, ?, ?)}");
		
		
		stmt.setInt(1, id);
		stmt.setString(2, name);
		
		// Register the out parameter before calling the stored procedure
		stmt.registerOutParameter(3, java.sql.Types.VARCHAR);
		
		stmt.executeUpdate();
		
		// Read the out parameter
		String result = stmt.getString(3);
		
		System.out.println("Employee Record Save Success:: "+ result);
		
		conn.close();
		
	}
}
