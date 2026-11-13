---
layout: tool
title: "Exim Phishing & Malicious Links Extractor"
category: "SecOps / Mail Security"
language: "Python"
description: "Auditoría de solo lectura en Exim y Maildir para extraer URLs, dominios y enlaces de phishing en correos recibidos (cPanel y DirectAdmin)."
usage_summary: "Cruza logs de Exim con buzones Maildir locales y cola de correo para aislar enlaces fraudulentos (renovaciones falsas, pagos, spoofing) directamente en terminal o CSV."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_phishing_links.py)"
---

## Exim Phishing & Malicious Links Extractor

Herramienta forense en Python (100% biblioteca estándar, compatible con Python 3.5+ y de solo lectura) diseñada para investigar incidentes de phishing entrante, campañas de suplantación de identidad (spoofing) y distribución de enlaces maliciosos en servidores **cPanel/WHM** y **DirectAdmin**.

Opera **100% en memoria por defecto**, imprimiendo los detalles y enlaces directamente en terminal sin dejar archivos temporales ni reportes en disco.

### Capacidades Principales

- **Correlación de Logs y Buzones:** Rastrea identificadores de Exim en `/var/log/exim_mainlog*` (cPanel), `/var/log/exim/mainlog*` (DirectAdmin) o `/var/log/exim4/` y localiza los correos físicos en las rutas Maildir de `/home*/*/mail`, `/home*/*/imap` o en la cola activa con `exim -Mvb`.
- **Búsqueda Dirigida por Buzón:** Cruza `/etc/userdomains` y `/etc/passwd` para inspeccionar directamente el buzón físico correspondiente a cada destinatario atacado (`.spam/`, `.Junk/`, `new/`, `cur/`).
- **Análisis Forense de Entregas:** Desglosa cuántos correos fueron entregados con éxito (`=>`), cuántos rechazados por buzón inexistente (`**`) y cuántos descartados a `/dev/null` por filtros antispam.
- **Decodificación RFC 2047 y Escapes Octales:** Decodifica encabezados de asunto MIME (`=?UTF-8?B?...?=`) y secuencias octales típicas de Exim (`\363`) para evitar falsos negativos en el filtrado.
- **Extracción de URLs en HTML y Texto:** Parsea enlaces de etiquetas `<a>` capturando el texto ancla (`anchor_text`) y busca URLs en texto plano, limpiando entidades HTML y normalizando hosts.
- **Detección de Enlaces de Acción (Call-to-Action):** Clasifica automáticamente los enlaces que contienen palabras clave típicas de phishing (pagar, renovar, actualizar, verificar, login, factura, desbloquear, etc.).
- **Zero Disk Footprint:** Por defecto no crea ningún archivo en disco. Opcionalmente genera reportes CSV estructurados con el parámetro `--csv` o `--out`.

### Ejecución Directa en Terminal (One-Liner)

Ejecución estándar (en memoria, salida directa en pantalla):

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_phishing_links.py)
```

O utilizando `curl` apuntando a `caap1234.github.io`:

```bash
python3 <(curl -sL https://caap1234.github.io/tools/scripts/exim_phishing_links.py)
```

### Opciones y Personalización

Filtrar por un asunto o campaña específica:

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_phishing_links.py) --subject "Actualización urgente de cuenta"
```

Exportar los resultados a archivos CSV (opcional):

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_phishing_links.py) --csv --out /root/reporte_phishing
```

Analizar un correo `.eml` sospechoso en máquina local:

```bash
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/secops/exim_phishing_links.py) --eml muestra_phishing.eml
```
