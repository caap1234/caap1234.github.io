---
layout: tool
title: "Verificador y Actualizador PHP (DirectAdmin)"
category: "DirectAdmin / SysAdmin"
language: "Bash"
description: "Auditoría y actualización automatizada de versiones seguras de PHP compiladas con CustomBuild en DirectAdmin."
usage_summary: "Evalúa slots php1-4 en options.conf (7.4 a 8.5) contra versiones seguras y parches CustomBuild, recompilando si es necesario."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)"
---

## Verificador y Actualizador de Seguridad PHP (DirectAdmin)

Script automatizado en Bash para auditar y compilar parches de seguridad de PHP en servidores **DirectAdmin** utilizando CustomBuild (`da build` / `/usr/local/directadmin/custombuild/build`).

### Matriz de Versiones de Seguridad Evaluadas

| Rama PHP | Estado en DirectAdmin | Corrección |
| :--- | :--- | :--- |
| **PHP 7.4** | Corregida | Parche de CustomBuild |
| **PHP 8.0** | Corregida | Parche de CustomBuild |
| **PHP 8.1** | Corregida | Parche de CustomBuild |
| **PHP 8.2** | Corregida | 8.2.35 |
| **PHP 8.3** | Corregida | 8.3.36 |
| **PHP 8.4** | Corregida | 8.4.27 |
| **PHP 8.5** | Corregida | 8.5.12 |

### Capacidades Principales

- **Inspección de CustomBuild:** Lee `options.conf` e identifica dinámicamente las ramas activas en los slots `php1_release` a `php4_release`.
- **Evaluación de Seguridad Integral:** Compara las ramas 8.2-8.5 contra versiones fijadas oficiales (8.2.35, 8.3.36, etc.) y evalúa si las ramas 7.4, 8.0 y 8.1 cuentan con el parche de seguridad provisto por CustomBuild (validación de build epoch y parches).
- **Actualización y Recompilación Inteligente:** Si alguna rama no cumple con el estado seguro, actualiza los metadatos de CustomBuild (`da build update`) y recompila PHP (`da build php`), aplicando los parches de DirectAdmin. Si todas cumplen, omite la recompilación para evitar downtime.
- **Validación Final & Trazabilidad:** Valida las versiones y parches finales tras la compilación y registra cada acción con timestamp en `/root/php_security_directadmin_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)
```
