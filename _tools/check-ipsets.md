---
layout: tool
title: "IPset Firewall Checker"
category: "SecOps / Firewall"
language: "Python"
description: "Gestión y verificación masiva de listas de bloqueo IPset en firewalls Linux."
usage_summary: "Verifica caducidad de reglas y sincronización con listas de reputación de IP."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/check_ipsets.py)"
---

## IPset Firewall Checker

Analizador de conjuntos de reglas `ipset` para optimizar el rendimiento del firewall de kernel en servidores Linux de alto tráfico.

### Ejecución Directa en Terminal

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/check_ipsets.py)
```
