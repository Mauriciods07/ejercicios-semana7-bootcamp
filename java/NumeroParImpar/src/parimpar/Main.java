/*
 * Crear un nuevo proyecto llamado NumeroParImpar
 * crear el método main
 * crear una función que evalúe si un número es par o impar (se puede usar el operador ternario)
 * Imprimir en terminal el resultado

*extra, investigar cómo usar la clase Scanner en java.

 * 
 */

package parimpar;

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Escribe un número: ");
		int number = sc.nextInt();
		
		String isOdd = (number % 2 == 0) ? "par" : "impar";
		
		System.out.println("El número es " + isOdd);
	}
}
