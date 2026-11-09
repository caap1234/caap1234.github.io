---
layout: tool
title: "Verificador y Actualizador PHP (VPS Standalone)"
category: "Admin Servidores / Linux"
language: "Bash"
description: "Auditoría y actualización automática de parches de seguridad de PHP (7.4 a 8.5) para servidores VPS sin panel de control (AlmaLinux, CentOS, Rocky, RHEL, Ubuntu y Debian)."
usage_summary: "Reconoce distribución, valida si existe PHP instalado, evalúa ramas activas y actualiza vía APT o DNF/YUM según corresponda."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/verificar_actualizar_php_vps.sh)"
---

## Verificador y Actualizador de Seguridad PHP (VPS Standalone)

Script universal en Bash diseñado específicamente para servidores virtuales privados (VPS) y dedicados **sin panel de control**. Reconoce automáticamente la distribución del sistema operativo, audita la presencia de PHP y sus ramas activas, evalúa las versiones y parches de seguridad (7.4 a 8.5) y actualiza automáticamente los paquetes mediante el gestor nativo (`apt-get`, `dnf` o `yum`).

### Matriz de Versiones de Seguridad Evaluadas

| Rama PHP | Estado de Seguridad | Criterio de Corrección |
| :--- | :--- | :--- |
| **PHP 7.4** | Corregida | Parches de seguridad / backport del repositorio del SO |
| **PHP 8.0** | Corregida | Parches de seguridad / backport del repositorio del SO |
| **PHP 8.1** | Corregida | Parches de seguridad / backport del repositorio del SO |
| **PHP 8.2** | Corregida | Versión mínima oficial `>= 8.2.35` |
| **PHP 8.3** | Corregida | Versión mínima oficial `>= 8.3.36` |
| **PHP 8.4** | Corregida | Versión mínima oficial `>= 8.4.27` |
| **PHP 8.5** | Corregida | Versión mínima oficial `>= 8.5.12` |

### Capacidades Principales

- **Detección Automática de Distribución:** Identifica familias Debian/Ubuntu (`apt-get`) y RedHat Enterprise Linux (`dnf` o `yum` en AlmaLinux, CentOS, Rocky Linux, RHEL).
- **Validación de Presencia de PHP:** Si el servidor no cuenta con PHP instalado, el script informa el estado de inmediato y finaliza de manera limpia sin realizar modificaciones innecesarias.
- **Soporte Multi-Versión:** Detecta tanto el binario principal (`/usr/bin/php`) como configuraciones multiversión (`php7.4`, `php8.1`, `php8.2`, y repositorios Remi `/opt/remi/phpXX`).
- **Actualización Focalizada y Segura:** Actualiza exclusivamente los paquetes PHP pendientes de parche mediante `--only-upgrade` en APT o `$PKG_MGR upgrade --refresh` en EL/RPM.
- **Recarga de Servicios:** Reinicia automáticamente servicios activos de PHP-FPM (`php*-fpm`, `php-fpm`) y recarga servidores web detectados (Apache / Nginx).
- **Trazabilidad y Logs:** Genera un registro detallado de ejecución en `/root/php_security_vps_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/verificar_actualizar_php_vps.sh)
```
