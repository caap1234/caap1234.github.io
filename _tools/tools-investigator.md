---
layout: tool
title: "Tools Investigator Suite"
category: "SecOps / Incident Response"
language: "Python, cPanel, DirectAdmin, Windows"
description: "Suite integral y generador interactivo de comandos One-Liner para peritaje forense e investigación de incidentes de abuso en servidores cPanel, DirectAdmin y Windows Server."
usage_summary: "9 módulos forenses (Exim, Domlogs, Webshells, Logins, Correlador, DNS, Windows IIS, Salud) ejecutables directamente en memoria sin clonar repositorios."
generator_url: "/tools/investigator/"
custom_button_text: "Abrir Generador de Comandos One-Liner"
---

<div class="page-container" style="padding-top: 0;">
  <article class="article-header" style="border-bottom: 2px solid var(--autumn-orange);">
    <h1 class="article-title">🛡️ Tools Investigator Suite</h1>
    <p class="hero-subtitle" style="color: var(--autumn-amber); font-size: 1.15rem;">
      Generador de Comandos One-Liner y Suite Forense para Servidores Web Hosting y Windows
    </p>

    <!-- Badges de Tecnologías -->
    <div class="card-tag-row" style="margin-top: 1.25rem;">
      <span class="badge badge-secops"><i class="fab fa-python"></i> Python 3 Nativo</span>
      <span class="badge badge-tech"><i class="fas fa-server"></i> cPanel / WHM</span>
      <span class="badge badge-secops"><i class="fas fa-network-wired"></i> DirectAdmin</span>
      <span class="badge badge-tech"><i class="fab fa-windows"></i> Windows Server</span>
      <span class="badge badge-secops"><i class="fas fa-file-invoice"></i> Formato IRIS</span>
      <span class="badge badge-tech"><i class="fas fa-bolt"></i> Zero Dependencies</span>
    </div>

    <!-- Botón directo al generador -->
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="{{ '/tools/investigator/' | relative_url }}" class="btn-primary" style="font-size: 0.95rem; background: var(--autumn-orange); border-color: var(--autumn-orange);">
        <i class="fas fa-terminal"></i> Abrir Generador Interactivo One-Liner &rarr;
      </a>
      <a href="https://github.com/caap1234/Chamba/tree/main/investigators" target="_blank" class="btn-primary" style="font-size: 0.95rem; background: transparent; border: 1px solid var(--border-glow); color: var(--text-main);">
        <i class="fab fa-github"></i> Repositorio en GitHub
      </a>
    </div>
  </article>

  <div class="content-body">
    <h2><i class="fas fa-layer-group"></i> Módulos Forenses Incluidos</h2>
    <p>
      La suite <strong>Tools Investigator</strong> fue concebida para que analistas de SecOps y soporte avanzado puedan auditar servidores en tiempo real sin requerir instalaciones pesadas ni clonar repositorios completos en los servidores de los clientes.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-envelope"></i> 01. Abuse Mail Investigator</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Exim y Dovecot saliente. Rastreo de Webmail (127.0.0.1) extrayendo IP real vía <code>X-Forwarded-For</code>.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-globe"></i> 02. Web Access Investigator</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Domlogs Apache/Nginx, peticiones POST, detección de webshells y reconstrucción de accesos antes/después.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-file-code"></i> 03. Malware & File Investigator</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Archivos recientes, permisos 777, hashes MD5/SHA256 y detección de persistencia en crontabs y llaves SSH.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-user-shield"></i> 04. Account Access Investigator</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Logins exitosos y fallidos en cPanel, WHM, DirectAdmin y SSH con correlación de acciones del panel.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-briefcase"></i> 05. Abuse Evidence Collector</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Consolidación estructurada de evidencia técnica y fragmentos de logs lista para pegar en el sistema IRIS.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-stream"></i> 07. Suspicious Activity Correlator</h3>
        <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0;">
          Timeline unificado: Cruza IP, usuario, logs web, envíos de correo y archivos modificados cronológicamente.
        </p>
      </div>
    </div>

    <h2><i class="fas fa-terminal"></i> Lanzador Rápido Todo-en-Uno (Runner)</h2>
    <p>Para abrir el menú interactivo directamente en cualquier servidor remoto:</p>
    <div class="cmd-box" style="margin: 1rem 0;">
      <span class="cmd-text">python3 &lt;(wget -qO- https://raw.githubusercontent.com/caap1234/Chamba/main/investigators/run_investigator.py)</span>
    </div>
  </div>
</div>
