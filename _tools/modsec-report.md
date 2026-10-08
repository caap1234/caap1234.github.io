---
layout: tool
title: "ModSecurity Report Analyzer"
category: "SecOps / WAF"
language: "Bash"
description: "Script de análisis y extracción estadística de ataques bloqueados en logs de ModSecurity."
usage_summary: "Genera reportes de IPs atacantes, IDs de reglas disparadas y URIs objetivo."
one_liner: "wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/secops/modsec_report.sh | bash"
---

## ModSecurity Report Analyzer

Script en Bash enfocado en la auditoría rápida de logs de **ModSecurity** en servidores web Apache y Nginx.

### Características

- **Estadísticas de Reglas:** Muestra las reglas de WAF más activadas para ajustar posibles falsos positivos.
- **Top IPs Atacantes:** Extrae las direcciones IP con mayor volumen de bloqueos.
- **Rutas Objetivos:** Analiza los endpoints y URIs más atacados (`/wp-login.php`, `xmlrpc.php`, etc.).

### Ejecución Directa

```bash
wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/secops/modsec_report.sh | bash
```
