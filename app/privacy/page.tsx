import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Shield, Eye, Lock, Database } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Coffee className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">JustJava</h1>
              </div>
            </Link>
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/categories" className="font-medium hover:text-primary">
              Categorías
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-12 w-12 text-primary" />
                <h1 className="text-4xl font-bold">Política de Privacidad</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                JustJava respeta completamente tu privacidad. No recopilamos, almacenamos ni rastreamos ningún tipo de
                información personal. Aquí te explicamos exactamente cómo funciona.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    Información que NO Recopilamos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">🛡️ Privacidad Total</h3>
                    <p className="text-green-700 dark:text-green-300">
                      JustJava NO recopila, almacena ni rastrea ningún tipo de información personal o de uso.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">No Recopilamos:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Información personal (nombre, email, teléfono)</li>
                      <li>Datos de navegación o comportamiento</li>
                      <li>Direcciones IP o ubicación geográfica</li>
                      <li>Cookies de seguimiento o analytics</li>
                      <li>Puntuaciones o progreso del usuario</li>
                      <li>Preferencias o configuraciones personales</li>
                      <li>Información del dispositivo o navegador</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Almacenamiento Local Únicamente</h3>
                    <p className="text-muted-foreground">
                      La única información que se almacena es la mínima necesaria para el funcionamiento básico de la
                      aplicación, y se guarda exclusivamente en tu navegador local (localStorage) para:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>Recordar tus preferencias de tema (modo claro/oscuro)</li>
                      <li>Mantener el estado temporal durante un quiz activo</li>
                      <li>Configuraciones básicas de la interfaz</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      Esta información nunca sale de tu dispositivo y puedes eliminarla en cualquier momento limpiando
                      los datos del navegador.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-primary" />
                    Cómo Funciona JustJava
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Aplicación 100% Local</h3>
                    <p className="text-muted-foreground">
                      JustJava es una aplicación web que funciona completamente en tu navegador. Todas las preguntas,
                      respuestas y lógica del quiz se ejecutan localmente sin enviar datos a servidores externos.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sin Servidores de Datos</h3>
                    <p className="text-muted-foreground">
                      No tenemos bases de datos que almacenen tu información. No hay cuentas de usuario, no hay
                      perfiles, no hay historial de actividad almacenado en nuestros servidores.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Generación de Preguntas</h3>
                    <p className="text-muted-foreground">
                      Las preguntas del quiz se generan a partir de un banco de preguntas predefinido que está incluido
                      en el código de la aplicación. No se realizan llamadas a APIs externas para generar contenido
                      personalizado basado en tu comportamiento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-6 w-6 text-primary" />
                    Sin Cookies de Seguimiento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cookies Esenciales Únicamente</h3>
                    <p className="text-muted-foreground">
                      JustJava utiliza únicamente las cookies técnicas mínimas necesarias para el funcionamiento básico
                      de la aplicación web:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>
                        <strong>Cookies de sesión:</strong> Para mantener el estado de la aplicación durante tu visita
                      </li>
                      <li>
                        <strong>Cookies de preferencias:</strong> Para recordar tu tema preferido (claro/oscuro)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🚫 Sin Analytics</h3>
                    <p className="text-blue-700 dark:text-blue-300">
                      No utilizamos Google Analytics, Facebook Pixel, ni ninguna otra herramienta de seguimiento o
                      análisis de comportamiento.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Control Total</h3>
                    <p className="text-muted-foreground">
                      Puedes deshabilitar todas las cookies desde la configuración de tu navegador sin afectar la
                      funcionalidad principal de JustJava.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tus Derechos y Control</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Control Completo de tus Datos</h3>
                    <p className="text-muted-foreground">
                      Dado que no recopilamos ni almacenamos información personal:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-2">
                      <li>No hay datos personales que solicitar o eliminar</li>
                      <li>No hay perfiles de usuario que gestionar</li>
                      <li>No hay información que corregir o actualizar</li>
                      <li>No hay datos que exportar o transferir</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Limpieza de Datos Locales</h3>
                    <p className="text-muted-foreground">
                      Si deseas eliminar cualquier dato almacenado localmente en tu navegador:
                    </p>
                    <ol className="list-decimal list-inside mt-2 text-muted-foreground space-y-1">
                      <li>Ve a la configuración de tu navegador</li>
                      <li>Busca "Privacidad" o "Datos del sitio"</li>
                      <li>Elimina los datos de JustJava o limpia todo el almacenamiento local</li>
                    </ol>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">💡 Consejo</h3>
                    <p className="text-amber-700 dark:text-amber-300">
                      Puedes usar JustJava en modo incógnito/privado de tu navegador para una experiencia completamente
                      sin rastros.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transparencia Total</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Código Abierto</h3>
                    <p className="text-muted-foreground">
                      JustJava es una aplicación transparente. Puedes verificar exactamente qué hace la aplicación
                      inspeccionando el código fuente en las herramientas de desarrollador de tu navegador.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sin Conexiones Externas</h3>
                    <p className="text-muted-foreground">
                      Puedes verificar en las herramientas de red de tu navegador que JustJava no realiza llamadas a
                      servicios externos de analytics, tracking o almacenamiento de datos.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Compromiso con la Privacidad</h3>
                    <p className="text-muted-foreground">
                      Nuestro compromiso es mantener JustJava como una herramienta de aprendizaje que respeta
                      completamente tu privacidad. Si esto cambia en el futuro, se notificará claramente en esta página.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cambios a esta Política</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Esta política de privacidad refleja el estado actual de JustJava como una aplicación que no recopila
                    datos. Si en el futuro decidimos implementar algún tipo de recopilación de datos (siempre opcional y
                    transparente), actualizaremos esta política y notificaremos los cambios de manera prominente.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong>Versión:</strong> 1.0 - Sin recopilación de datos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Si tienes preguntas sobre esta política de privacidad o quieres verificar cualquier aspecto sobre el
                    manejo de datos en JustJava, no dudes en contactarnos:
                  </p>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium">Email:</p>
                    <a href="mailto:dev@asjordi.dev" className="text-primary hover:underline">
                      dev@asjordi.dev
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Responderemos cualquier consulta sobre privacidad en un plazo máximo de 48 horas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">JustJava</span>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                Acerca de
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacidad
              </Link>
              <a href="mailto:dev@asjordi.dev" className="text-muted-foreground hover:text-primary">
                Contacto
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} JustJava. Desarrollado con ☕ por{" "}
            <a
              href="https://asjordi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              ASJordi
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
