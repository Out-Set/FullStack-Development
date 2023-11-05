import java.sql.*;

public class CRUDOperation {
	public static void main(String[] args) throws Exception {
		System.out.println("Database Table Creation...");
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLCDB", "sys as sysdba", "12345");
		Statement stmt = conn.createStatement();
		
		// Create Table
//		int x = stmt.executeUpdate("create table employee(id number, name varchar(20))");
//		System.out.println(x+" Table Created Successfully!");
		
		int id = 101;
		String name = "Vijay";
		
		// Insert Record
//		int x = stmt.executeUpdate("insert into employee values("+id+", '"+name+"')");
//		System.out.println(x+" Record Inserted Successfully!");
		
		
		// Update Record
//		int x = stmt.executeUpdate("update employee set name = '"+name+"' where id = "+id+"");
//		System.out.println(x+" Record Inserted Successfully!");
		
		
		// Select/Print Record
		ResultSet rs = stmt.executeQuery("select * from employee");
		System.out.println("Records from employee table.");
		while(rs.next()) {
			System.out.print(rs.getInt(1) + " ");
			System.out.println(rs.getString(2));
		}
		
		
		// Delete Record
//		int x = stmt.executeUpdate("delete employee where id = "+id+"");
//		System.out.println(x+" Record Deleted!");
		
		
		conn.close();
	}
}
