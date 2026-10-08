---
layout: tool
title: "SentinelX SIEM v2.0"
category: "SIEM & Monitoreo Enterprise"
language: "Python, FastAPI, Astro, PostgreSQL, OpenSearch, MinIO, NATS"
description: "Plataforma Enterprise de Gestión de Eventos e Información de Seguridad (SIEM) ligera, escalable y optimizada para entornos Linux y cPanel/WHM."
usage_summary: "Tri-almacenamiento (PostgreSQL + OpenSearch + MinIO S3), motor asíncrono NATS JetStream y alertas SOC en tiempo real."
---

<div class="page-container" style="padding-top: 0;">
  <article class="article-header" style="border-bottom: 2px solid var(--autumn-orange);">
    <h1 class="article-title">🛡️ SentinelX SIEM v2.0</h1>
    <p class="hero-subtitle" style="color: var(--autumn-amber); font-size: 1.2rem;">
      Security Information and Event Management (SIEM) para Infraestructuras Distribuidas y Entornos Web Hosting
    </p>

    <!-- Badges de Tecnologías -->
    <div class="card-tag-row" style="margin-top: 1.25rem;">
      <span class="badge badge-secops"><i class="fab fa-python"></i> Python 3 / FastAPI</span>
      <span class="badge badge-tech"><i class="fas fa-rocket"></i> Astro Frontend</span>
      <span class="badge badge-secops"><i class="fas fa-database"></i> PostgreSQL 16</span>
      <span class="badge badge-tech"><i class="fas fa-magnifying-glass"></i> OpenSearch 2.x</span>
      <span class="badge badge-secops"><i class="fas fa-box-archive"></i> MinIO S3 Evidence</span>
      <span class="badge badge-tech"><i class="fas fa-bolt"></i> NATS JetStream</span>
    </div>

    <!-- Botón directo al repositorio -->
    <div style="margin-top: 1.5rem;">
      <a href="https://github.com/caap1234/SIEM-SentinelXv2.0" target="_blank" class="btn-primary" style="font-size: 0.95rem;">
        <i class="fab fa-github"></i> Repositorio Oficial en GitHub &rarr;
      </a>
    </div>
  </article>

  <div class="content-body">
    <h2><i class="fas fa-eye"></i> Resumen General (Overview v2.0)</h2>
    <p>
      <strong>SentinelX SIEM v2.0</strong> es una plataforma de inteligencia de seguridad de nivel empresarial diseñada para la ingesta, normalización, correlación y análisis de registros de seguridad (*security logs*) en servidores Linux y paneles de control como <strong>cPanel/WHM</strong>, <strong>DirectAdmin</strong> y <strong>Plesk</strong>.
    </p>
    <p>
      La versión 2.0 evoluciona hacia una arquitectura desglosada de **Tri-Almacenamiento (Tri-Storage)** para garantizar un rendimiento óptimo sin impactar los recursos del servidor monitoreado.
    </p>

    <h2><i class="fas fa-layer-group"></i> Arquitectura Tri-Storage v2.0</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--autumn-orange);"><i class="fas fa-database"></i> 1. PostgreSQL 16</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Gestión del estado del sistema, autenticación RBAC multi-tenant, reglas de correlación, inventario de listas dinámicas y metadatos de alertas e incidentes.
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--cyan-bright);"><i class="fas fa-magnifying-glass"></i> 2. OpenSearch 2.x</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Almacenamiento analítico de alto volumen de eventos indexados. Permite búsqueda de texto completo (*Full-Text Search*) e investigación de amenazas (*Threat Hunting*).
        </p>
      </div>

      <div class="card" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; margin-top: 0; color: var(--green-easy);"><i class="fas fa-box-archive"></i> 3. MinIO (S3 Object Storage)</h3>
        <p style="font-size: 0.88rem; color: var(--text-dim);">
          Almacén inmutable de evidencia forense, captura de paquetes de auditoría y reportes gerenciales generados en PDF/HTML.
        </p>
      </div>
    </div>

    <h2><i class="fas fa-star"></i> Características Principales de SentinelX v2.0</h2>
    
    <ul>
      <li><strong>🚀 Instalador Automático de 1 Comando (`setup_sentinelx.sh`):</strong> Despliegue idempotente en servidores limpios (Ubuntu, Debian, AlmaLinux, RHEL) y servidores cPanel/WHM activos.</li>
      <li><strong>🛡️ Gestión Dinámica de Listas de Seguridad:</strong> Control desde la interfaz de Whitelists, excepciones de reglas y **BlacklistMaster** (`shared`, `pmg`, `ignore`) con almacenamiento en caché en memoria TTL.</li>
      <li><strong>⚡ Motor Asíncrono desacoplado en NATS JetStream:</strong> Proceso de ingesta desacoplado con trabajadores especializados: `parsing_worker` (normalización de logs y GeoIP) y `engine_worker` (evaluación de reglas y risk scoring).</li>
      <li><strong>🌍 GeoIP & Behavioral Risk Scoring:</strong> Enriquecimiento geográfico IP, mapeo ASN, puntuación por decaimiento de tiempo (*time-decay*) y rastreo de entidades sospechosas.</li>
      <li><strong>📊 Motor de Reportes SOC Automatizados:</strong> Generación periódica (semanal/mensual) de reportes ejecutivos en PDF/HTML con políticas de retención.</li>
      <li><strong>⚙️ Coexistencia Transparente con cPanel/WHM:</strong> Operación aislada en `/opt/sentinelx` utilizando puertos reservados no conflictivos (`8000`, `4321`, `5432`, `9200`, `9000`, `4222`).</li>
    </ul>

    <h2><i class="fas fa-diagram-project"></i> Diagrama de Flujo de Datos v2.0</h2>
    <pre><code>[Servidores Monitoreados / cPanel / ModSec / Syslog]
                       │
                       ▼
        [FastAPI Ingest Service (Port 8000)]
                       │
                       ▼
           [NATS JetStream Event Queue]
           ┌───────────┴───────────┐
           ▼                       ▼
   [Parsing Worker]        [Engine Worker]
   (GeoIP & Normal)       (Risk Scoring & Rules)
           │                       │
     ┌─────┴───────────┬───────────┴─────┐
     ▼                 ▼                 ▼
[OpenSearch 2.x]  [PostgreSQL 16]   [MinIO S3 Evidence]
 (Events Log)      (State & Lists)    (SOC Reports)
                       ▲
                       │
             [Astro Web Dashboard]</code></pre>

    <h2><i class="fas fa-terminal"></i> Despliegue e Instalación Rápida</h2>
    <p>Para desplegar SentinelX SIEM v2.0 en un VPS Linux o servidor cPanel/WHM:</p>
    
    <pre><code># 1. Clonar el repositorio oficial
git clone https://github.com/caap1234/SIEM-SentinelXv2.0.git /opt/sentinelx
cd /opt/sentinelx

# 2. Asignar permisos y ejecutar el instalador de producción
chmod +x setup_sentinelx.sh
./setup_sentinelx.sh</code></pre>

    <div style="background: rgba(224, 109, 39, 0.1); border-left: 4px solid var(--autumn-orange); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-top: 2rem;">
      <h4 style="margin: 0 0 0.5rem 0; color: var(--autumn-orange);"><i class="fas fa-code-branch"></i> Código Fuente & Documentación Completa</h4>
      <p style="margin: 0; font-size: 0.95rem;">
        Puedes consultar la documentación de arquitectura, guías de instalación de agentes y suites de pruebas unitarias en el repositorio oficial de GitHub: 
        <a href="https://github.com/caap1234/SIEM-SentinelXv2.0" target="_blank" style="font-weight: 700;">github.com/caap1234/SIEM-SentinelXv2.0</a>
      </p>
    </div>
  </div>
</div>
