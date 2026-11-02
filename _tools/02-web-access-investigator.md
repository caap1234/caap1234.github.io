---
layout: tool
title: "02. Web Access Investigator"
category: "SecOps / Web Forensics"
language: "Python"
description: "Análisis forense de peticiones web en Apache, Nginx y LiteSpeed para cPanel y DirectAdmin."
usage_summary: "Busca peticiones a webshells, IPs atacantes, métodos POST, códigos HTTP y reconstruye la actividad antes y después de una hora de infección."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/02_web_access_investigator.py)"
---

## 02. Web Access Investigator

Investiga domlogs de servidores web para detectar explotación de vulnerabilidades, webshells y escaneos maliciosos.

```bash
# Investigar accesos a un archivo sospechoso en un dominio
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/02_web_access_investigator.py) --domain cliente.com --file wso.php

# Filtrar solo peticiones POST
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/02_web_access_investigator.py) --domain cliente.com --post-only
```

