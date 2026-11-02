---
layout: tool
title: "08. Windows Server Investigator"
category: "SecOps / Windows Forensics"
language: "Python"
description: "Auditoría de IIS W3C, Eventos de seguridad (4624/4625), sesiones RDP, tareas programadas y SMTP."
usage_summary: "Diseñado para ejecución directa en Windows Server o para análisis offline en Linux a partir de logs IIS exportados."
one_liner: "python 08_windows_server_investigator.py"
---

## 08. Windows Server Investigator

Audita servidores Windows para detectar webshells en IIS (.aspx), fuerza bruta a RDP y tareas programadas maliciosas.

```powershell
# Ejecución directa en Windows Server
python 08_windows_server_investigator.py --days 3

# Modo offline en Linux con logs de IIS exportados
python3 08_windows_server_investigator.py --mode offline --iis-dir /ruta/a/W3SVC1
```

