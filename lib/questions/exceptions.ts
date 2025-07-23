import type { Question } from "../types"

export const exceptionsQuestions: Record<string, Question[]> = {
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
}
