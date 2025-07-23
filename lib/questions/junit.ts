import type { Question } from "../types"

export const junitQuestions: Record<string, Question[]> = {
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
}
