---
layout: tool
title: "01. Abuse Mail Investigator"
category: "SecOps / Mail Forensics"
language: "Python"
description: "Auditoría forense de correo saliente en Exim, Dovecot y Webmail para cPanel y DirectAdmin."
usage_summary: "Investiga remitentes, destinatarios, asuntos repetidos, IPs de envío, autenticaciones Dovecot y rastrea envíos Webmail (127.0.0.1) vía X-Forwarded-For."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/01_abuse_mail_investigator.py)"
---

## 01. Abuse Mail Investigator

Herramienta forense especializada en auditoría de envíos masivos, spam y cuentas de correo comprometidas en servidores **cPanel** y **DirectAdmin**.

### Capacidades Destacadas

- **Auditoría General o Específica:** Análisis global del servidor o filtrado por cuenta de correo (`--email`) o dominio (`--domain`).
- **Envíos, Entregas y Rebotes:** Identifica llegadas salientes (`<=`), entregas (`=>`) y motivos de fallo/rechazo permanente (`**`) y diferimiento (`==`).
- **Cruce con Dovecot:** Correlaciona las IPs que enviaron correos con intentos de login IMAP/POP3 exitosos o fallidos.
- **Rastreo Webmail & X-Forwarded-For:** Si la IP emisora es `127.0.0.1` (Webmail/Roundcube), analiza automáticamente los logs de acceso de cPanel/DirectAdmin (`access_log`) para extraer la IP real detrás del `X-Forwarded-For`.
- **Evidencia para IRIS:** Provee líneas de log completas y sin truncar listas para adjuntar en tickets de soporte o abuso.

### Ejemplos de Uso

```bash
# Auditoría general en cPanel
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/01_abuse_mail_investigator.py) --server cpanel --days 3

# Investigar una cuenta de correo comprometida
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/01_abuse_mail_investigator.py) --email ventas@cliente.com --days 5
```
