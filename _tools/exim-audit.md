---
layout: tool
title: "Exim & Dovecot Security Auditor"
category: "SecOps / Mail Security"
language: "Python"
description: "Auditoría de solo lectura para Exim y Dovecot en servidores DirectAdmin/AlmaLinux para detectar patrones de spam, cuentas comprometidas y scripts maliciosos."
usage_summary: "Identifica cuentas con más envíos, asuntos repetidos, dispersión de IPs en SMTP Auth, directorios cwd sospechosos y fuerza bruta en Dovecot/Exim."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit.py)"
---

## Exim & Dovecot Security Auditor

Herramienta ligera en Python (100% librería estándar, solo lectura) diseñada para auditar servidores VPS/Dedicados con **DirectAdmin y AlmaLinux/RHEL** y detectar rápidamente abuso de correo, campañas de spam saliente, credenciales comprometidas o ataques de fuerza bruta.

### Capacidades Principales

- **Top Remitentes y Emisores Locales:** Separa remitentes salientes (autenticados por SMTP o procesos locales) del tráfico entrante general.
- **Correlación de Asuntos (`T=`) y Emisor:** Decodifica cabeceras MIME/UTF-8 de los asuntos más repetidos y muestra automáticamente qué cuenta o usuario originó la campaña.
- **Detección de Scripts Maliciosos (`cwd=`):** Rastrea invocaciones locales de `sendmail`/PHP fuera de `/var/spool/exim` para ubicar rápidamente carpetas web comprometidas (`public_html`, `wp-content`, etc.).
- **Cuentas Comprometidas por Dispersión de IPs:** Detecta usuarios SMTP autenticados desde múltiples direcciones IP distintas (patrón clásico de botnets abusando de credenciales robadas).
- **Auditoría de Fuerza Bruta (Exim + Dovecot):** Resume los intentos fallidos y exitosos de inicio de sesión tanto en SMTP como en IMAP/POP3 cruzando `mainlog`, `maillog` y `secure` (incluyendo logs rotados `.gz`).

### Ejecución Directa en Terminal

Ejecución estándar (últimos 7 días, top 20 por categoría):

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit.py)
```

Personalizando el rango de días, límite de resultados o guardando el reporte en archivo:

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit.py) --days 3 --top 30 --output /tmp/reporte_exim.txt
```
