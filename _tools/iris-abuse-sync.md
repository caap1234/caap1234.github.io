---
layout: tool
title: "DFIR-IRIS Abuse Sync"
category: "SecOps / Automatización DFIR"
language: "Python, FastAPI, DFIR-IRIS API, Jinja2, Chrome Headless"
description: "Plataforma de automatización SOC para ingestión de reportes de abuso, clasificación con LLMs/heurística, sincronización con DFIR-IRIS y generación de informes ejecutivos en PDF."
usage_summary: "Ingesta de PDFs/tickets de abuso, categorización automática, datastore de evidencias con hashes SHA-256 y exportación de reportes ejecutivos."
github_url: "https://github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync"
---

<div class="page-container" style="padding-top: 0;">
  <article class="article-header" style="border-bottom: 2px solid var(--autumn-orange);">
    <h1 class="article-title">🛡️ DFIR-IRIS Abuse Sync</h1>
    <p class="hero-subtitle" style="color: var(--autumn-amber); font-size: 1.2rem;">
      Automatización Inteligente de Ingesta de Abuso, Creación de Casos en DFIR-IRIS y Reportes Ejecutivos
    </p>

    <!-- Badges de Tecnologías -->
    <div class="card-tag-row" style="margin-top: 1.25rem;">
      <span class="badge badge-secops"><i class="fab fa-python"></i> Python 3.10+ / FastAPI</span>
      <span class="badge badge-tech"><i class="fas fa-shield-halved"></i> DFIR-IRIS REST API</span>
      <span class="badge badge-secops"><i class="fas fa-brain"></i> Ollama / Heurística</span>
      <span class="badge badge-tech"><i class="fas fa-file-pdf"></i> Chrome Headless PDF</span>
      <span class="badge badge-secops"><i class="fas fa-database"></i> Datastore Evidence Sync</span>
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
      <strong>DFIR-IRIS Abuse Sync</strong> es una solución desarrollada para optimizar los flujos de respuesta del Centro de Operaciones de Seguridad (SOC) y el área de Abuso/SecOps. Automatiza la lectura de reportes de abuso procedentes de helpdesks, PDFs y correos, procesa la evidencia técnica y crea casos tipificados directamente en la plataforma <strong>DFIR-IRIS</strong>.
    </p>
    <p>
      La plataforma integra una interfaz web moderna y reactiva que permite a los analistas revisar la clasificación, previsualizar en vivo el Markdown generado, adjuntar capturas de pantalla al <strong>Datastore oficial de IRIS</strong> y compilar informes ejecutivos de alta calidad en PDF con motor headless.
    </p>

    <h2><i class="fas fa-layer-group"></i> Capacidades Principales</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-file-lines"></i> 1. Ingesta & Parser OCR</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Extracción automática de metadatos desde PDFs o texto: dominios, direcciones IP, URLs fraudulentas, cuentas autenticadas, números de ticket y capturas del análisis Bastion.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--cyan-bright);"><i class="fas fa-tags"></i> 2. Clasificación Híbrida</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Motor dual con heurística de alta velocidad y soporte opcional para LLMs locales (Ollama/Llama3). Clasifica automáticamente en Phishing, Malware, Spam, Marca, Fraude o Red.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--green-easy);"><i class="fas fa-database"></i> 3. Datastore & Evidencias</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Almacenamiento directo de capturas y archivos en el Datastore de DFIR-IRIS, calculando automáticamente su hash criptográfico SHA-256 e integrándolas en el caso.
        </p>
      </div>
    </div>

    <h2><i class="fas fa-star"></i> Funcionalidades Destacadas</h2>
    
    <ul>
      <li><strong>👁️ Vista Previa en Vivo de Markdown:</strong> Visualización simultánea del Markdown y su renderizado HTML con estilos ejecutivos en notas, descripciones e informes.</li>
      <li><strong>📂 Gestión Integral de Casos DFIR-IRIS:</strong> Panel dedicado para auditar casos activos, filtrar por estado (abiertos/cerrados) y por organización (Neubox / Hospedando).</li>
      <li><strong>📋 Pegado Rápido de Capturas (<kbd>Ctrl+V</kbd> / <kbd>Cmd+V</kbd>):</strong> Inserción ágil de capturas de pantalla desde el portapapeles directamente al Datastore de IRIS y al reporte en elaboración.</li>
      <li><strong>🏷️ Atributos de Identificación Dinámicos:</strong> Edición bidireccional en tiempo real de los campos personalizados del caso (Ticket SOC, ID de cliente, activo afectado y servidor).</li>
      <li><strong>📥 Compilación a PDF Ejecutivo (Chrome Headless):</strong> Generación de informes profesionales para clientes y áreas legales, incluyendo logotipo de la organización, resumen técnico y capturas incrustadas con resolución nativa.</li>
    </ul>

    <h2><i class="fas fa-diagram-project"></i> Diagrama de Flujo del Proceso</h2>
    <pre><code>[Ticket / PDF de Abuso]
         │
         ▼
[TicketParser & OCR Engine]
         │
         ▼
[TemplateClassifier (Heurística / Ollama LLM)]
         │
         ▼
[Web UI — Previsualización & Ajuste de Metadatos]
  ├─ Edición de Notas & Atributos de Identificación
  ├─ Inserción de Capturas al Datastore (SHA-256)
  └─ Generación de Reporte Markdown (Jinja2)
         │
         ├────────────────────────────────────────┐
         ▼                                        ▼
[DFIR-IRIS API (Casos & Datastore)]      [Google Chrome Headless]
 (Sincronización de Casos y Evidencias)   (Compilación a PDF Ejecutivo)</code></pre>

    <h2><i class="fas fa-terminal"></i> Despliegue y Uso Rápido</h2>
    <p>Para inicializar el servicio en local o en un servidor:</p>
    
    <pre><code># 1. Navegar al directorio del proyecto
cd secops/iris_abuse_sync

# 2. Configurar las variables de entorno
cp .env.example .env
# Configura tu IRIS_URL y IRIS_API_KEY en .env

# 3. Iniciar el servicio en segundo plano
./start.sh start

# 4. Abrir la interfaz web en tu navegador:
# http://localhost:8080</code></pre>

    <div style="background: rgba(224, 109, 39, 0.1); border-left: 4px solid var(--autumn-orange); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-top: 2rem;">
      <h4 style="margin: 0 0 0.5rem 0; color: var(--autumn-orange);"><i class="fas fa-code-branch"></i> Código Fuente & Documentación</h4>
      <p style="margin: 0; font-size: 0.95rem;">
        Puedes consultar el código fuente completo, plantillas de reporte y módulos de conexión en el repositorio de GitHub: 
        <a href="https://github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync" target="_blank" style="font-weight: 700;">github.com/caap1234/Chamba/tree/main/secops/iris_abuse_sync</a>
      </p>
    </div>
  </div>
</div>
