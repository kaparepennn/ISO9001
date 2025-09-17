TinCar - Sistema de Gestión de Calidad (SGC) ISO 9001

Descripción
TinCar es una aplicación web diseñada para facilitar la implementación y gestión del Sistema de Gestión de Calidad conforme a la norma ISO 9001, orientada específicamente a proyectos de software. La herramienta permite administrar indicadores, documentos, empresas, usuarios, capacitaciones y auditorías de manera sencilla y eficiente, con un enfoque en el control y mejora continua.

Características principales
Dashboard: Visualización clara y en tiempo real de indicadores clave, incluyendo:

Porcentaje de proyectos entregados a tiempo.
Porcentaje de incidencias resueltas dentro del plazo.
Nivel de satisfacción del cliente con gráficas de tendencia.
Número de no conformidades abiertas.
Estado de tareas de desarrollo y pruebas.
Gestión de Documentos: Acceso y organización de documentos esenciales para el SGC, tales como:

Manual de Calidad.
Políticas y Objetivos de Calidad.
Procedimientos (gestión de cambios, control de versiones, pruebas, manejo de no conformidades, etc.).
Registro de documentos y controles asociados.
Registro y Gestión de Empresas: Permite registrar empresas con datos detallados (razón social, número de empresa, NIT, email, representante legal, página web, sector económico, tipo de empresa, dirección y redes sociales), además de editar y eliminar registros.

Gestión de Usuarios y Roles: Registro completo y administración de usuarios con roles específicos para controlar accesos y responsabilidades dentro del sistema.

Capacitación: Registro y seguimiento de actividades de capacitación relacionadas con el SGC.

Auditorías: Checklist para auditorías con registro de fecha, hora y persona inspeccionada, permitiendo guardar y revisar los registros históricos.

Tecnologías
Frontend:
React JS con React Router para navegación dinámica.
Material UI para estilos y componentes modernos.
Almacenamiento local: Uso de localStorage para persistencia de datos en la aplicación sin necesidad de backend o base de datos.
Instalación y ejecución
Clonar el repositorio:
 copy
bash

git clone https://github.com/tu_usuario/tincar-sgc-iso9001.git
cd tincar-sgc-iso9001
Instalar dependencias:
 copy
bash

npm install
Ejecutar la aplicación en modo desarrollo:
 copy
bash

npm start
Acceder a la aplicación desde el navegador en:
 copy
http://localhost:3000
Estructura del proyecto
 copy
src/
├── components/
│   ├── Sidebar.js                # Menú lateral de navegación
│   ├── Dashboard/                # Panel de indicadores
│   ├── Documents/                # Gestión de documentos
│   ├── Companies/                # Registro y administración de empresas
│   ├── Users/                    # Gestión de usuarios y roles
│   ├── Trainings/                # Registro de capacitaciones
│   ├── Audits/                  # Auditorías y checklist
├── App.js                       # Rutas y estructura principal
├── index.js                     # Renderización y tema global
├── theme.js                     # Personalización del tema Material UI
 copy
Uso
Navegar a través del menú lateral para acceder a cada sección.
En “Registro de Empresas” ingresar los datos solicitados; permite editar o eliminar registros.
En “Usuarios y Roles” agregar y administrar usuarios con asignación de roles.
Realizar registros de capacitaciones y auditorías y almacenarlos de forma local.
Visualizar indicadores en el Dashboard para seguimiento fácil y rápido del SGC.
Comentarios
Todos los datos se almacenan localmente en el navegador (localStorage) para facilitar el uso sin requerir configuración de servidores o bases de datos.
El diseño es responsivo y pensado para un ambiente corporativo con colores corporativos de TinCar y enfoque en fácil navegación.
El proyecto es un prototipo funcional para demostraciones y presentaciones, ideal para adaptación futura con backend real.
Contacto
Para dudas, sugerencias o colaboraciones, puedes contactarme a través de:

Correo electrónico: tu.email@dominio.com
GitHub: tu_usuario
Licencia
Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por utilizar TinCar SGC ISO 9001!
Mejorando la calidad en proyectos de software con eficiencia y confianza.

¿Quieres que te ayude a generar también el archivo README.md listo para copiar o subir a tu repositorio?
