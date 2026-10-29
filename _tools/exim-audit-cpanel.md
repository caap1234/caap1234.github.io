---
layout: tool
title: "Exim & Dovecot Auditor (cPanel/WHM)"
category: "SecOps / Mail Security"
language: "Python"
description: "Auditoría de solo lectura para /var/log/exim_mainlog y Dovecot en servidores cPanel/WHM para detectar spam, cuentas cPanel comprometidas y scripts PHP abusivos."
usage_summary: "Cruza /var/log/exim_mainlog, /etc/userdomains y Dovecot para identificar cuentas cPanel, asuntos repetidos, cwd= y fuerza bruta."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit-cpanel.py)"
---

## Exim & Dovecot Auditor (cPanel/WHM)

Herramienta en Python (100% librería estándar, compatible con Python 3.4+ y solo lectura) adaptada específicamente para servidores **cPanel/WHM** (`/var/log/exim_mainlog`). Permite identificar rápidamente el origen de campañas de spam saliente, scripts PHP maliciosos y cuentas de correo comprometidas.

### Capacidades Principales

- **Atribución Automática a Cuentas cPanel:** Cruza `U=`, directorios `/home/<usuario>/...` y `/etc/userdomains` para mostrar qué cuenta de cPanel está generando el tráfico saliente.
- **Soporte Nativo de `/var/log/exim_mainlog`:** Soporta el formato de Exim en cPanel (incluyendo `log_selector = +pid` con `[PID]`, `dovecot_login` / `dovecot_plain` y logs rotados `.gz`).
- **Correlación de Asuntos (`T=`) y Emisor:** Decodifica asuntos MIME/UTF-8 y muestra la cuenta o proceso principal responsable de cada asunto repetido.
- **Detección de Webshells y Mailers PHP (`cwd=`):** Lista los directorios exactos (`public_html`, `wp-content`, addon domains) desde donde se invoca `sendmail`, filtrando procesos internos de cPanel/Exim (`-Mc`, `/var/spool/exim`, `/etc/csf`).
- **Detección de Botnets / Credenciales Robadas:** Identifica cuentas SMTP autenticadas desde múltiples direcciones IP distintas y resume intentos de fuerza bruta en Exim y Dovecot.

### Ejecución Directa en Terminal

Ejecución estándar (últimos 7 días, top 20 por categoría):

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit-cpanel.py)
```

Personalizando el rango de días, límite de resultados o exportando a un archivo:

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim-audit-cpanel.py) --days 3 --top 30 --output /tmp/reporte_exim_cpanel.txt
```
