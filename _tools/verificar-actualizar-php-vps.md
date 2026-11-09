---
layout: tool
title: "Verificador y Actualizador PHP (VPS Standalone)"
category: "Admin Servidores / Linux"
language: "Bash"
description: "Auditoría y actualización automática de parches de seguridad de PHP (7.4 a 8.5) para servidores VPS sin panel de control (AlmaLinux, CentOS, Rocky, RHEL, Ubuntu y Debian)."
usage_summary: "Reconoce distribución, evalúa versiones upstream y parches backport del SO (Canonical / Debian / RedHat) y actualiza vía APT o DNF/YUM."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/verificar_actualizar_php_vps.sh)"
---

## Verificador y Actualizador de Seguridad PHP (VPS Standalone)

Script universal en Bash diseñado específicamente para servidores virtuales privados (VPS) y dedicados **sin panel de control**. Reconoce automáticamente la distribución del sistema operativo, audita la presencia de PHP y sus ramas activas, evalúa las versiones y parches de seguridad (7.4 a 8.5) y actualiza automáticamente los paquetes mediante el gestor nativo (`apt-get`, `dnf` o `yum`).

### Criterios de Evaluación y Seguridad

Las distribuciones Linux estables (Ubuntu LTS, Debian, RHEL / AlmaLinux) mantienen versiones fijas (por ejemplo, PHP `8.3.6` en Ubuntu 24.04 o `8.2.7` en Debian 12) y aplican las correcciones de vulnerabilidades críticas mediante **revisiones de seguridad por backport** (como `8.3.6-0ubuntu0.24.04.13`), sin cambiar la versión mayor/menor upstream para no romper compatibilidad.

El script evalúa ambos escenarios de forma inteligente:

1. **Versiones Upstream puras (Repositorios Ondrej Sury PPA o Remi):**
   * Valida directamente contra las versiones mínimas oficiales: `>= 8.2.35`, `>= 8.3.36`, `>= 8.4.27`, `>= 8.5.12`.
2. **Paquetes Oficiales de la Distribución (Ubuntu, Debian, RHEL / AlmaLinux AppStream):**
   * Identifica la revisión del paquete instalado y audita en tiempo real contra los repositorios de seguridad del sistema operativo.
   * Si el paquete cuenta con la última revisión corregida por la distribución (sin actualizaciones pendientes de seguridad), se valida como **CUMPLE (Corregida con parches de la distribución)**.
   * Si existe una revisión de seguridad pendiente, el script descarga e instala automáticamente la actualización.

### Capacidades Principales

- **Detección Automática de Distribución:** Identifica familias Debian/Ubuntu (`apt-get`) y RedHat Enterprise Linux (`dnf` o `yum` en AlmaLinux, CentOS, Rocky Linux, RHEL).
- **Validación de Presencia de PHP:** Si el servidor no cuenta con PHP instalado, el script informa el estado de inmediato y finaliza de manera limpia sin realizar modificaciones innecesarias.
- **Soporte Multi-Versión:** Detecta tanto el binario principal (`/usr/bin/php`) como configuraciones multiversión (`php7.4`, `php8.1`, `php8.2`, y repositorios Remi `/opt/remi/phpXX`).
- **Actualización Focalizada y Limpia:** Actualiza exclusivamente los paquetes PHP instalados que tienen parches pendientes, eliminando advertencias innecesarias de paquetes no instalados.
- **Recarga de Servicios:** Reinicia automáticamente servicios activos de PHP-FPM (`php*-fpm`, `php-fpm`) y recarga servidores web detectados (Apache / Nginx).
- **Trazabilidad y Logs:** Genera un registro detallado de ejecución en `/root/php_security_vps_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/admin_servidores/verificar_actualizar_php_vps.sh)
```
