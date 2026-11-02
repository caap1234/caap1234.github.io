---
layout: tool
title: "05. Abuse Evidence Collector"
category: "SecOps / Forensics & IRIS"
language: "Python"
description: "Generador técnico de expedientes y recolección de evidencia para casos del sistema IRIS."
usage_summary: "Reúne metadatos del servidor, hashes MD5/SHA256, timestamps en UTC/Local y líneas de log completas listas para tickets de abuso."
one_liner: "python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/05_abuse_evidence_collector.py)"
---

## 05. Abuse Evidence Collector

Especialmente diseñado para estandarizar el levantamiento de evidencia técnica y recomendaciones de mitigación para el equipo de incidentes.

```bash
# Crear expediente para caso de malware
python3 <(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/05_abuse_evidence_collector.py) --case-id IRIS-9821 \
    --domain cliente.com --abuse-type malware --files /home/cliente/public_html/shell.php
```

