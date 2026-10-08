---
layout: tool
title: "Spider Output Parser"
category: "Pentesting / Recon"
language: "Bash"
description: "Herramienta de automatización para procesar y clasificar salidas de subdominios, enlaces JS y endpoints."
usage_summary: "Clasifica salidas de LinkFinder, Sublist3r y scrapers web en carpetas estructuradas."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/pentesting/spider_ouput.sh) /ruta/archivos"
---

## ¿Qué hace Spider Output Parser?

**Spider Output Parser** es un script en Bash diseñado para agilizar la fase de recon (reconocimiento) en auditorías web. Procesa de forma automatizada los resultados de herramientas como LinkFinder, herramientas de subdominios y extractores de JavaScript, filtrando `href`, dominios y endpoints de interés.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/pentesting/spider_ouput.sh) /ruta/archivos
```
