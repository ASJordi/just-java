# ☕ Just Java

> Una aplicación moderna de quiz interactivo para aprender y practicar conceptos de Java

## ✨ Descripción

**Just Java** es una plataforma educativa interactiva diseñada para ayudar a desarrolladores a dominar los conceptos fundamentales de Java a través de quizzes dinámicos y personalizables. Con una interfaz moderna y minimalista, ofrece una experiencia de aprendizaje fluida y atractiva.

## 🚀 Características

- 📚 **Múltiples categorías**: Strings, Arrays, Collections, POO, Excepciones, Git y más
- 🎯 **Niveles de dificultad**: Básico, Intermedio y Avanzado
- ⏱️ **Sistema de tiempo**: Quizzes cronometrados con límites personalizables
- 🏆 **Sistema de puntuación**: Seguimiento del progreso y resultados
- 🌙 **Modo oscuro**: Interfaz adaptable con tema claro/oscuro
- 📱 **Responsive**: Optimizado para dispositivos móviles y desktop
- ⚡ **Rendimiento**: Construido con Next.js 15 y Turbopack

## 🛠️ Tecnologías

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework de React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de interfaz de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario

### UI/UX
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles headless
- **[Shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes reutilizables
- **[Lucide React](https://lucide.dev/)** - Iconografía moderna
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Soporte para temas

### Herramientas
- **[React Hook Form](https://react-hook-form.com/)** - Gestión de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas
- **[date-fns](https://date-fns.org/)** - Manipulación de fechas
- **[Recharts](https://recharts.org/)** - Gráficos y visualizaciones

## 🎯 Categorías de Quiz

| Categoría | Descripción | Temas Incluidos |
|-----------|-------------|-----------------|
| **Strings** | Manipulación de cadenas | `String`, `StringBuilder`, métodos de cadena |
| **Arrays** | Estructuras de datos | Declaración, recorrido, algoritmos |
| **Collections** | Colecciones Java | `ArrayList`, `LinkedList`, `Vector` |
| **POO** | Programación Orientada a Objetos | Clases, herencia, polimorfismo |
| **Excepciones** | Manejo de errores | `try-catch`, excepciones personalizadas |
| **Git** | Control de versiones | Comandos básicos, workflows |

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- pnpm (recomendado) o npm

### Configuración

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ASJordi/just-java.git
   cd just-java
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecuta en modo desarrollo**
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🔧 Scripts Disponibles

```bash
# Desarrollo con Turbopack
pnpm dev

# Construcción para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint
```

## 🌟 Uso

1. **Selecciona una categoría** de conocimiento Java
2. **Elige el nivel de dificultad** (Básico, Intermedio, Avanzado)
3. **Configura el quiz** (número de preguntas, tiempo límite)
4. **Responde las preguntas** y obtén retroalimentación inmediata
5. **Revisa tus resultados** y mejora tu puntuación

## 📁 Estructura del Proyecto

```
just-java/
├── app/                    # App Router (Next.js 15)
│   ├── quiz/              # Páginas del quiz
│   ├── categories/        # Categorías disponibles
│   └── about/            # Información adicional
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de Shadcn/ui
│   ├── header.tsx        # Navegación principal
│   └── footer.tsx        # Pie de página
├── lib/                  # Utilidades y lógica
│   ├── quiz-generator.ts # Generador de preguntas
│   ├── types.ts         # Tipos TypeScript
│   └── utils.ts         # Funciones utilitarias
└── styles/              # Estilos globales
```

## 🎨 Diseño

- **Interfaz minimalista** con enfoque en la experiencia del usuario
- **Paleta de colores moderna** con soporte para modo oscuro
- **Componentes accesibles** siguiendo las mejores prácticas
- **Animaciones suaves** para transiciones fluidas
- **Tipografía clara** optimizada para legibilidad

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Jordi Ayala**
- Website: [asjordi.dev](https://asjordi.dev)
- Email: dev@asjordi.dev
- GitHub: [@ASJordi](https://github.com/ASJordi)

---

<div align="center">
  <p>Hecho con ❤️ para la comunidad de desarrolladores Java</p>
  <p><a href="https://quiz.asjordi.dev">🌐 Ver Demo en Vivo</a></p>
</div>
