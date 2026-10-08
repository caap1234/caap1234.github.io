---
layout: tool
title: "Server Logs Collector"
category: "Admin Servidores"
language: "Bash"
description: "Recolector de logs del sistema para diagnóstico rápido de incidencias."
usage_summary: "Empaqueta logs de sistema, syslog, apache, nginx y exim para auditoría."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/collect_logs.sh)"
---

## Server Logs Collector

Script de utilería para recopilar y empaquetar los registros relevantes del sistema durante un incidente de seguridad o caída de servicios.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/collect_logs.sh)
```
