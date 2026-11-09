---
layout: tool
title: "Verificador y Actualizador PHP (cPanel/WHM)"
category: "cPanel / SysAdmin"
language: "Bash"
description: "Auditoría y actualización desatendida de parches de seguridad para ea-php (8.2 a 8.5) en cPanel/WHM."
usage_summary: "Comprueba versiones mínimas seguras, actualiza vía dnf --refresh y valida el estado final de ea-php."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)"
---

## Verificador y Actualizador de Seguridad PHP (cPanel/WHM)

Script automatizado en Bash para auditar y actualizar de forma segura las ramas de PHP (`ea-php82`, `ea-php83`, `ea-php84`, `ea-php85`) administradas por EasyApache 4 en servidores **cPanel/WHM** con gestor de paquetes `dnf` (AlmaLinux / Rocky Linux / RHEL 8 y 9).

### Capacidades Principales

- **Auditoría de Versiones Mínimas:** Verifica automáticamente si las ramas instaladas cumplen con los releases mínimos seguros (8.2.35, 8.3.36, 8.4.27, 8.5.12).
- **Actualización Focalizada:** Ejecuta `dnf upgrade -y --refresh` únicamente sobre los paquetes `ea-php` que requieren actualización, sin alterar componentes innecesarios ni dependencias ajenas.
- **Detección de CloudLinux (alt-php):** Identifica entornos con CloudLinux y advierte que `alt-php` cuenta con su propio ciclo de vida.
- **Alerta de Ramas EOL / Antiguas:** Alerta sobre la presencia de ramas obsoletas (`ea-php5x`, `ea-php7x`, `ea-php80`, `ea-php81`) para su revisión manual.
- **Validación Post-Actualización & Logs:** Comprueba en tiempo de ejecución la versión final de cada binario y genera un log detallado en `/root/php_security_cpanel_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)
```
