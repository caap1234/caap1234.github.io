---
layout: tool
title: "Verificador y Actualizador PHP y Apache mod_http2 (DirectAdmin)"
category: "DirectAdmin / SysAdmin"
language: "Bash"
description: "Auditoría y compilación automatizada de versiones seguras de PHP y Apache (mod_http2 CVE-2026-119618) con CustomBuild en DirectAdmin."
usage_summary: "Evalúa slots php1-4 y servidor Apache (>=2.4.71) en CustomBuild contra boletines de Noviembre 2026, recompilando vía clean/update/php/apache si es necesario."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)"
---

## Verificador y Actualizador de Seguridad PHP y Apache (DirectAdmin)

Script automatizado en Bash para auditar y compilar parches de seguridad de PHP y del servidor web Apache (`httpd`) en servidores **DirectAdmin** utilizando CustomBuild (`da build` / `/usr/local/directadmin/custombuild/build`). Diseñado para aplicar las mitigaciones de los boletines críticos de seguridad:
- **PHP Security Advisory (18 de Noviembre de 2026):** CVE-2026-129289 (PHP-FPM Request Smuggling RCE), CVE-2026-126714, CVE-2026-115560.
- **Apache mod_http2 Advisory (CVE-2026-119618):** Ejecución remota de código (RCE) en el módulo `mod_http2` de Apache, corregida a partir de Apache **`2.4.71`**.

### Matriz de Versiones de Seguridad Evaluadas

| Componente / Rama | Estado en DirectAdmin | Corrección Mínima |
| :--- | :--- | :--- |
| **Apache HTTPD (`httpd`)** | Corregida | **`2.4.71` (mod_http2 CVE-2026-119618)** |
| **PHP 7.4** | Corregida | Parche de CustomBuild |
| **PHP 8.0** | Corregida | Parche de CustomBuild |
| **PHP 8.1** | Corregida | Parche de CustomBuild (Nov 18, 2026) |
| **PHP 8.2** | Corregida | **8.2.36** (Seguridad Nov 18, 2026) |
| **PHP 8.3** | Corregida | **8.3.37** (Seguridad Nov 18, 2026) |
| **PHP 8.4** | Corregida | **8.4.28** (Seguridad Nov 18, 2026) |
| **PHP 8.5** | Corregida | **8.5.13** (Seguridad Nov 18, 2026) |

### Procedimiento de Actualización y Compilación

Cuando se detecta que alguna de las ramas configuradas o el servidor web Apache no cumplen con los estándares de seguridad:

1. **Limpieza de CustomBuild:** `./build clean`.
2. **Actualización de definiciones y parches:** `./build update`.
3. **Recompilación focalizada:**
   - Si PHP requiere actualización: `./build php`.
   - Si Apache requiere actualización: `./build apache`.
4. **Reescritura de configuraciones y reinicio de servicios:** `./build rewrite_confs`.

### Capacidades Principales

- **Auditoría de Apache mod_http2:** Verifica que el binario de Apache (`httpd`) sea `>= 2.4.71` para mitigar la vulnerabilidad RCE de `mod_http2` (CVE-2026-119618).
- **Inspección de CustomBuild:** Lee `options.conf` e identifica dinámicamente las ramas activas en los slots `php1_release` a `php4_release` y el servidor web configurado.
- **Evaluación de Seguridad Integral:** Compara las ramas 8.2-8.5 contra versiones upstream corregidas y valida la fecha de compilación de las ramas 8.1 (y 7.4-8.0) contra la fecha de corte del 18 de Noviembre de 2026.
- **Máxima Compatibilidad de SO y Python:** Funciona sin problemas en CentOS 7, AlmaLinux 8/9, Rocky Linux, RHEL, CloudLinux, Debian y Ubuntu, soportando entornos con `python3`, `python2.7`, `python` o herramientas nativas del sistema (`date`/`awk`).
- **Soporte para Modo Forzado (`--force`):** Permite forzar la recompilación completa de CustomBuild.
- **Validación Final & Trazabilidad:** Valida las versiones y parches finales tras la compilación y registra cada acción con timestamp en `/root/php_security_directadmin_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)
```
