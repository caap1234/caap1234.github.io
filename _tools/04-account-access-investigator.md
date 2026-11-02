---
layout: tool
title: "04. Account Access Investigator"
category: "SecOps / Access Auditing"
language: "Python"
description: "Auditoría de inicios de sesión y acciones administrativas en cPanel, WHM, DirectAdmin y SSH."
usage_summary: "Correlaciona quién accedió al panel, desde qué IP pública, cuándo y qué acciones administrativas (correos, FTP, File Manager) se ejecutaron."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/04_account_access_investigator.py)"
---

## 04. Account Access Investigator

Investiga accesos no autorizados a cuentas de hosting, fuerza bruta y acciones realizadas desde paneles de control.

```bash
# Investigar accesos de un usuario en cPanel
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/04_account_access_investigator.py) --server cpanel --user cliente1 --days 7

# Auditar accesos desde una IP sospechosa
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/04_account_access_investigator.py) --ip 198.51.100.25
```

