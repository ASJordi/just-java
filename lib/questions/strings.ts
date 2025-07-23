import type { Question } from "../types"

export const stringsQuestions: Record<string, Question[]> = {
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
}
