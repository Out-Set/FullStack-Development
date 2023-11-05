import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Scanner;

public class PreparedStatementDemo {
	public static void main(String[] args) throws Exception {
		
		
		
	}
	
	Connection conn;
	
	void openConnection() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLCDB", "sys as sysdba", "12345");
		
		System.err.println("Connection is opened");
	}
	
	void insertData() throws Exception {
		PreparedStatement pstmt = conn.prepareStatement("insert into employee values(? ? ?)");
		Scanner sc = new Scanner(System.in);
		
		String Choice = "yes";
		
		while(Choice.equals("yes")) {
			
		}
		
		Statement stmt = conn.createStatement();
	}

}
