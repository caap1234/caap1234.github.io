---
layout: tool
title: "SentinelX-SIEM"
category: "SIEM & Monitoreo"
language: "Python, FastAPI, PostgreSQL, Astro"
description: "Sistema de gestión de eventos de seguridad (SIEM) ligero para la centralización y análisis de logs en tiempo real."
usage_summary: "Inclusión de logs syslog, auth.log, Exim y ModSecurity con dashboard y alertas en tiempo real."
---

## 📌 Resumen del Proyecto

**SentinelX-SIEM** es una solución de SIEM (*Security Information and Event Management*) desarrollada para la centralización, correlación y análisis de eventos de seguridad en entornos de servidores Linux y Web Hosting.

Permite monitorear continuamente fuentes críticas de logs para detectar automáticamente intentos de fuerza bruta, escaneos de vulnerabilidades web y anomalías en servicios de correo.

---

## 🚀 Arquitectura Tecnológica

- **Backend:** Python 3 + FastAPI (procesamiento asíncrono de alto rendimiento).
- **Base de Datos:** PostgreSQL (almacenamiento estructurado e indexado de eventos de seguridad).
- **Frontend / Dashboard:** Astro + HTML/CSS moderno para una interfaz limpia e instantánea.
- **Alertas & Notificaciones:** Integración con bots de Telegram y webhooks de Discord para alertas críticas inmediatas.

---

## 🔑 Características Principales

1. **Ingesta Multi-fuente:**
   - Parsing en tiempo real de `/var/log/auth.log` (SSH).
   - Monitoreo de `/var/log/exim_mainlog` (Ataques de spam saliente).
   - Ingesta de ModSecurity Audit Logs (Firewall Web).

2. **Correlación & Reglas Automatizadas:**
   - Detección de patrones anómalos de login en ventanas de tiempo configurables.
   - Cálculo del nivel de riesgo por dirección IP de origen.

3. **Respuesta ante Incidentes:**
   - Bloqueo automático mediante scripts de integración con `ipset` y `CSF` (*ConfigServer Security & Firewall*).

---

## 🔗 Enlace al Repositorio

Puedes revisar el código fuente y la arquitectura completa en el repositorio de GitHub:
👉 [https://github.com/caap1234/SentinelX-SIEM](https://github.com/caap1234/SentinelX-SIEM)
