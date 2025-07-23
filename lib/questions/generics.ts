import type { Question } from "../types"

export const genericsQuestions: Record<string, Question[]> = {
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
}
