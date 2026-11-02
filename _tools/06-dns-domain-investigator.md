---
layout: tool
title: "06. DNS & Domain Investigator"
category: "SecOps / Network & DNS"
language: "Python"
description: "Resolución DNS forense, MX, SPF, DMARC, ASN de hosting y validación de IPs locales vs externas."
usage_summary: "Verifica si el dominio realmente apunta a este servidor local, detecta CDNs (Cloudflare/Sucuri) y revisa discrepancias de propagación."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/06_dns_domain_investigator.py)"
---

## 06. DNS & Domain Investigator

Permite diagnosticar la configuración de DNS, registros de correo y verificar la infraestructura de alojamiento.

```bash
# Diagnóstico de dominio
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/06_dns_domain_investigator.py) --domain cliente.com
```
