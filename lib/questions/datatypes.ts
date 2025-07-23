import type { Question } from "../types"

export const datatypesQuestions: Record<string, Question[]> = {
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
}
