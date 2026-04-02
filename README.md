# Ejercitación Miceli - Juegos JuegoContador

**Alumno:** Francisco Miceli  
**Profesor:** Lucas Saclier  
**Fecha de Entrega:** 6 de Abril, 2026

---

## 📋 Descripción del Proyecto

Este repositorio contiene la implementación del desafío técnico "JuegoContador" desarrollado con React, como parte de un ejercicio de análisis comparativo entre diferentes modelos de inteligencia artificial.

El juego consiste en una aplicación web simple donde los usuarios compiten contra sí mismos intentando hacer la mayor cantidad de clicks posibles en un botón durante 5 segundos.

---

## 🎯 Objetivos del Ejercicio

1. ✅ Desarrollar la aplicación "JuegoContador" según especificaciones
2. ✅ Generar implementaciones usando distintos modelos de IA (GPT-4o, Claude Sonnet 4.5)
3. ✅ Analizar y explicar diferencias de dificultad entre enfoques
4. ✅ Documentar prompts utilizados en cada caso
5. ✅ Documentar proceso y conclusiones
6. ✅ Comparar resultados entre diferentes modelos
7. ✅ Subir solución a repositorio de GitHub

---

## 🚀 Inicio Rápido

### Opción 1: GPT-4o

```powershell
cd GPT-4o\juego-contador
npm install
npm start
```

### Opción 2: Claude Sonnet 4.5 (Recomendado)

```powershell
cd Claude-Sonnet-4.5\juego-contador
npm install
npm start
```

Ambas aplicaciones se abrirán en `http://localhost:3000`

---

## 📊 Comparación de Implementaciones

### GPT-4o

**Características:**
- ✅ Implementación funcional
- ✅ Cumple todos los requisitos
- ⚠️ Documentación básica
- ⚠️ Diseño simple
- ❌ Respuestas vagas
- ❌ Mala organización de directorios
- ❌ Demasiados prompts para llegar a un resultado decente

**Ideal para:** Prototipos rápidos, MVPs

### Claude Sonnet 4.5

**Características:**
- ✅ Código altamente documentado
- ✅ Diseño profesional con animaciones
- ✅ Sistema de variables CSS
- ✅ Documentación exhaustiva
- ✅ Optimizaciones de performance

**Ideal para:** Proyectos de producción, código mantenible

### Ver Análisis Completo

Para un análisis detallado de las diferencias, consulta [analisis-comparativo.md](analisis-comparativo.md)

---

## 📚 Documentación Disponible

### Documentación General
- **[analisis-comparativo.md](analisis-comparativo.md)** - Comparación exhaustiva entre modelos

### Documentación GPT-4o
- **[GPT-4o/process_documentation.md](GPT-4o/process_documentation.md)** - Proceso y prompts de GPT-4o

### Documentación Claude Sonnet 4.5
- **[Claude-Sonnet-4.5/README.md](Claude-Sonnet-4.5/README.md)** - Información general
- **[Claude-Sonnet-4.5/readme-juego.md](Claude-Sonnet-4.5/readme-juego.md)** - README detallado del juego
- **[Claude-Sonnet-4.5/prompts-documentation.md](Claude-Sonnet-4.5/prompts-documentation.md)** - Todos los prompts utilizados
- **[Claude-Sonnet-4.5/process-documentation.md](Claude-Sonnet-4.5/process-documentation.md)** - Proceso de desarrollo

---

## 🔍 Requisitos Implementados

- ✅ **Dos botones:** Iniciar juego y botón para clickear
- ✅ **Indicador de puntaje máximo** inicializado en 0
- ✅ **Countdown visual:** "Preparados", "Listos", "Ya" (intervalos de 1s)
- ✅ **Fase de juego:** 5 segundos de duración
- ✅ **Tiempo restante visible** durante el juego
- ✅ **Contador actual visible** durante el juego
- ✅ **Deshabilitación de botones** según el estado
- ✅ **Actualización de récord** al superar puntaje máximo
- ✅ **Componentes funcionales** con React Hooks
- ✅ **Diseño responsivo** y funcional
- ✅ **README con instrucciones** de instalación
- ✅ **Código prolijo** y mantenible

---

## 💻 Tecnologías Utilizadas

- **React** 18.x
- **React Hooks** (useState, useEffect, useCallback)
- **CSS3** (Variables CSS, Flexbox, Animaciones)
- **Create React App**
- **Node.js** y npm

---

## 🎓 Conclusiones del Ejercicio

### Diferencias de Dificultad

**GPT-4o:**
- Enfoque más directo y pragmático
- Menor énfasis en documentación
- Implementación rápida

**Claude Sonnet 4.5:**
- Enfoque más exhaustivo
- Mayor inversión en calidad y documentación
- Resultado más production-ready

### Aprendizajes Clave

1. **Ambos modelos son capaces** de implementar soluciones funcionales
2. **Claude Sonnet 4.5** produce código más documentado y mantenible por defecto
3. **GPT-4o** es más rápido para prototipos pero requiere más iteraciones para calidad profesional
4. **La calidad depende significativamente** de cómo se estructuran los prompts
5. **La documentación** es un diferenciador clave entre los modelos

---

## 🏆 Resultados

| Criterio | GPT-4o | Claude Sonnet 4.5 |
|----------|--------|-------------------|
| Funcionalidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Calidad de Código | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Documentación | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| UX/UI | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Mantenibilidad | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Recomendación:** Para proyectos profesionales o de producción, Claude Sonnet 4.5 ofrece resultados superiores.

---

## 📧 Información de Contacto

**Alumno:** Francisco Miceli  
**Profesor:** Lucas Saclier  
**Fecha Límite:** Lunes 6 de Abril, 2026

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte de un desafío técnico.

---

## 🙏 Agradecimientos

- **Lucas Saclier** - Por la consigna y guía del proyecto
- **GPT-4o y Claude Sonnet 4.5** - Por las implementaciones comparativas

