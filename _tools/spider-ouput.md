---
layout: tool
title: "Spider Output Parser"
category: "Pentesting / Recon"
language: "Bash"
description: "Herramienta de automatización para procesar y clasificar salidas de subdominios, enlaces JS y endpoints."
usage_summary: "Clasifica salidas de LinkFinder, Sublist3r y scrapers web en carpetas estructuradas."
one_liner: "wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/pentesting/spider_ouput.sh | bash -s /ruta/carpetas"
---

## ¿Qué hace Spider Output Parser?

**Spider Output Parser** es un script en Bash diseñado para agilizar la fase de recon (reconocimiento) en auditorías web. Procesa de forma automatizada los resultados de herramientas como LinkFinder, herramientas de subdominios y extractores de JavaScript, filtrando `href`, dominios y endpoints de interés.

### Características

- **Extracción multihilo:** Procesa lotes de archivos de texto en paralelo.
- **Formateo limpio:** Crea carpetas automáticas con resultados ordenados por tipo (`href`, `subdomains`, `javascript`).
- **Ligero y portable:** No requiere dependencias externas más allá de `awk`, `grep` y `sort`.

### Ejecución Directa

```bash
wget -O - https://raw.githubusercontent.com/caap1234/Chamba/main/pentesting/spider_ouput.sh | bash -s /tmp/recon_results
```
