---
layout: tool
title: "Diagnóstico PHP-FPM"
category: "Troubleshooting"
language: "Bash"
description: "Diagnóstico de cuellos de botella y procesos colgados en PHP-FPM."
usage_summary: "Inspecciona sockets UDS y consumo por pool de usuario."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/diagnostico_php_fpm.sh)"
---

## Diagnóstico PHP-FPM

Herramienta de diagnóstico rápido para analizar el estado de los procesos PHP-FPM cuando se detectan ralentizaciones en el servidor.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/diagnostico_php_fpm.sh)
```
