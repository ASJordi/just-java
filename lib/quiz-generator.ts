import type { Question } from "./types"

// Mock data organizado por categoría y dificultad
const mockQuestions: Record<string, Record<string, Question[]>> = {
  strings: {
    basico: [
      {
        question: "¿Qué método se usa para obtener la longitud de un String?",
        options: ["size()", "length()", "count()", "getLength()"],
        correctAnswer: "length()",
      },
      {
        question: "¿Cómo se declara un String en Java?",
        options: ['String str = "Hola";', 'string str = "Hola";', "String str = new String();", 'char str = "Hola";'],
        correctAnswer: 'String str = "Hola";',
      },
      {
        question: "¿Qué método convierte un String a mayúsculas?",
        options: ["toUpper()", "upperCase()", "toUpperCase()", "upper()"],
        correctAnswer: "toUpperCase()",
      },
      {
        question: "¿Cuál es el resultado de 'Java'.charAt(0)?",
        options: ["'J'", "'a'", "'v'", "Error de compilación"],
        correctAnswer: "'J'",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia principal entre String y StringBuilder?",
        options: [
          "String es mutable, StringBuilder es inmutable",
          "String es inmutable, StringBuilder es mutable",
          "No hay diferencia",
          "StringBuilder no existe en Java",
        ],
        correctAnswer: "String es inmutable, StringBuilder es mutable",
      },
      {
        question: '¿Cuál es el resultado de "Java".substring(1, 3)?',
        options: ['"Ja"', '"av"', '"ava"', '"va"'],
        correctAnswer: '"av"',
      },
      {
        question: "¿Cómo se comparan correctamente dos Strings en Java?",
        options: ["str1 == str2", "str1.equals(str2)", "str1.compare(str2)", "str1 === str2"],
        correctAnswer: "str1.equals(str2)",
      },
      {
        question: "¿Qué método elimina espacios en blanco al inicio y final de un String?",
        options: ["clean()", "trim()", "strip()", "remove()"],
        correctAnswer: "trim()",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la complejidad temporal de StringBuilder.append() en el caso promedio?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        question: "¿Qué sucede con el String pool cuando usas 'new String(\"texto\")'?",
        options: [
          "Se crea solo en el pool",
          "Se crea en heap y pool",
          "Se crea solo en heap",
          "No se crea ningún objeto",
        ],
        correctAnswer: "Se crea en heap y pool",
      },
      {
        question: "¿Cuál es la diferencia entre String.intern() y el literal de String?",
        options: [
          "No hay diferencia",
          "intern() fuerza la creación en el pool",
          "Los literales no van al pool",
          "intern() es más lento siempre",
        ],
        correctAnswer: "intern() fuerza la creación en el pool",
      },
      {
        question: "¿Qué patrón de expresión regular coincide con cualquier dígito?",
        options: ["\\\\d", "\\\\w", "\\\\s", "[0-9]"],
        correctAnswer: "\\\\d",
      },
    ],
  },
  arrays: {
    basico: [
      {
        question: "¿Cómo se declara un array de enteros en Java?",
        options: ["int[] arr", "int arr[]", "array<int> arr", "Tanto A como B son correctas"],
        correctAnswer: "Tanto A como B son correctas",
      },
      {
        question: "¿Cuál es el índice del primer elemento en un array de Java?",
        options: ["1", "0", "-1", "Depende del tipo"],
        correctAnswer: "0",
      },
      {
        question: "¿Qué propiedad se usa para obtener la longitud de un array?",
        options: ["size", "length", "count", "getLength()"],
        correctAnswer: "length",
      },
      {
        question: "¿Cómo se inicializa un array con valores específicos?",
        options: [
          "int[] arr = {1, 2, 3}",
          "int[] arr = new int[]{1, 2, 3}",
          "Ambas son correctas",
          "Ninguna es correcta",
        ],
        correctAnswer: "Ambas son correctas",
      },
    ],
    intermedio: [
      {
        question: "¿Qué excepción se lanza al acceder a un índice inválido?",
        options: [
          "IndexOutOfBoundsException",
          "ArrayIndexOutOfBoundsException",
          "InvalidIndexException",
          "OutOfRangeException",
        ],
        correctAnswer: "ArrayIndexOutOfBoundsException",
      },
      {
        question: "¿Cómo se ordena un array en Java?",
        options: ["Arrays.sort()", "Array.sort()", "Collections.sort()", "sort()"],
        correctAnswer: "Arrays.sort()",
      },
      {
        question: "¿Qué método se usa para copiar un array?",
        options: ["Arrays.copy()", "System.arraycopy()", "Array.clone()", "Arrays.copyOf()"],
        correctAnswer: "Arrays.copyOf()",
      },
      {
        question: "¿Cómo se crea un array bidimensional de 3x3?",
        options: [
          "int[][] arr = new int[3][3]",
          "int[3][3] arr = new int[][]",
          "int[][] arr = new int[3,3]",
          "int arr[3][3] = new int[][]",
        ],
        correctAnswer: "int[][] arr = new int[3][3]",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la complejidad temporal de Arrays.binarySearch() en un array ordenado?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: "O(log n)",
      },
      {
        question: "¿Qué algoritmo de ordenamiento usa Arrays.sort() para arrays de primitivos?",
        options: ["QuickSort", "MergeSort", "Dual-Pivot QuickSort", "HeapSort"],
        correctAnswer: "Dual-Pivot QuickSort",
      },
      {
        question: "¿Cuál es la diferencia entre Arrays.copyOf() y System.arraycopy()?",
        options: [
          "No hay diferencia",
          "copyOf() crea nuevo array, arraycopy() copia a array existente",
          "arraycopy() es más lento",
          "copyOf() no funciona con primitivos",
        ],
        correctAnswer: "copyOf() crea nuevo array, arraycopy() copia a array existente",
      },
      {
        question: "¿Qué sucede cuando se clona un array multidimensional con clone()?",
        options: [
          "Se hace copia profunda completa",
          "Se hace copia superficial (shallow copy)",
          "Solo se copia la primera dimensión",
          "Lanza excepción",
        ],
        correctAnswer: "Se hace copia superficial (shallow copy)",
      },
    ],
  },
  list: {
    basico: [
      {
        question: "¿Qué método se usa para agregar un elemento al final de una List?",
        options: ["append()", "add()", "insert()", "push()"],
        correctAnswer: "add()",
      },
      {
        question: "¿Cómo se obtiene un elemento en una posición específica?",
        options: ["get(index)", "elementAt(index)", "item(index)", "at(index)"],
        correctAnswer: "get(index)",
      },
      {
        question: "¿Cuál es la capacidad inicial por defecto de ArrayList?",
        options: ["10", "16", "32", "100"],
        correctAnswer: "10",
      },
      {
        question: "¿Qué método se usa para eliminar un elemento por índice?",
        options: ["delete(index)", "remove(index)", "erase(index)", "pop(index)"],
        correctAnswer: "remove(index)",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia principal entre ArrayList y LinkedList?",
        options: [
          "ArrayList usa arrays dinámicos, LinkedList usa nodos enlazados",
          "ArrayList es más lento para acceso aleatorio",
          "LinkedList no permite duplicados",
          "No hay diferencia significativa",
        ],
        correctAnswer: "ArrayList usa arrays dinámicos, LinkedList usa nodos enlazados",
      },
      {
        question: "¿Cuál es mejor para inserción frecuente en el medio de la lista?",
        options: ["ArrayList", "LinkedList", "Vector", "Son equivalentes"],
        correctAnswer: "LinkedList",
      },
      {
        question: "¿Qué implementación de List es thread-safe por defecto?",
        options: ["ArrayList", "LinkedList", "Vector", "Ninguna"],
        correctAnswer: "Vector",
      },
      {
        question: "¿Qué sucede cuando ArrayList alcanza su capacidad máxima?",
        options: [
          "Lanza una excepción",
          "Se redimensiona automáticamente",
          "Sobrescribe elementos existentes",
          "Se convierte en LinkedList",
        ],
        correctAnswer: "Se redimensiona automáticamente",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la complejidad temporal de acceso por índice en ArrayList?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        question: "¿Cuál es la complejidad temporal de inserción al inicio en LinkedList?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        question: "¿En qué factor se incrementa la capacidad de ArrayList cuando se redimensiona?",
        options: ["1.5x", "2x", "1.5x (aprox)", "Depende de la JVM"],
        correctAnswer: "1.5x (aprox)",
      },
      {
        question: "¿Cuál es la complejidad de eliminar un elemento en el medio de ArrayList?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: "O(n)",
      },
    ],
  },
  oop: {
    basico: [
      {
        question: "¿Cuáles son los pilares de la POO?",
        options: [
          "Encapsulación, Herencia, Polimorfismo",
          "Encapsulación, Herencia, Polimorfismo, Abstracción",
          "Clases, Objetos, Métodos",
          "Variables, Métodos, Constructores",
        ],
        correctAnswer: "Encapsulación, Herencia, Polimorfismo, Abstracción",
      },
      {
        question: "¿Qué palabra clave se usa para la herencia en Java?",
        options: ["inherits", "extends", "implements", "super"],
        correctAnswer: "extends",
      },
      {
        question: "¿Qué modificador de acceso es más restrictivo?",
        options: ["public", "protected", "private", "default"],
        correctAnswer: "private",
      },
      {
        question: "¿Cómo se crea un objeto de una clase?",
        options: ["new ClassName()", "create ClassName()", "ClassName.new()", "make ClassName()"],
        correctAnswer: "new ClassName()",
      },
    ],
    intermedio: [
      {
        question: "¿Qué es el polimorfismo?",
        options: [
          "Tener múltiples clases",
          "Un objeto puede tomar múltiples formas",
          "Usar múltiples métodos",
          "Crear múltiples objetos",
        ],
        correctAnswer: "Un objeto puede tomar múltiples formas",
      },
      {
        question: "¿Cuál es la diferencia entre sobrecarga y sobreescritura?",
        options: [
          "No hay diferencia",
          "Sobrecarga es mismo método diferentes parámetros, sobreescritura es redefinir método heredado",
          "Sobrecarga es en herencia, sobreescritura no",
          "Son sinónimos",
        ],
        correctAnswer: "Sobrecarga es mismo método diferentes parámetros, sobreescritura es redefinir método heredado",
      },
      {
        question: "¿Qué palabra clave se usa para llamar al constructor padre?",
        options: ["parent()", "super()", "base()", "this()"],
        correctAnswer: "super()",
      },
      {
        question: "¿Qué significa 'final' en una clase?",
        options: [
          "La clase no puede ser instanciada",
          "La clase no puede ser heredada",
          "La clase es abstracta",
          "La clase es privada",
        ],
        correctAnswer: "La clase no puede ser heredada",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la diferencia entre abstract class e interface?",
        options: [
          "No hay diferencia",
          "Abstract class puede tener métodos concretos, interface no",
          "Interface puede tener métodos concretos desde Java 8",
          "B y C son correctas",
        ],
        correctAnswer: "B y C son correctas",
      },
      {
        question: "¿Qué es la encapsulación?",
        options: [
          "Ocultar la implementación interna",
          "Crear múltiples objetos",
          "Heredar de otra clase",
          "Usar interfaces",
        ],
        correctAnswer: "Ocultar la implementación interna",
      },
      {
        question: "¿Cuántos constructores puede tener una clase?",
        options: ["Solo uno", "Máximo dos", "Ilimitados", "Depende del tipo"],
        correctAnswer: "Ilimitados",
      },
      {
        question: "¿Qué sucede si una clase no define constructor explícitamente?",
        options: [
          "Error de compilación",
          "Se crea constructor por defecto automáticamente",
          "La clase no se puede instanciar",
          "Se hereda el constructor de Object",
        ],
        correctAnswer: "Se crea constructor por defecto automáticamente",
      },
    ],
  },
  exceptions: {
    basico: [
      {
        question: "¿Qué palabra clave se usa para capturar una excepción?",
        options: ["catch", "handle", "except", "trap"],
        correctAnswer: "catch",
      },
      {
        question: "¿Qué bloque siempre se ejecuta?",
        options: ["try", "catch", "finally", "throw"],
        correctAnswer: "finally",
      },
      {
        question: "¿Qué palabra clave se usa para lanzar una excepción?",
        options: ["throw", "throws", "try", "catch"],
        correctAnswer: "throw",
      },
      {
        question: "¿Cuál es la estructura básica del manejo de excepciones?",
        options: ["try-catch", "try-catch-finally", "catch-finally", "Todas son válidas"],
        correctAnswer: "Todas son válidas",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es una excepción checked?",
        options: ["NullPointerException", "IOException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"],
        correctAnswer: "IOException",
      },
      {
        question: "¿Cuándo se usa 'throws' en un método?",
        options: [
          "Para lanzar una excepción",
          "Para declarar que el método puede lanzar excepciones",
          "Para capturar excepciones",
          "Para crear excepciones personalizadas",
        ],
        correctAnswer: "Para declarar que el método puede lanzar excepciones",
      },
      {
        question: "¿Cuál es la diferencia entre Error y Exception?",
        options: [
          "No hay diferencia",
          "Error es más grave y no debe ser capturado",
          "Exception es más grave",
          "Error no existe en Java",
        ],
        correctAnswer: "Error es más grave y no debe ser capturado",
      },
      {
        question: "¿Qué sucede si no se captura una excepción checked?",
        options: [
          "El programa continúa normalmente",
          "Error de compilación",
          "Se lanza RuntimeException",
          "Se ignora la excepción",
        ],
        correctAnswer: "Error de compilación",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la jerarquía correcta de excepciones?",
        options: [
          "Exception -> RuntimeException -> Throwable",
          "Throwable -> Exception -> RuntimeException",
          "RuntimeException -> Exception -> Throwable",
          "Exception -> Throwable -> RuntimeException",
        ],
        correctAnswer: "Throwable -> Exception -> RuntimeException",
      },
      {
        question: "¿Qué es try-with-resources y cuándo se introdujo?",
        options: [
          "Manejo automático de recursos en Java 7",
          "Manejo manual de recursos en Java 6",
          "Sintaxis alternativa de try-catch",
          "No existe en Java",
        ],
        correctAnswer: "Manejo automático de recursos en Java 7",
      },
      {
        question: "¿Qué interfaz deben implementar los recursos en try-with-resources?",
        options: ["Closeable", "AutoCloseable", "Disposable", "Resource"],
        correctAnswer: "AutoCloseable",
      },
      {
        question: "¿Qué sucede si tanto try como finally lanzan excepciones?",
        options: [
          "Se propaga la excepción de try",
          "Se propaga la excepción de finally",
          "Se propagan ambas",
          "Se crea una excepción compuesta",
        ],
        correctAnswer: "Se propaga la excepción de finally",
      },
    ],
  },
  streams: {
    basico: [
      {
        question: "¿Qué versión de Java introdujo Streams?",
        options: ["Java 7", "Java 8", "Java 9", "Java 11"],
        correctAnswer: "Java 8",
      },
      {
        question: "¿Cómo se crea un Stream a partir de una List?",
        options: ["list.stream()", "Stream.of(list)", "new Stream(list)", "list.toStream()"],
        correctAnswer: "list.stream()",
      },
      {
        question: "¿Qué hace el método filter() en Streams?",
        options: [
          "Transforma elementos",
          "Filtra elementos según un predicado",
          "Ordena elementos",
          "Cuenta elementos",
        ],
        correctAnswer: "Filtra elementos según un predicado",
      },
      {
        question: "¿Cuál es una operación terminal en Streams?",
        options: ["map()", "filter()", "collect()", "peek()"],
        correctAnswer: "collect()",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la sintaxis correcta de una expresión lambda?",
        options: ["(x) -> x * 2", "x => x * 2", "lambda x: x * 2", "function(x) { return x * 2; }"],
        correctAnswer: "(x) -> x * 2",
      },
      {
        question: "¿Qué método convierte un Stream a List?",
        options: ["toList()", "collect(Collectors.toList())", "asList()", "convertToList()"],
        correctAnswer: "collect(Collectors.toList())",
      },
      {
        question: "¿Cuál es una operación intermedia en Streams?",
        options: ["collect()", "forEach()", "map()", "reduce()"],
        correctAnswer: "map()",
      },
      {
        question: "¿Qué hace el método distinct() en Streams?",
        options: ["Ordena elementos", "Elimina elementos duplicados", "Cuenta elementos únicos", "Agrupa elementos"],
        correctAnswer: "Elimina elementos duplicados",
      },
    ],
    avanzado: [
      {
        question: "¿Qué hace el método reduce() en Streams?",
        options: [
          "Filtra elementos",
          "Transforma elementos",
          "Combina elementos en un solo resultado",
          "Ordena elementos",
        ],
        correctAnswer: "Combina elementos en un solo resultado",
      },
      {
        question: "¿Cuál es la diferencia entre map() y flatMap()?",
        options: [
          "No hay diferencia",
          "map() transforma 1:1, flatMap() aplana streams anidados",
          "flatMap() es más rápido",
          "map() solo funciona con números",
        ],
        correctAnswer: "map() transforma 1:1, flatMap() aplana streams anidados",
      },
      {
        question: "¿Qué es un Collector personalizado?",
        options: [
          "Una función lambda",
          "Una implementación de la interfaz Collector",
          "Un método de Stream",
          "No existe en Java",
        ],
        correctAnswer: "Una implementación de la interfaz Collector",
      },
      {
        question: "¿Cuál es la diferencia entre Stream.of() y Arrays.stream()?",
        options: [
          "No hay diferencia",
          "Stream.of() acepta varargs, Arrays.stream() acepta arrays",
          "Arrays.stream() es más rápido",
          "Stream.of() no existe",
        ],
        correctAnswer: "Stream.of() acepta varargs, Arrays.stream() acepta arrays",
      },
    ],
  },
  set: {
    basico: [
      {
        question: "¿Cuál es la característica principal de un Set?",
        options: [
          "Permite elementos duplicados",
          "No permite elementos duplicados",
          "Mantiene orden de inserción",
          "Es thread-safe",
        ],
        correctAnswer: "No permite elementos duplicados",
      },
      {
        question: "¿Qué método se usa para verificar si un elemento existe en un Set?",
        options: ["exists()", "contains()", "has()", "find()"],
        correctAnswer: "contains()",
      },
      {
        question: "¿Cómo se agrega un elemento a un Set?",
        options: ["insert()", "add()", "put()", "append()"],
        correctAnswer: "add()",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia entre HashSet y TreeSet?",
        options: [
          "HashSet mantiene orden, TreeSet no",
          "TreeSet mantiene orden natural, HashSet no",
          "HashSet permite duplicados, TreeSet no",
          "No hay diferencia",
        ],
        correctAnswer: "TreeSet mantiene orden natural, HashSet no",
      },
      {
        question: "¿Qué Set mantiene el orden de inserción?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "Ninguno"],
        correctAnswer: "LinkedHashSet",
      },
      {
        question: "¿Cuál permite elementos null?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "HashSet y LinkedHashSet"],
        correctAnswer: "HashSet y LinkedHashSet",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la complejidad temporal de búsqueda en HashSet?",
        options: ["O(1) promedio", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(1) promedio",
      },
      {
        question: "¿Cuál es la complejidad temporal de búsqueda en TreeSet?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(log n)",
      },
      {
        question: "¿Cuál es la estructura de datos subyacente de TreeSet?",
        options: ["Array", "Lista enlazada", "Tabla hash", "Árbol rojo-negro"],
        correctAnswer: "Árbol rojo-negro",
      },
    ],
  },
  map: {
    basico: [
      {
        question: "¿Cuál es la característica principal de un Map?",
        options: [
          "Almacena solo valores",
          "Almacena pares clave-valor",
          "Permite claves duplicadas",
          "Es una lista ordenada",
        ],
        correctAnswer: "Almacena pares clave-valor",
      },
      {
        question: "¿Qué método se usa para obtener un valor de un Map?",
        options: ["getValue()", "get()", "retrieve()", "find()"],
        correctAnswer: "get()",
      },
      {
        question: "¿Qué método se usa para agregar un par clave-valor?",
        options: ["add()", "put()", "insert()", "set()"],
        correctAnswer: "put()",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia entre HashMap y Hashtable?",
        options: [
          "HashMap es sincronizado, Hashtable no",
          "Hashtable es sincronizado, HashMap no",
          "HashMap permite claves duplicadas",
          "No hay diferencia",
        ],
        correctAnswer: "Hashtable es sincronizado, HashMap no",
      },
      {
        question: "¿Qué Map mantiene el orden de inserción?",
        options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
        correctAnswer: "LinkedHashMap",
      },
      {
        question: "¿Qué sucede si se inserta una clave que ya existe en un Map?",
        options: [
          "Se lanza una excepción",
          "Se ignora la operación",
          "Se reemplaza el valor anterior",
          "Se crea una entrada duplicada",
        ],
        correctAnswer: "Se reemplaza el valor anterior",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es la complejidad temporal de búsqueda en HashMap?",
        options: ["O(1) promedio", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(1) promedio",
      },
      {
        question: "¿Cuál es la complejidad temporal de búsqueda en TreeMap?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(log n)",
      },
      {
        question: "¿A partir de qué versión de Java, HashMap usa árboles para buckets con muchas colisiones?",
        options: ["Java 7", "Java 8", "Java 9", "Java 11"],
        correctAnswer: "Java 8",
      },
    ],
  },
  queue: {
    basico: [
      {
        question: "¿Cuál es el principio de funcionamiento de una Queue?",
        options: ["LIFO (Last In, First Out)", "FIFO (First In, First Out)", "Random access", "Priority based"],
        correctAnswer: "FIFO (First In, First Out)",
      },
      {
        question: "¿Qué método se usa para agregar un elemento a una Queue?",
        options: ["add() u offer()", "push()", "insert()", "put()"],
        correctAnswer: "add() u offer()",
      },
      {
        question: "¿Qué método se usa para remover un elemento de una Queue?",
        options: ["remove() o poll()", "pop()", "delete()", "take()"],
        correctAnswer: "remove() o poll()",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia entre poll() y remove() en Queue?",
        options: [
          "No hay diferencia",
          "poll() retorna null si está vacía, remove() lanza excepción",
          "remove() retorna null si está vacía, poll() lanza excepción",
          "poll() es más rápido",
        ],
        correctAnswer: "poll() retorna null si está vacía, remove() lanza excepción",
      },
      {
        question: "¿Cuál es la implementación más común de Queue?",
        options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Stack"],
        correctAnswer: "ArrayDeque",
      },
      {
        question: "¿Qué permite hacer un Deque que no permite una Queue normal?",
        options: [
          "Insertar al final",
          "Insertar y remover en ambos extremos",
          "Acceso aleatorio",
          "Ordenamiento automático",
        ],
        correctAnswer: "Insertar y remover en ambos extremos",
      },
    ],
    avanzado: [
      {
        question: "¿Qué característica especial tiene PriorityQueue?",
        options: [
          "Es thread-safe",
          "Mantiene elementos ordenados por prioridad",
          "Permite elementos duplicados",
          "Es más rápida que otras implementaciones",
        ],
        correctAnswer: "Mantiene elementos ordenados por prioridad",
      },
      {
        question: "¿Cuál es la complejidad temporal de inserción en PriorityQueue?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: "O(log n)",
      },
      {
        question: "¿Qué estructura de datos usa PriorityQueue internamente?",
        options: ["Array", "Lista enlazada", "Heap binario", "Árbol rojo-negro"],
        correctAnswer: "Heap binario",
      },
    ],
  },
  concurrency: {
    basico: [
      {
        question: "¿Cómo se crea un Thread en Java?",
        options: ["Extendiendo Thread", "Implementando Runnable", "Ambas formas son válidas", "Usando ExecutorService"],
        correctAnswer: "Ambas formas son válidas",
      },
      {
        question: "¿Qué método se llama para iniciar un Thread?",
        options: ["run()", "start()", "execute()", "begin()"],
        correctAnswer: "start()",
      },
      {
        question: "¿Qué palabra clave se usa para sincronización?",
        options: ["sync", "synchronized", "lock", "atomic"],
        correctAnswer: "synchronized",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia entre wait() y sleep()?",
        options: [
          "No hay diferencia",
          "wait() libera el lock, sleep() no",
          "sleep() libera el lock, wait() no",
          "Ambos liberan el lock",
        ],
        correctAnswer: "wait() libera el lock, sleep() no",
      },
      {
        question: "¿Qué interfaz se usa para tareas que devuelven un resultado?",
        options: ["Runnable", "Callable", "Future", "Task"],
        correctAnswer: "Callable",
      },
      {
        question: "¿Qué es volatile en Java?",
        options: [
          "Una variable que puede cambiar",
          "Una variable visible para todos los threads",
          "Una variable inmutable",
          "Una variable local",
        ],
        correctAnswer: "Una variable visible para todos los threads",
      },
    ],
    avanzado: [
      {
        question: "¿Qué es un deadlock?",
        options: [
          "Un thread que nunca termina",
          "Dos o más threads bloqueados esperándose mutuamente",
          "Un thread que consume mucha CPU",
          "Un error de compilación",
        ],
        correctAnswer: "Dos o más threads bloqueados esperándose mutuamente",
      },
      {
        question: "¿Qué es el patrón Producer-Consumer?",
        options: [
          "Un patrón de diseño para herencia",
          "Un patrón para comunicación entre threads",
          "Un patrón para manejo de excepciones",
          "No existe en Java",
        ],
        correctAnswer: "Un patrón para comunicación entre threads",
      },
      {
        question: "¿Cuál es la diferencia entre CountDownLatch y CyclicBarrier?",
        options: [
          "No hay diferencia",
          "CountDownLatch es de un solo uso, CyclicBarrier es reutilizable",
          "CyclicBarrier es más rápido",
          "CountDownLatch no existe",
        ],
        correctAnswer: "CountDownLatch es de un solo uso, CyclicBarrier es reutilizable",
      },
    ],
  },
  generics: {
    basico: [
      {
        question: "¿Cuál es la sintaxis correcta para declarar una clase genérica?",
        options: ["class MyClass<T>", "class MyClass[T]", "class MyClass(T)", "generic class MyClass<T>"],
        correctAnswer: "class MyClass<T>",
      },
      {
        question: "¿Cómo se declara una List de Strings?",
        options: ["List<String>", "List[String]", "List(String)", "String List"],
        correctAnswer: "List<String>",
      },
      {
        question: "¿Se pueden usar tipos primitivos como parámetros genéricos?",
        options: [
          "Sí, siempre",
          "No, se deben usar wrapper classes",
          "Solo int y boolean",
          "Depende de la versión de Java",
        ],
        correctAnswer: "No, se deben usar wrapper classes",
      },
    ],
    intermedio: [
      {
        question: "¿Qué significa el wildcard '?' en generics?",
        options: ["Cualquier tipo", "Tipo desconocido", "Tipo nulo", "Error de sintaxis"],
        correctAnswer: "Tipo desconocido",
      },
      {
        question: "¿Cuál es la diferencia entre <? extends T> y <? super T>?",
        options: [
          "No hay diferencia",
          "extends es para lectura, super para escritura",
          "super es para lectura, extends para escritura",
          "Ambos son iguales",
        ],
        correctAnswer: "extends es para lectura, super para escritura",
      },
      {
        question: "¿Qué es type erasure en Java?",
        options: [
          "Eliminar tipos en tiempo de compilación",
          "Eliminar información de tipos genéricos en tiempo de ejecución",
          "Un error de compilación",
          "Una característica de Java 8",
        ],
        correctAnswer: "Eliminar información de tipos genéricos en tiempo de ejecución",
      },
    ],
    avanzado: [
      {
        question: "¿Qué es un bounded type parameter?",
        options: [
          "Un tipo sin restricciones",
          "Un tipo con restricciones usando extends o super",
          "Un tipo primitivo",
          "No existe en Java",
        ],
        correctAnswer: "Un tipo con restricciones usando extends o super",
      },
      {
        question: "¿Por qué no se pueden crear arrays de tipos genéricos?",
        options: [
          "Por type erasure y problemas de seguridad de tipos",
          "Es una limitación arbitraria",
          "Sí se pueden crear",
          "Solo en versiones antiguas de Java",
        ],
        correctAnswer: "Por type erasure y problemas de seguridad de tipos",
      },
      {
        question: "¿Qué es PECS (Producer Extends Consumer Super)?",
        options: [
          "Un patrón de diseño",
          "Una regla para usar wildcards en generics",
          "Un tipo de excepción",
          "No existe en Java",
        ],
        correctAnswer: "Una regla para usar wildcards en generics",
      },
    ],
  },
  constructors: {
    basico: [
      {
        question: "¿Cuál es el propósito principal de un constructor?",
        options: ["Destruir objetos", "Inicializar objetos", "Copiar objetos", "Comparar objetos"],
        correctAnswer: "Inicializar objetos",
      },
      {
        question: "¿Cómo se llama un constructor?",
        options: [
          "Tiene el mismo nombre que la clase",
          "Se llama 'constructor'",
          "Se llama 'init'",
          "Puede tener cualquier nombre",
        ],
        correctAnswer: "Tiene el mismo nombre que la clase",
      },
      {
        question: "¿Puede un constructor tener tipo de retorno?",
        options: ["Sí, siempre", "No, nunca", "Solo void", "Solo Object"],
        correctAnswer: "No, nunca",
      },
    ],
    intermedio: [
      {
        question: "¿Cuándo se llama automáticamente al constructor por defecto?",
        options: [
          "Siempre que se crea una clase",
          "Solo cuando no se define ningún constructor explícito",
          "Cuando se usa la palabra clave 'default'",
          "Nunca se llama automáticamente",
        ],
        correctAnswer: "Solo cuando no se define ningún constructor explícito",
      },
      {
        question: "¿Qué hace la llamada 'this()' en un constructor?",
        options: [
          "Llama al constructor de la clase padre",
          "Llama a otro constructor de la misma clase",
          "Inicializa las variables de instancia",
          "Crea una nueva instancia",
        ],
        correctAnswer: "Llama a otro constructor de la misma clase",
      },
      {
        question: "¿Cuántos constructores puede tener una clase?",
        options: ["Solo uno", "Máximo dos", "Ilimitados (sobrecarga)", "Depende del número de variables"],
        correctAnswer: "Ilimitados (sobrecarga)",
      },
    ],
    avanzado: [
      {
        question: "¿Cuál es el propósito principal de un constructor privado?",
        options: [
          "Evitar que se cree la clase",
          "Implementar el patrón Singleton",
          "Mejorar el rendimiento",
          "Ocultar variables de instancia",
        ],
        correctAnswer: "Implementar el patrón Singleton",
      },
      {
        question: "¿Cuál es el orden correcto de inicialización en Java?",
        options: [
          "Variables de instancia, constructor, bloques de inicialización",
          "Constructor, variables de instancia, bloques de inicialización",
          "Bloques de inicialización, variables de instancia, constructor",
          "Variables de instancia, bloques de inicialización, constructor",
        ],
        correctAnswer: "Variables de instancia, bloques de inicialización, constructor",
      },
      {
        question: "¿Qué sucede si no se llama explícitamente a super() en un constructor?",
        options: [
          "Se produce un error de compilación",
          "Se llama automáticamente a super()",
          "No se inicializa la clase padre",
          "Se usa el constructor por defecto del hijo",
        ],
        correctAnswer: "Se llama automáticamente a super()",
      },
    ],
  },
  datatypes: {
    basico: [
      {
        question: "¿Cuántos tipos primitivos existen en Java?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
      },
      {
        question: "¿Cuál es el valor por defecto de una variable boolean?",
        options: ["true", "false", "null", "0"],
        correctAnswer: "false",
      },
      {
        question: "¿Cuál es el valor por defecto de una variable int?",
        options: ["null", "0", "1", "-1"],
        correctAnswer: "0",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es el rango de valores para el tipo 'byte'?",
        options: ["0 a 255", "-128 a 127", "-32768 a 32767", "-2147483648 a 2147483647"],
        correctAnswer: "-128 a 127",
      },
      {
        question: "¿Cuál es la diferencia principal entre int e Integer?",
        options: [
          "No hay diferencia",
          "int es primitivo, Integer es objeto",
          "Integer es más rápido",
          "int permite valores null",
        ],
        correctAnswer: "int es primitivo, Integer es objeto",
      },
      {
        question: "¿Qué wrapper class corresponde al tipo primitivo 'char'?",
        options: ["Char", "Character", "CharWrapper", "String"],
        correctAnswer: "Character",
      },
    ],
    avanzado: [
      {
        question: "¿Qué es el autoboxing en Java?",
        options: [
          "Conversión automática de primitivos a wrapper classes",
          "Conversión automática de wrapper classes a primitivos",
          "Creación automática de arrays",
          "Inicialización automática de variables",
        ],
        correctAnswer: "Conversión automática de primitivos a wrapper classes",
      },
      {
        question: "¿Cuál es el tamaño en bits del tipo 'double'?",
        options: ["32 bits", "64 bits", "128 bits", "Depende de la JVM"],
        correctAnswer: "64 bits",
      },
      {
        question: "¿Qué sucede en esta línea: Integer i = 100;?",
        options: [
          "Error de compilación",
          "Autoboxing del int 100 a Integer",
          "Casting explícito",
          "Creación de un nuevo objeto Integer",
        ],
        correctAnswer: "Autoboxing del int 100 a Integer",
      },
    ],
  },
  jdbc: {
    basico: [
      {
        question: "¿Qué significa JDBC?",
        options: [
          "Java Database Connection",
          "Java Database Connectivity",
          "Java Data Base Controller",
          "Java Database Component",
        ],
        correctAnswer: "Java Database Connectivity",
      },
      {
        question: "¿Cuál es el primer paso para conectarse a una base de datos?",
        options: ["Crear un Statement", "Cargar el driver JDBC", "Ejecutar una consulta", "Crear un ResultSet"],
        correctAnswer: "Cargar el driver JDBC",
      },
      {
        question: "¿Qué interfaz representa una conexión a la base de datos?",
        options: ["Statement", "ResultSet", "Connection", "DriverManager"],
        correctAnswer: "Connection",
      },
    ],
    intermedio: [
      {
        question: "¿Cuál es la diferencia entre Statement y PreparedStatement?",
        options: [
          "No hay diferencia",
          "PreparedStatement es precompilado y previene SQL injection",
          "Statement es más rápido",
          "PreparedStatement solo funciona con MySQL",
        ],
        correctAnswer: "PreparedStatement es precompilado y previene SQL injection",
      },
      {
        question: "¿Qué método se usa para ejecutar una consulta SELECT?",
        options: ["execute()", "executeUpdate()", "executeQuery()", "select()"],
        correctAnswer: "executeQuery()",
      },
      {
        question: "¿Cómo se navega por los resultados de un ResultSet?",
        options: ["Con un bucle for", "Con el método next()", "Con el método get()", "Automáticamente"],
        correctAnswer: "Con el método next()",
      },
    ],
    avanzado: [
      {
        question: "¿Qué método se usa para ejecutar INSERT, UPDATE o DELETE?",
        options: ["execute()", "executeUpdate()", "executeQuery()", "update()"],
        correctAnswer: "executeUpdate()",
      },
      {
        question: "¿Cuál es la ventaja principal de usar Connection Pooling?",
        options: [
          "Mejor seguridad",
          "Mejor rendimiento al reutilizar conexiones",
          "Menos código",
          "Compatibilidad con más bases de datos",
        ],
        correctAnswer: "Mejor rendimiento al reutilizar conexiones",
      },
      {
        question: "¿Qué método se usa para confirmar una transacción?",
        options: ["save()", "commit()", "confirm()", "apply()"],
        correctAnswer: "commit()",
      },
    ],
  },
  junit: {
    basico: [
      {
        question: "¿Qué anotación se usa para marcar un método como test en JUnit 5?",
        options: ["@Test", "@TestMethod", "@UnitTest", "@TestCase"],
        correctAnswer: "@Test",
      },
      {
        question: "¿Qué método se usa para verificar que dos valores son iguales?",
        options: ["assertEquals()", "assertSame()", "assertEqual()", "checkEquals()"],
        correctAnswer: "assertEquals()",
      },
      {
        question: "¿Qué método se usa para verificar que una condición es verdadera?",
        options: ["assertTrue()", "assertValid()", "checkTrue()", "verifyTrue()"],
        correctAnswer: "assertTrue()",
      },
    ],
    intermedio: [
      {
        question: "¿Qué anotación se ejecuta antes de cada test?",
        options: ["@Before", "@BeforeEach", "@Setup", "@Init"],
        correctAnswer: "@BeforeEach",
      },
      {
        question: "¿Cuál es la diferencia entre @BeforeEach y @BeforeAll?",
        options: [
          "No hay diferencia",
          "@BeforeEach se ejecuta antes de cada test, @BeforeAll una vez antes de todos",
          "@BeforeAll se ejecuta antes de cada test",
          "@BeforeEach es para JUnit 4",
        ],
        correctAnswer: "@BeforeEach se ejecuta antes de cada test, @BeforeAll una vez antes de todos",
      },
      {
        question: "¿Qué anotación se usa para ignorar un test temporalmente?",
        options: ["@Ignore", "@Disabled", "@Skip", "@Exclude"],
        correctAnswer: "@Disabled",
      },
    ],
    avanzado: [
      {
        question: "¿Cómo se verifica que un método lanza una excepción específica?",
        options: ["Con try-catch", "Con @Expected", "Con assertThrows()", "Con @Exception"],
        correctAnswer: "Con assertThrows()",
      },
      {
        question: "¿Cuál es la diferencia entre assertEquals() y assertSame()?",
        options: [
          "No hay diferencia",
          "assertEquals() compara valores, assertSame() compara referencias",
          "assertSame() compara valores, assertEquals() compara referencias",
          "assertSame() es más rápido",
        ],
        correctAnswer: "assertEquals() compara valores, assertSame() compara referencias",
      },
      {
        question: "¿Qué anotación permite ejecutar tests con diferentes parámetros?",
        options: ["@Parameters", "@ParameterizedTest", "@DataProvider", "@TestData"],
        correctAnswer: "@ParameterizedTest",
      },
    ],
  },
}

// Function to get question count for a specific category and difficulty
export function getQuestionCount(category: string, difficulty?: string): number {
  if (!difficulty) {
    // Return total count for category across all difficulties
    const categoryQuestions = mockQuestions[category]
    if (!categoryQuestions) return 0

    return Object.values(categoryQuestions).reduce((total, questions) => total + questions.length, 0)
  }

  return mockQuestions[category]?.[difficulty]?.length || 0
}

// Function to get question counts for all categories
export function getAllQuestionCounts(): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const category in mockQuestions) {
    counts[category] = getQuestionCount(category)
  }
  return counts
}

// Function to get total number of questions across all categories
export function getTotalQuestionCount(): number {
  return Object.values(mockQuestions).reduce((total, categoryQuestions) => {
    return total + Object.values(categoryQuestions).reduce((catTotal, questions) => catTotal + questions.length, 0)
  }, 0)
}

// Function to generate questions using AI with difficulty filtering
export async function generateQuestions(category: string, difficulty: string, count: number): Promise<Question[]> {
  try {
    console.log(`Generating questions for category: ${category}, difficulty: ${difficulty}, count: ${count}`)

    const categoryQuestions = mockQuestions[category]
    if (!categoryQuestions) {
      console.warn(`Category ${category} not found, falling back to strings`)
      return generateQuestions("strings", difficulty, count)
    }

    let selectedQuestions: Question[] = []

    if (difficulty === "adaptativo") {
      // For adaptive difficulty, mix questions from all levels
      const allDifficulties = ["basico", "intermedio", "avanzado"]
      const questionsPerDifficulty = Math.ceil(count / 3)

      for (const diff of allDifficulties) {
        const diffQuestions = categoryQuestions[diff] || []
        const shuffled = shuffleArray(diffQuestions)
        selectedQuestions.push(...shuffled.slice(0, questionsPerDifficulty))
      }

      // Shuffle the final mix and take only the requested count
      selectedQuestions = shuffleArray(selectedQuestions).slice(0, count)
    } else {
      // For specific difficulty levels
      const difficultyQuestions = categoryQuestions[difficulty]
      if (!difficultyQuestions || difficultyQuestions.length === 0) {
        console.warn(`No questions found for ${category} - ${difficulty}, falling back to basic`)
        const basicQuestions = categoryQuestions["basico"] || []
        selectedQuestions = shuffleArray(basicQuestions).slice(0, count)
      } else {
        selectedQuestions = shuffleArray(difficultyQuestions).slice(0, count)
      }
    }

    // If we don't have enough questions, repeat some
    while (selectedQuestions.length < count && selectedQuestions.length > 0) {
      const remaining = count - selectedQuestions.length
      const toAdd = shuffleArray(selectedQuestions).slice(0, remaining)
      selectedQuestions.push(...toAdd)
    }

    console.log(`Generated ${selectedQuestions.length} questions for ${category} - ${difficulty}`)
    return selectedQuestions.slice(0, count)

    // Example of how to use the AI SDK to generate questions:
    /*
    const difficultyPrompts = {
      basico: "conceptos básicos y sintaxis fundamental",
      intermedio: "conceptos intermedios y aplicación práctica", 
      avanzado: "conceptos avanzados y casos complejos",
      adaptativo: "mezcla de diferentes niveles de dificultad"
    }
    
    const prompt = `Genera ${count} preguntas de opción múltiple sobre ${category} en Java con dificultad ${difficultyPrompts[difficulty]}. 
    Cada pregunta debe tener 4 opciones con solo una respuesta correcta. 
    Formatea la respuesta como un array JSON de objetos, cada uno con 'question', 'options' (array de 4 strings), y 'correctAnswer' (string que coincida con una de las opciones).`;
    
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    });
    
    return JSON.parse(text) as Question[];
    */
  } catch (error) {
    console.error("Error generating questions:", error)
    // Fallback to basic questions from strings category
    const fallbackQuestions = mockQuestions.strings?.basico || []
    return shuffleArray(fallbackQuestions).slice(0, count)
  }
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Function to get available difficulties for a category
export function getAvailableDifficulties(category: string): string[] {
  const categoryQuestions = mockQuestions[category]
  if (!categoryQuestions) return []

  return Object.keys(categoryQuestions).filter(
    (difficulty) => categoryQuestions[difficulty] && categoryQuestions[difficulty].length > 0,
  )
}

// Function to get difficulty statistics
export function getDifficultyStats(category: string): Record<string, number> {
  const categoryQuestions = mockQuestions[category]
  if (!categoryQuestions) return {}

  const stats: Record<string, number> = {}
  for (const [difficulty, questions] of Object.entries(categoryQuestions)) {
    stats[difficulty] = questions.length
  }
  return stats
}
