---
layout: tool
title: "Verificador y Actualizador PHP (DirectAdmin)"
category: "DirectAdmin / SysAdmin"
language: "Bash"
description: "Auditoría y compilación automatizada de versiones seguras de PHP con CustomBuild en DirectAdmin (8.1 en adelante y 7.4-8.5)."
usage_summary: "Evalúa slots php1-4 en options.conf contra el boletín del 18 de Noviembre de 2026, recompilando vía CustomBuild (clean/update/php) si es necesario."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)"
---

## Verificador y Actualizador de Seguridad PHP (DirectAdmin)

Script automatizado en Bash para auditar y compilar parches de seguridad de PHP en servidores **DirectAdmin** utilizando CustomBuild (`da build` / `/usr/local/directadmin/custombuild/build`). Diseñado para aplicar las mitigaciones del boletín crítico de seguridad del **18 de Noviembre de 2026** (CVE-2026-129289, CVE-2026-126714, CVE-2026-115560).

### Matriz de Versiones de Seguridad Evaluadas

| Rama PHP | Estado en DirectAdmin | Corrección Mínima |
| :--- | :--- | :--- |
| **PHP 7.4** | Corregida | Parche de CustomBuild |
| **PHP 8.0** | Corregida | Parche de CustomBuild |
| **PHP 8.1** | Corregida | Parche de CustomBuild (Nov 18, 2026) |
| **PHP 8.2** | Corregida | 8.2.36 (Seguridad Nov 18, 2026) |
| **PHP 8.3** | Corregida | 8.3.37 (Seguridad Nov 18, 2026) |
| **PHP 8.4** | Corregida | 8.4.28 (Seguridad Nov 18, 2026) |
| **PHP 8.5** | Corregida | 8.5.13 (Seguridad Nov 18, 2026) |

### Procedimiento de Actualización y Compilación

Cuando se detecta que alguna de las ramas configuradas no cumple con la versión mínima o con la fecha de corte de seguridad:

1. **Limpieza de CustomBuild:** `./build clean`.
2. **Actualización de definiciones y parches:** `./build update`.
3. **Recompilación de PHP:** `./build php` (compila binarios seguros y parches de DirectAdmin).
4. **Reescritura de configuraciones y reinicio de servicios:** `./build rewrite_confs`.

### Capacidades Principales

- **Inspección de CustomBuild:** Lee `options.conf` e identifica dinámicamente las ramas activas en los slots `php1_release` a `php4_release`.
- **Evaluación de Seguridad Integral:** Compara las ramas 8.2-8.5 contra versiones upstream corregidas y valida la fecha de compilación de las ramas 8.1 (y 7.4-8.0) contra la fecha de corte del 18 de Noviembre de 2026.
- **Máxima Compatibilidad de SO y Python:** Funciona sin problemas en CentOS 7, AlmaLinux 8/9, Rocky Linux, RHEL, CloudLinux, Debian y Ubuntu, soportando entornos con `python3`, `python2.7`, `python` o herramientas nativas del sistema (`date`/`awk`).
- **Soporte para Modo Forzado (`--force`):** Permite forzar la recompilación completa de CustomBuild.
- **Validación Final & Trazabilidad:** Valida las versiones y parches finales tras la compilación y registra cada acción con timestamp en `/root/php_security_directadmin_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)
```
