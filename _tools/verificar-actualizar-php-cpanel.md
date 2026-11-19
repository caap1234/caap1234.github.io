---
layout: tool
title: "Verificador y Actualizador PHP y Apache mod_http2 (cPanel/WHM)"
category: "cPanel / SysAdmin"
language: "Bash"
description: "Auditoría y actualización desatendida de parches de seguridad para ea-php (8.1 en adelante y 7.4-8.5), PHP interno y Apache ea-apache24 (mod_http2 CVE-2026-119618) en cPanel/WHM."
usage_summary: "Limpia caché de repositorios, actualiza con /scripts/update-packages y /scripts/autorepair update_cpanel_php8, verifica ea-apache24 (>=2.4.71-1) y parches PHP (8.1-8.5)."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)"
---

## Verificador y Actualizador de Seguridad PHP y Apache (cPanel/WHM)

Script automatizado en Bash para auditar y actualizar de forma segura las ramas de PHP (`ea-php81` a `ea-php85`, así como ramas 7.4 y 8.0), el PHP interno de cPanel y el servidor web Apache (`ea-apache24`) administrados por EasyApache 4 en servidores **cPanel/WHM**. 

Diseñado para responder a los boletines críticos de seguridad:
- **PHP Security Advisory (18 de Noviembre de 2026):** CVE-2026-129289 (PHP-FPM Request Smuggling RCE), CVE-2026-126714, CVE-2026-115560.
- **Apache mod_http2 Advisory (CVE-2026-119618):** Ejecución remota de código (RCE) en el módulo `mod_http2` de Apache, corregida a partir de `ea-apache24 2.4.71-1`.

### Matriz de Versiones de Seguridad Evaluadas

| Componente / Rama | Versión Mínima Segura | Corrección / Estado |
| :--- | :--- | :--- |
| **Apache HTTPD (`ea-apache24`)** | **`2.4.71-1`** | **Corregida mod_http2 RCE (CVE-2026-119618)** |
| **PHP 7.4** | 7.4.34 (cPanel) | Corregida mediante backport EA4 |
| **PHP 8.0** | 8.0.30 + parche EA4 | Corregida mediante backport EA4 |
| **PHP 8.1** | 8.1.34 + parche EA4 | Corregida mediante backport EA4 (Nov 18, 2026) |
| **PHP 8.2** | **8.2.36** | Corregida (Seguridad Nov 18, 2026) |
| **PHP 8.3** | **8.3.37** | Corregida (Seguridad Nov 18, 2026) |
| **PHP 8.4** | **8.4.28** | Corregida (Seguridad Nov 18, 2026) |
| **PHP 8.5** | **8.5.13** | Corregida (Seguridad Nov 18, 2026) |
| **cPanel Internal PHP** | `/scripts/autorepair update_cpanel_php8` | Actualizado y protegido |

### Procedimiento Oficial de Actualización

El script ejecuta automáticamente el flujo recomendado por cPanel Support para parches críticos:

1. **Limpieza y reconstrucción de caché:** `yum clean all && yum makecache` (o `dnf clean all && dnf makecache`).
2. **Actualización de paquetes del sistema y EasyApache 4:** `/scripts/update-packages` (actualiza `ea-apache24` y `ea-php*`).
3. **Actualización del PHP interno de cPanel:** `/scripts/autorepair update_cpanel_php8`.
4. **Actualización directa de paquetes:** Actualización específica de paquetes `ea-php*` y `ea-apache24*` pendientes vía `dnf`/`yum`.
5. **Reinicio de servicios:** Recarga inmediata de los manejadores PHP-FPM (`/scripts/restartsrv_apache_php_fpm`) y servidor Apache (`/scripts/restartsrv_httpd`).

### Capacidades Principales

- **Auditoría de Apache mod_http2:** Verifica que `ea-apache24` esté en la versión `2.4.71-1` o superior para mitigar CVE-2026-119618.
- **Detección Automática de Gestor (DNF o YUM):** Reconoce automáticamente el entorno y utiliza `dnf upgrade --refresh` o `yum update` con expiración de caché de metadatos según la versión del sistema operativo (CentOS 7 o EL8/EL9).
- **Detección Certera de CloudLinux:** Distingue servidores CloudLinux genuinos de instalaciones estándar (CentOS/AlmaLinux) con herramientas como Imunify360 (evitando falsas alarmas de `alt-php`).
- **Auditoría de Versiones y Backports:** Verifica ramas 8.2-8.5 contra versiones upstream mínimas y 8.1/7.4/8.0 contra parches de seguridad backport EA4.
- **Soporte para Modo Forzado (`--force`):** Permite ejecutar el ciclo completo de limpieza, actualización y autorepair incluso si los binarios reportan estar al día.
- **Validación Final & Trazabilidad:** Valida el estado final de cada binario y almacena el registro completo en `/root/php_security_cpanel_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/cpanel/verificar_actualizar_php_cpanel.sh)
```
