---
layout: tool
title: "Verificador y Actualizador PHP (cPanel/WHM)"
category: "cPanel / SysAdmin"
language: "Bash"
description: "Auditoría y actualización desatendida de parches de seguridad para ea-php (7.4 a 8.5) en cPanel/WHM sobre sistemas con DNF o YUM (AlmaLinux, Rocky Linux, CloudLinux y CentOS 7)."
usage_summary: "Detecta gestor (dnf/yum), verifica parches de seguridad y backports cPanel (7.4-8.5), actualiza y valida el estado final."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)"
---

## Verificador y Actualizador de Seguridad PHP (cPanel/WHM)

Script automatizado en Bash para auditar y actualizar de forma segura las ramas de PHP (`ea-php74` a `ea-php85`) administradas por EasyApache 4 en servidores **cPanel/WHM**. Compatible tanto con sistemas modernos con `dnf` (AlmaLinux / Rocky Linux / RHEL 8 y 9) como con servidores veteranos con `yum` (CentOS 7 / CloudLinux 7).

### Matriz de Versiones de Seguridad Evaluadas

| Rama | Versión PHP | Corrección / Estado |
| :--- | :--- | :--- |
| **PHP 7.4** | 7.4.34 (cPanel) | Corregida mediante backport |
| **PHP 8.0** | 8.0.30 + parche EA4 | Corregida mediante backport |
| **PHP 8.1** | 8.1.34 + parche EA4 | Corregida mediante backport |
| **PHP 8.2** | 8.2.35 | Corregida |
| **PHP 8.3** | 8.3.36 | Corregida |
| **PHP 8.4** | 8.4.27 | Corregida |
| **PHP 8.5** | 8.5.12 | Corregida |

### Capacidades Principales

- **Detección Automática de Gestor (DNF o YUM):** Reconoce automáticamente el entorno y utiliza `dnf upgrade --refresh` o `yum update` con expiración de caché de metadatos según la versión del sistema operativo (CentOS 7 o EL8/EL9).
- **Auditoría de Versiones y Backports:** Verifica si las ramas 8.2-8.5 cumplen con las versiones mínimas oficiales y si las ramas 7.4-8.1 cuentan con los parches de seguridad backport lanzados por cPanel en EasyApache 4.
- **Actualización Desatendida:** Si alguna rama instalada no está al día, ejecuta la actualización descargando los paquetes corregidos directamente de los repositorios oficiales de cPanel/EA4.
- **Recarga Automática:** Tras la actualización, reinicia automáticamente los servicios de PHP-FPM (`/scripts/restartsrv_apache_php_fpm`).
- **Detección de CloudLinux (alt-php):** Alerta si se detectan paquetes `alt-php`, indicando que deben gestionarse mediante el canal propio de CloudLinux.
- **Alerta de Ramas EOL Obsoletas:** Identifica ramas sin parche disponible (`ea-php5x` o `ea-php70` a `73`).
- **Validación Final & Trazabilidad:** Valida el estado final de cada binario y almacena el registro completo en `/root/php_security_cpanel_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)
```
