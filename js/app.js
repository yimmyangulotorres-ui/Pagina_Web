const ejercicios = [

{
titulo: "Java Stdin and Stdout I",
codigo: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        System.out.println(a);
        int b = scan.nextInt();
        System.out.println(b);
        int c = scan.nextInt();
        System.out.println(c);
    }
};`,
prueba: `
Entrada:
1
2
3

Proceso:
Lee 3 números enteros y los imprime en el mismo orden.

Salida:
1
2
3
`
},

{
titulo: "Java If-Else",
codigo: `import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int num1;
        do {
            num1 = teclado.nextInt();
        } while (num1 < 1 || num1 > 100);

        if (num1 % 2 == 0 && num1 >= 2 && num1 <= 5) {
            System.out.println("Not Weird");
        } else if (num1 % 2 == 0 && num1 >= 6 && num1 <= 20) {
            System.out.println("Weird");
        } else if (num1 % 2 == 0 && num1 > 20) {
            System.out.println("Not Weird");
        } else {
            System.out.println("Weird");
        }
    }
};`,
prueba: `
Entrada:
4

Proceso:
Número par entre 2 y 5 → Not Weird

Salida:
Not Weird
`
},

{
titulo: "Java Stdin and Stdout II",
codigo: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = scan.nextInt();
        double d = scan.nextDouble();
        scan.nextLine();
        String s = scan.nextLine();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);

        scan.close();
    }
};`,
prueba: `
Entrada:
42
3.14
Hola

Salida:
String: Hola
Double: 3.14
Int: 42
`
},

{
titulo: "Java Output Formatting",
codigo: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1 = sc.next();
            int x = sc.nextInt();
            System.out.printf("%-15s%03d%n", s1, x);
        }
        System.out.println("================================");
    }
};`,
prueba: `
Entrada:
java 100
cpp 65
python 50

Salida:
================================
java           100
cpp            065
python         050
================================
`
},

{
titulo: "Java Loops I",
codigo: `import java.util.Scanner;

public class tabla {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int num1;

        do {
            num1 = teclado.nextInt();
        } while (num1 < 2 || num1 > 20);

        for(int i = 1; i <= 10; i++){
            System.out.println(num1 + " x " + i + " = " + (num1 * i));
        }
    }
};`,
prueba: `
Entrada:
3

Salida:
3 x 1 = 3
...
3 x 10 = 30
`
},

{
titulo: "Java Loops II",
codigo: `import java.util.Scanner;

public class multi_2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int q = in.nextInt();

        for (int i = 0; i < q; i++) {
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();

            int suma = a;
            int potencia = 1;

            for (int j = 0; j < n; j++) {
                suma += potencia * b;
                System.out.print(suma + " ");
                potencia *= 2;
            }
            System.out.println();
        }
        in.close();
    }
};`,
prueba: `
Entrada:
1
0 2 3

Proceso:
Serie: 2, 6, 14

Salida:
2 6 14
`
},

{
titulo: "Java Datatypes",
codigo: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();

        for (int i = 0; i < t; i++) {
            try {
                long n = scan.nextLong();
                System.out.println(n + " can be fitted in:");

                if (n >= -128 && n <= 127) System.out.println("* byte");
                if (n >= -32768 && n <= 32767) System.out.println("* short");
                if (n >= -2147483648L && n <= 2147483647L) System.out.println("* int");

                System.out.println("* long");

            } catch (Exception e) {
                System.out.println(scan.next() + " can't be fitted anywhere.");
            }
        }
        scan.close();
    }
};`,
prueba: `
Entrada:
1
150

Salida:
150 can be fitted in:
* short
* int
* long
`
},

{
titulo: "Java End-of-file",
codigo: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int linea = 1;

        while (scan.hasNextLine()) {
            System.out.println(linea + " " + scan.nextLine());
            linea++;
        }

        scan.close();
    }
};`,
prueba: `
Entrada:
Hola
Mundo

Salida:
1 Hola
2 Mundo
`
},

{
titulo: "Java Static Initializer Block",
codigo: `import java.util.Scanner;

public class Solution {

    static int base;
    static int altura;
    static boolean valido = true;

    static {
        Scanner scan = new Scanner(System.in);
        base = scan.nextInt();
        altura = scan.nextInt();

        if (base <= 0 || altura <= 0) {
            valido = false;
            System.out.println("java.lang.Exception: Breadth and height must be positive");
        }
        scan.close();
    }

    public static void main(String[] args) {
        if (valido) {
            System.out.println(base * altura);
        }
    }
};`,
prueba: `
Entrada:
5 3

Salida:
15
`
},

{
titulo: "Java Int to String",
codigo: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        String s = Integer.toString(n);

        if (n == Integer.parseInt(s)) {
            System.out.println("Good job");
        } else {
            System.out.println("Wrong answer");
        }

        sc.close();
    }
};`,
prueba: `
Entrada:
100

Salida:
Good job
`
},

{
titulo: "Java Date and Time",
codigo: `import java.util.*;
import java.text.*;

public class Solution {

    public static String findDay(int month, int day, int year) {

        Calendar fecha = Calendar.getInstance();
        fecha.set(year, month - 1, day);

        String nombreDia = fecha.getDisplayName(
                Calendar.DAY_OF_WEEK,
                Calendar.LONG,
                Locale.US
        );

        return nombreDia.toUpperCase();
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int month = scan.nextInt();
        int day = scan.nextInt();
        int year = scan.nextInt();

        System.out.println(findDay(month, day, year));

        scan.close();
    }
};`,
prueba: `
Entrada:
8 5 2015

Salida:
WEDNESDAY
`
},

{
titulo: "Java Currency Formatter",
codigo: `import java.util.*; 
import java.text.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double payment = scan.nextDouble();

        Locale us = Locale.US;
        Locale india = new Locale("en", "IN");
        Locale china = Locale.CHINA;
        Locale france = Locale.FRANCE;

        NumberFormat formatoUS = NumberFormat.getCurrencyInstance(us);
        NumberFormat formatoIndia = NumberFormat.getCurrencyInstance(india);
        NumberFormat formatoChina = NumberFormat.getCurrencyInstance(china);
        NumberFormat formatoFrance = NumberFormat.getCurrencyInstance(france);

        System.out.println("US: " + formatoUS.format(payment));
        System.out.println("India: " + formatoIndia.format(payment));
        System.out.println("China: " + formatoChina.format(payment));
        System.out.println("France: " + formatoFrance.format(payment));
    }
};`,
prueba: `
Entrada:
12324.134

Salida:
US: $12,324.13
India: Rs.12,324.13
China: ￥12,324.13
France: 12 324,13 €
`
},

{
titulo: "Java Strings Introduction",
codigo: `import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String a = scan.nextLine();
        String b = scan.nextLine();

        System.out.println(a.length() + b.length());

        if (a.compareTo(b) > 0) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        String a2 = a.substring(0,1).toUpperCase() + a.substring(1);
        String b2 = b.substring(0,1).toUpperCase() + b.substring(1);

        System.out.println(a2 + " " + b2);

        scan.close();
    }
};`,
prueba: `
Entrada:
hello
java

Salida:
9
No
Hello Java
`
},

{
titulo: "Java Substring",
codigo: `import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String texto = scan.nextLine();
        int inicio = scan.nextInt();
        int fin = scan.nextInt();

        if (inicio >= 0 && fin <= texto.length() && inicio < fin) {
            String resultado = texto.substring(inicio, fin);
            System.out.println(resultado);
        }

        scan.close();
    }
};`,
prueba: `
Entrada:
HackerRank
0 6

Salida:
Hacker
`
},

{
titulo: "Java Substring Comparisons",
codigo: `import java.util.*;

public class Solution {

    public static String getSmallestAndLargest(String s, int k) {

        String menor = s.substring(0, k);
        String mayor = s.substring(0, k);

        for (int i = 1; i <= s.length() - k; i++) {

            String parte = s.substring(i, i + k);

            if (parte.compareTo(menor) < 0) {
                menor = parte;
            }

            if (parte.compareTo(mayor) > 0) {
                mayor = parte;
            }
        }

        return menor + "\\n" + mayor;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String s = scan.nextLine();
        int k = scan.nextInt();

        System.out.println(getSmallestAndLargest(s, k));

        scan.close();
    }
};`,
prueba: `
Entrada:
welcometojava
3

Salida:
ava
wel
`
},

{
titulo: "Java String Reverse",
codigo: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String texto = scan.nextLine();

        String invertido = new StringBuilder(texto).reverse().toString();

        System.out.println(texto.equals(invertido) ? "Yes" : "No");

        scan.close();
    }
};`,
prueba: `
Entrada:
madam

Salida:
Yes
`
}

];
const contenedor = document.getElementById("contenedor-cards");

if (contenedor) {
    ejercicios.forEach(ej => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${ej.titulo}</h2>
            <pre><code>${ej.codigo.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
            <div class="prueba">
                <h3>Prueba de escritorio</h3>
                <pre>${ej.prueba}</pre>
            </div>
        `;

        contenedor.appendChild(card);
    });
} else {
    console.error("No existe #contenedor-cards");
};

// animación recomendaciones
const recoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".reco-card").forEach(card => {
  recoObserver.observe(card);
});
