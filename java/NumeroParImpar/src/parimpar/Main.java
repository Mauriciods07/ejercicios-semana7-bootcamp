/*
 * Crear un nuevo proyecto llamado NumeroParImpar
 * crear el m�todo main
 * crear una funci�n que eval�e si un n�mero es par o impar (se puede usar el operador ternario)
 * Imprimir en terminal el resultado

*extra, investigar c�mo usar la clase Scanner en java.

 * 
 */

package parimpar;

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Escribe un n�mero: ");
		int number = sc.nextInt();
		
		String isOdd = (number % 2 == 0) ? "par" : "impar";
		
		System.out.println("El n�mero es " + isOdd);
	}
}
