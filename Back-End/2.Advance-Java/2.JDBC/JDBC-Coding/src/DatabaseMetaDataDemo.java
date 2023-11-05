import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.Statement;

public class DatabaseMetaDataDemo {
	public static void main(String[] args) throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLCDB", "sys as sysdba", "12345");
		Statement stmt = conn.createStatement();
		
		DatabaseMetaData dbmd = conn.getMetaData();
		
		System.out.println("Database Server Name: "+ dbmd.getDatabaseProductName());
		System.out.println("Database Server Version: "+ dbmd.getDatabaseProductVersion());
		System.out.println("Driver Server Version: "+ dbmd.getDriverVersion());
		System.out.println("Driver Server Name: "+ dbmd.getDriverName());
		System.out.println("Max Columns: "+ dbmd.getMaxColumnsInTable());
		
		stmt.close();
		conn.close();
	}
}
