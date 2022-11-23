import java.util.ArrayList;
import java.util.Scanner;

interface Operationable<T>{
    T calculate(T x, T y);
}

public class Main {
    public static void main(String[] args) {
        Operationable<Integer> aaa = (a, b) -> a + b ;
        System.out.println(aaa.calculate(1,2));
    }
}
