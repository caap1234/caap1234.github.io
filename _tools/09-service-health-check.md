---
layout: tool
title: "09. Service Health & Exposure Check"
category: "SecOps / System Health"
language: "Python"
description: "Diagnóstico de procesos en /tmp, firmas de crypto-miners, conexiones al puerto 25 y salud operativa."
usage_summary: "Revisa load average, saturación de disco o inodos, servicios esenciales detenidos y conexiones de red sospechosas."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/09_service_health_check.py)"
---

## 09. Service Health & Exposure Check

Permite evaluar rápidamente el estado del servidor para descartar problemas operativos o ataques DDoS/flooding en progreso.

```bash
# Diagnóstico general en cPanel
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/09_service_health_check.py) --server cpanel

# Detección de mineros y conexiones salientes de spam
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/09_service_health_check.py) --check-miners
```

