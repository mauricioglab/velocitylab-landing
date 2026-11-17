# landing-velocity

Sitio de la empresa VeloCityLab (velocitylab.com.ar). Astro estático; las charlas (Disertaciones) se leen de la base propia en Supabase con `site = 'velocity'`. Nació de otro repo; el paso a paso de la separación está en `D:\Dev\_Mauglab\contabo\docs\separacion_repos.md`.

## Desarrollo
```bash
npm install
cp .env.example .env   # completar PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY
npm run dev
npm run build
```

## Páginas
`/es/servicios/` (portada), `/es/velocity/`, `/es/portfolio/`, `/es/disertaciones/`, `/es/privacidad/` y sus versiones `/en/…`.

## Pendiente
- Panel de administración propio (hoy las charlas de `velocity` se editan con SQL).
- Workflow de despliegue en Cloudflare y aviso de reconstrucción (`github_repo_velocity` / `github_token_velocity` en `private_settings`).
