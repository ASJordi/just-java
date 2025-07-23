import type { Question } from "../types"

export const arraysQuestions: Record<string, Question[]> = {
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
}
