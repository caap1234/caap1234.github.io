---
layout: post
title: "Diagnóstico Avanzado y Optimización de PHP-FPM en Servidores cPanel"
date: 2026-10-01
tags: ["cPanel", "Linux", "PHP-FPM", "Performance", "SysAdmin"]
summary: "Cómo diagnosticar cuellos de botella en PHP-FPM, ajustar max_children y solucionar el error 503 Service Unavailable en servidores web."
---

En entornos de hosting compartido y servidores dedicados con cPanel, uno de los problemas más comunes de rendimiento es el agotamiento de procesos worker en **PHP-FPM**, manifestándose con errores `503 Service Unavailable` o alto consumo de memoria RAM.

## 1. Síntomas Comunes

- Mensajes en `/etc/apache2/logs/error_log`: `[proxy_fcgi:error] [pid ...] AH01079: failed to make connection to backend: httpd-UDS`.
- Servidor lento con picos de Load Average a pesar de bajo uso de CPU.

## 2. Cálculo del `pm.max_children` Óptimo

No existe una cifra mágica; el valor correcto depende de la RAM disponible dedicada a PHP y el tamaño promedio por proceso PHP:

$$\text{max\_children} = \frac{\text{RAM dedicada a PHP (MB)}}{\text{Tamaño promedio por proceso PHP (MB)}}$$

Por ejemplo, para un servidor con 16 GB de RAM donde asignamos 10 GB a PHP y cada proceso consume ~60 MB:

$$\text{max\_children} = \frac{10240}{60} \approx 170$$

## 3. Automatización del Diagnóstico

Para agilizar el análisis, desarrollé el script `cpanel-php-optimizer.sh` disponible en el repositorio de herramientas. Permite listar automáticamente los pools de PHP-FPM más saturados y aplicar ajustes de memoria en tiempo real.
