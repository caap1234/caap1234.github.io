---
layout: tool
title: "DFIR-IRIS Abuse Sync"
category: "SecOps / Automatización DFIR"
language: "Python, FastAPI, React 18, TypeScript, DFIR-IRIS API, Google Gemini AI"
description: "Plataforma integral de respuesta a incidentes de abuso, bitácora forense WYSIWYG, taxonomía de 4 ejes, catálogo de 11 playbooks, copiloto SOC con IA y sincronización bidireccional con DFIR-IRIS."
usage_summary: "Ingesta multicanal de reportes, bitácora forense en tiempo real, catálogo de playbooks, copiloto IA contextual, datastore de evidencias con hashes SHA-256 e informes ejecutivos en PDF."
github_url: "https://github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync"
---

<div class="page-container" style="padding-top: 0;">
  <article class="article-header" style="border-bottom: 2px solid var(--autumn-orange);">
    <h1 class="article-title">🛡️ DFIR-IRIS Abuse Sync SOC Platform</h1>
    <p class="hero-subtitle" style="color: var(--autumn-amber); font-size: 1.2rem;">
      Plataforma Unificada de Gestión de Abuso, Bitácora Forense WYSIWYG, Playbooks Asistidos e Integración Oficial con DFIR-IRIS
    </p>

    <!-- Badges de Tecnologías -->
    <div class="card-tag-row" style="margin-top: 1.25rem;">
      <span class="badge badge-secops"><i class="fab fa-python"></i> Python 3.10+ / FastAPI</span>
      <span class="badge badge-tech"><i class="fab fa-react"></i> React 18 / TypeScript</span>
      <span class="badge badge-secops"><i class="fas fa-shield-halved"></i> DFIR-IRIS API v2.4.29+</span>
      <span class="badge badge-tech"><i class="fas fa-robot"></i> Google Gemini AI</span>
      <span class="badge badge-secops"><i class="fas fa-book"></i> 11 Playbooks SOC</span>
      <span class="badge badge-tech"><i class="fas fa-file-pdf"></i> Informes Vectoriales PDF</span>
    </div>

    <!-- Botón directo al repositorio -->
    <div style="margin-top: 1.5rem;">
      <a href="https://github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync" target="_blank" class="btn-primary" style="font-size: 0.95rem;">
        <i class="fab fa-github"></i> Repositorio Oficial en GitHub &rarr;
      </a>
    </div>
  </article>

  <div class="content-body">
    <h2><i class="fas fa-eye"></i> Resumen General</h2>
    <p>
      <strong>DFIR-IRIS Abuse Sync</strong> es una solución integral desarrollada para optimizar y estandarizar las operaciones del Centro de Operaciones de Seguridad (SOC) y el área de Abuso / SecOps en entornos multi-tenant y proveedores de infraestructura web y hosting.
    </p>
    <p>
      La plataforma centraliza la recepción multicanal de denuncias (Zammad, WHMCS, IMAP, PDFs, OCR), clasifica incidentes mediante un modelo normativo de <strong>4 ejes independientes</strong>, proporciona una <strong>bitácora forense unificada en tiempo real con editor WYSIWYG</strong>, ejecuta <strong>11 playbooks supervisados</strong> de mitigación y sincroniza automáticamente notas, evidencias y metadatos con <strong>DFIR-IRIS</strong>.
    </p>

    <h2><i class="fas fa-layer-group"></i> Capacidades Principales</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-stream"></i> 1. Bitácora Forense WYSIWYG</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Registro interactivo en tiempo real de investigación, acciones operativas, evidencias y comunicaciones con renderizado directo de Markdown y sincronización transparente con notas técnicas de DFIR-IRIS.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--cyan-bright);"><i class="fas fa-book-bookmark"></i> 2. 11 Playbooks Estandarizados</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Protocolos guiados de 5 pasos para Phishing, Sitio Comprometido, Spam, Acceso No Autorizado, Autoridades, Disputa de Marca, RBL Blacklist, Fraude/Scam, Productos Regulados, Abuso de Red y Derechos de Autor.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--green-easy);"><i class="fas fa-brain"></i> 3. Copiloto SOC con IA</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Burbuja flotante interactiva conectada a Google Gemini que contextualiza en vivo el caso activo para sugerir medidas de contención, redactar respuestas formales y analizar trazas forenses.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--autumn-amber);"><i class="fas fa-database"></i> 4. Datastore & Retención Forense</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Cálculo criptográfico de hashes SHA-256 en cada evidencia, pegado directo desde portapapeles (<kbd>Ctrl+V</kbd>), políticas de retención con respaldos comprimidos y exportación a PDF ejecutivo con capturas incrustadas.
        </p>
      </div>
    </div>

    <h2><i class="fas fa-star"></i> Funcionalidades Destacadas</h2>
    
    <ul>
      <li><strong>📋 Expediente de Caso con Taxonomía de 4 Ejes:</strong> Clasificación formal según Actividad Reportada, Incidente Confirmado, Vector de Entrada y Causa Raíz.</li>
      <li><strong>📑 Ficha Deslizante de Activo & Cliente:</strong> Panel lateral sin bloqueo visual para consultar datos de hosting, servidor, enlaces directos a WHMCS y estado administrativo.</li>
      <li><strong>🔍 Gestor de IoCs y Línea de Tiempo:</strong> Extracción de indicadores de compromiso y generación asistida por IA de eventos cronológicos vinculados al caso.</li>
      <li><strong>🛡️ Instalador Guiado para VPS con CSF y Nginx:</strong> Asistente automatizado (<code>setup_vps.sh</code>) con mitigación automática de iptables en CSF Firewall, reverse proxy Nginx con SSL y Docker Compose.</li>
      <li><strong>👥 Control de Acceso Basado en Roles (RBAC):</strong> Gestión de usuarios (Admin, Supervisor, Analista, Solo Lectura) con permisos por organización (NBX / HP) y contraseñas protegidas con Argon2id.</li>
      <li><strong>📄 Reportes Ejecutivos en PDF:</strong> Compilación vectorial con membrete oficial, firmas analíticas, tabla estructurada de medidas de contención y renderizado de imágenes de Datastore.</li>
    </ul>

    <h2><i class="fas fa-diagram-project"></i> Arquitectura del Flujo Operativo</h2>
    <pre><code>[Reporte de Abuso (Email / Zammad / WHMCS / PDF / OCR)]
                 │
                 ▼
     [Normalizador & Ingesta Multi-Canal]
                 │
                 ▼
     [Clasificación Híbrida — 4 Ejes SOC]
                 │
                 ▼
     [Consola React — Expediente de Caso]
     ├─ Bitácora Forense WYSIWYG en Tiempo Real
     ├─ Ficha Lateral de Activo & Cliente (WHMCS)
     ├─ Ejecución Supervisada de Playbooks (11 Categorías)
     ├─ Asistente Copiloto SOC Flotante (Gemini AI)
     └─ Inserción de Evidencias al Datastore (SHA-256)
                 │
        ┌────────┴────────────────────────┐
        ▼                                 ▼
[DFIR-IRIS REST API]             [Generador de Dictámenes PDF]
 (Casos, Notas, IoCs & Datastore)  (Reporte Ejecutivo con Membrete)</code></pre>

    <h2><i class="fas fa-terminal"></i> Instalación y Despliegue Rápido</h2>
    <p>Para instalar en un servidor VPS (AlmaLinux, Rocky, Debian, Ubuntu):</p>
    
    <pre><code># 1. Clonar el repositorio
git clone https://github.com/caap1234/Chamba.git
cd Chamba/secops/iris_abuse_sync

# 2. Ejecutar el asistente de instalación interactivo
chmod +x setup_vps.sh
./setup_vps.sh</code></pre>

    <div style="background: rgba(224, 109, 39, 0.1); border-left: 4px solid var(--autumn-orange); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-top: 2rem;">
      <h4 style="margin: 0 0 0.5rem 0; color: var(--autumn-orange);"><i class="fas fa-code-branch"></i> Repositorio y Documentación</h4>
      <p style="margin: 0; font-size: 0.95rem;">
        Consulta el código fuente completo, esquemas y guías de despliegue en:
        <a href="https://github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync" target="_blank" style="font-weight: 700;">github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync</a>
      </p>
    </div>
  </div>
</div>
