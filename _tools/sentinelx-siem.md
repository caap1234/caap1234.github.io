---
layout: tool
title: "SentinelX SIEM"
category: "SIEM / Monitoring"
language: "Python"
description: "Sistema ligero de SIEM y detección de intrusiones para servidores Linux y entornos cloud."
usage_summary: "Monitoreo continuo de syslog, auth.log y modsec audit logs con alertas instantáneas."
one_liner: "wget -O - https://raw.githubusercontent.com/caap1234/SentinelX-SIEM/main/install.sh | bash"
---

## ¿Qué es SentinelX SIEM?

**SentinelX** es una solución de SIEM (*Security Information and Event Management*) ligera y modular desarrollada para servidores Linux. Permite centralizar la ingesta de logs, correlacionar eventos de autenticación y detectar patrones anómalos de fuerza bruta o escaneos web en tiempo real.

### Características Principales

- **Ingesta en Tiempo Real:** Lectura continua de `auth.log`, `secure`, `exim_mainlog` y ModSecurity Audit Logs.
- **Correlación de Eventos:** Detección de patrones múltiples fallidos de login SSH y HTTP.
- **Bloqueo Automático:** Integración nativa con `ipset` e `iptables` / `CSF`.
- **Alertas en Telegram / Discord:** Notificaciones inmediatas ante eventos críticos.

### Ejemplo de Uso

Para ejecutar una verificación directa del estado e instalación automática en tu servidor:

```bash
wget -O - https://raw.githubusercontent.com/caap1234/SentinelX-SIEM/main/install.sh | bash
```

### Arquitectura

SentinelX utiliza un motor de expresiones regulares multihilo en Python 3 para analizar eventos sin generar sobrecarga de CPU en el servidor monitoreado.
