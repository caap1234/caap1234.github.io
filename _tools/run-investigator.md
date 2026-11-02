---
layout: tool
title: "Abuse Investigation Suite & Hub"
category: "SecOps / Incident Response"
language: "Python"
description: "Lanzador interactivo y suite completa de peritaje forense para servidores cPanel, DirectAdmin, Linux y Windows Server."
usage_summary: "Permite ejecutar cualquiera de los 9 investigadores forenses descargándolos automáticamente al vuelo en memoria/tmp sin requerir clonar repositorios."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/run_investigator.py)"
---

## Incident Response & Abuse Investigation Suite (Hub)

Lanzador centralizado para realizar investigaciones técnicas de abuso en servidores **cPanel**, **DirectAdmin**, **Linux Genérico** y **Windows Server**.

### Características

- **Zero Dependencies:** Funciona con Python 3 estándar nativo sin módulos externos.
- **Descarga al Vuelo:** Si ejecutas este lanzador vía pipe en un servidor remoto, descarga y ejecuta de forma transparente el módulo seleccionado en `/tmp`.
- **Salida Estandarizada para IRIS:** Todos los módulos generan al final un bloque con líneas de log crudas completas (snippets) listas para copiar y pegar en los tickets de IRIS.

### Ejecución Directa en Servidor

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/run_investigator.py)
```
O con `curl`:
```bash
python3 <(curl -sL https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/run_investigator.py)
```
