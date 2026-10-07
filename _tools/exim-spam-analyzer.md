---
layout: tool
title: "Exim Spam Analyzer"
category: "SecOps / Mail Security"
language: "Python"
description: "Analizador de colas de correo y logs de Exim para detectar ataques de spam masivo y scripts comprometidos."
usage_summary: "Rastrea el origen de correos salientes, identificando usuarios cPanel y scripts PHP abusivos."
one_liner: "wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_spam_analyzer.py | python3 -"
---

## Exim Spam Analyzer

Herramienta especializada en la investigación de incidentes de envío masivo de correo (Spam Outbound) en servidores Linux con cPanel y Exim.

### Capacidades

- **Identificación de Origen:** Distingue si el spam proviene de scripts vulnerables (`cwd`), usuarios autenticados comprometidos o ataques por formulario web.
- **Reporte Estadístico:** Muestra el Top 10 de IPs emisoras, dominios y encabezados sospechosos.
- **Acción Rápida:** Genera reglas de bloqueo sugeridas para `ipset` y suspensión de cuentas abusivas.

### Ejecución Directa

```bash
wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_spam_analyzer.py | python3 -
```
