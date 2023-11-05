import java.sql.*;
import javax.sql.*;

public class ResultSetMetaDataDemo {
	public static void main(String[] args) throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLCDB", "sys as sysdba", "12345");
		Statement stmt = conn.createStatement();
		
		ResultSet rs = stmt.executeQuery("select * from employee");
		
		ResultSetMetaData rsmd = rs.getMetaData();
		
		// Find the no of Columns
		int count = rsmd.getColumnCount();
		for(int i=1; i<=count; i++) {
			System.out.println("Column No: "+i);
			System.out.println("Column Name: "+ rsmd.getColumnName(i));
			System.out.println("Column Type: "+ rsmd.getColumnTypeName(i));
			System.out.println("Column Size: "+ rsmd.getColumnDisplaySize(i));
		}
		
		rs.close();
		stmt.close();
		conn.close();
	}
}
