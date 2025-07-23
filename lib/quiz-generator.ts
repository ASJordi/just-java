import type { Question } from "./types"
import { allQuestions } from "./questions"
import {
  shuffleArray,
  getQuestionCountForCategory,
  getAvailableDifficultiesForCategory,
  getDifficultyStatsForCategory,
  selectQuestions,
  validateCategoryAndDifficulty,
} from "./quiz-utils"

/**
 * Obtiene el número de preguntas para una categoría específica
 * @param category - Categoría de preguntas
 * @param difficulty - Dificultad específica (opcional)
 * @returns Número de preguntas disponibles
 */
export function getQuestionCount(category: string, difficulty?: string): number {
  const categoryQuestions = allQuestions[category]
  if (!categoryQuestions) return 0

  return getQuestionCountForCategory(categoryQuestions, difficulty)
}

/**
 * Obtiene el conteo de preguntas para todas las categorías
 * @returns Objeto con el conteo de preguntas por categoría
 */
export function getAllQuestionCounts(): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const category in allQuestions) {
    counts[category] = getQuestionCount(category)
  }
  return counts
}

/**
 * Obtiene el número total de preguntas en todas las categorías
 * @returns Número total de preguntas
 */
export function getTotalQuestionCount(): number {
  return Object.values(allQuestions).reduce((total, categoryQuestions) => {
    return total + Object.values(categoryQuestions).reduce((catTotal, questions) => catTotal + questions.length, 0)
  }, 0)
}

/**
 * Genera preguntas para un quiz basado en los parámetros especificados
 * @param category - Categoría de preguntas
 * @param difficulty - Dificultad del quiz
 * @param count - Número de preguntas solicitadas
 * @returns Promise con array de preguntas generadas
 */
export async function generateQuestions(category: string, difficulty: string, count: number): Promise<Question[]> {
  try {
    console.log(`Generando preguntas para categoría: ${category}, dificultad: ${difficulty}, cantidad: ${count}`)

    const categoryQuestions = allQuestions[category]
    if (!categoryQuestions) {
      console.warn(`Categoría ${category} no encontrada, usando strings como respaldo`)
      return generateQuestions("strings", difficulty, count)
    }

    // Validar que la categoría y dificultad tengan preguntas disponibles
    if (!validateCategoryAndDifficulty(categoryQuestions, difficulty)) {
      console.warn(`No hay preguntas disponibles para ${category} - ${difficulty}, usando básico como respaldo`)
      return selectQuestions(categoryQuestions, "basico", count)
    }

    // Seleccionar preguntas usando las utilidades
    const selectedQuestions = selectQuestions(categoryQuestions, difficulty, count)

    console.log(`Generadas ${selectedQuestions.length} preguntas para ${category} - ${difficulty}`)
    return selectedQuestions

    // Ejemplo de cómo usar el AI SDK para generar preguntas en el futuro:
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
    console.error("Error generando preguntas:", error)
    // Respaldo a preguntas básicas de strings
    const fallbackQuestions = allQuestions.strings?.basico || []
    return shuffleArray(fallbackQuestions).slice(0, count)
  }
}

/**
 * Obtiene las dificultades disponibles para una categoría
 * @param category - Categoría de preguntas
 * @returns Array de dificultades disponibles
 */
export function getAvailableDifficulties(category: string): string[] {
  const categoryQuestions = allQuestions[category]
  if (!categoryQuestions) return []

  return getAvailableDifficultiesForCategory(categoryQuestions)
}

/**
 * Obtiene estadísticas de dificultad para una categoría
 * @param category - Categoría de preguntas
 * @returns Objeto con estadísticas por dificultad
 */
export function getDifficultyStats(category: string): Record<string, number> {
  const categoryQuestions = allQuestions[category]
  if (!categoryQuestions) return {}

  return getDifficultyStatsForCategory(categoryQuestions)
}
