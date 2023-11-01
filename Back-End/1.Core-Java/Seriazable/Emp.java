
public class Emp extends Base {
    int x;
    static int y;
    transient int a;

    Emp(int x, int y, int a, int z){
        this.x = x;
        this.y = y;
        this.a = a;
        this.z = z;
    }
}
