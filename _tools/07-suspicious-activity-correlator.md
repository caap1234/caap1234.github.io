---
layout: tool
title: "07. Suspicious Activity Correlator"
category: "SecOps / Timeline Forensics"
language: "Python"
description: "Correlacionador multilog para reconstruir la cronología completa de un compromiso de seguridad."
usage_summary: "Cruza eventos de IP, usuario, domlogs web, envíos Exim, logins Dovecot y modificaciones de archivos en una misma línea de tiempo."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/07_suspicious_activity_correlator.py)"
---

## 07. Suspicious Activity Correlator

Une las piezas de un ataque para descubrir el vector inicial de acceso, la subida de archivos y las acciones posteriores en orden cronológico estricto.

```bash
# Correlacionar actividad de una IP en las últimas 24 horas
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/07_suspicious_activity_correlator.py) --server cpanel --ip 198.51.100.2 --hours 24
```
