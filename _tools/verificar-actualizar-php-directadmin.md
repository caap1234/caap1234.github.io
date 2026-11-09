---
layout: tool
title: "Verificador y Actualizador PHP (DirectAdmin)"
category: "DirectAdmin / SysAdmin"
language: "Bash"
description: "Auditoría y actualización automatizada de versiones seguras de PHP compiladas con CustomBuild en DirectAdmin."
usage_summary: "Evalúa slots php1-4 en options.conf contra mínimos de seguridad (8.2 a 8.5) y recompila vía CustomBuild si es necesario."
one_liner: "bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)"
---

## Verificador y Actualizador de Seguridad PHP (DirectAdmin)

Script automatizado en Bash para auditar y compilar parches de seguridad de PHP en servidores **DirectAdmin** utilizando CustomBuild (`da build` / `/usr/local/directadmin/custombuild/build`).

### Capacidades Principales

- **Inspección de CustomBuild:** Lee `options.conf` e identifica dinámicamente las ramas activas en los slots `php1_release` a `php4_release`.
- **Evaluación de Seguridad:** Compara las versiones activas de PHP (`/usr/local/php<version>/bin/php`) contra los mínimos de seguridad recomendados (8.2.35, 8.3.36, 8.4.27, 8.5.12).
- **Actualización y Recompilación Inteligente:** Si alguna rama no cumple con el mínimo de seguridad, actualiza los metadatos de CustomBuild (`da build update`) y recompila PHP (`da build php`). Si todas cumplen, omite la compilación para evitar consumo y downtime innecesario.
- **Validación Final & Trazabilidad:** Valida las versiones finales tras la compilación y registra cada acción con timestamp en `/root/php_security_directadmin_<timestamp>.log`.

### Ejecución Directa en Terminal

```bash
bash <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/directadmin/verificar_actualizar_php_directadmin.sh)
```
