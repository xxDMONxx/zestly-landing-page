# Zestly — Data Harvest • Framer Handoff

Este paquete contiene assets y guía para recrear la landing en Framer y exportar el archivo .framer.

## 1) Tokens de marca (copiar a Framer como Color Styles)
- leaf: 500 #3DB77E, 600 #2F9767, 700 #267855
- lemon: 400 #FFD31E, 500 #FFBF0A, 700 #A67708
- harvest: 400 #FFB545, 500 #FF9A1A
- orchard: 500 #EA6A2A
- sand: 50 #FBFAF9, 200 #EBE6DF, 700 #6F6254, 900 #4B423B
- dark (charcoal): slate-950 #0A0A0B, slate-900 #0F172A, slate-800 #1F2937

Tipografía: Inter (400/500/600/700) o sistema sans.

## 2) Tipos y escala (equivalente Tailwind)
- H1: text-5xl/6xl, 700
- H2: text-3xl, 700
- Body: text-base/ lg, 400–500
- Botón: 14–16px, 500/600, radius 12–16px
- Espaciado base: 4/8/12/16/24/32/40px

## 3) Componentes (estructura sugerida)
1. Header
   - Logo (SVG cítrico) + wordmark
   - Nav links (Home, Solutions, Pricing, Resources, Contact)
   - CTA Request Demo
   - Menú móvil (Height: 0 → Auto; Opacity 0 → 1)
   - Toggle Light/Dark (opcional en Framer)

2. Hero
   - Title: “Harvest insights before the rush.”
   - Sub: “Zestly transforma datos retail…”
   - Email input + CTA “Book your demo”
   - Toast de éxito (overlay) ~2s
   - Mockup flotante (Y: 0 → -8 → 0, 6s, loop)

3. Differentiators (FeatureCard x3)
   - “No data degree needed”
   - “Show the whole picture”
   - “Predict tomorrow”
   - Hover lift: y -6px, icon scale 1.08

4. How Zestly Works
   - Steps: Pick / Press / Pour
   - Tarjetas con badge + icono + texto

5. Use Cases (4)
   - Inventory Optimization / Customer Segmentation / Margin Enhancement / Seasonal Forecasting
   - Badge con icono y color de acento

6. CTA
   - “Ready to Harvest Your Data?”
   - Botón: “Start Your Free Trial”

7. Footer
   - About + Product/Company links
   - Contact + íconos sociales (invert en dark)

## 4) Animaciones (sugeridas en Framer)
- Entradas de sección: Fade + Slide Up (0.4–0.6s, once)
- Cards Hover: y -6px; icon scale 1.08
- Botones: hover y -1px, tap 0px
- Mockup Hero: Y 0 → -8 → 0, duración 6s, repetición infinita
- Mobile Nav: Height 0 → Auto, Opacity 0 → 1 (spring suave)

## 5) Fondos/estilo
- Light: sand-50 con radial harvest (verde/amarillo suave)
- Dark: charcoal (slate-950) con superficies slate-900/800; textos sand-100/200

## 6) Assets a importar
- public/favicon.svg
- public/logo-citrus.svg
- public/dashboard-mockup.svg
- public/icons/*.svg (time, growth, plug, cart, segment, margin, forecast, twitter, linkedin, github)

## 7) Cómo generar el archivo .framer
1. Abre Framer y crea un proyecto.
2. Define Color Styles con los tokens anteriores y configura Inter.
3. Importa SVGs desde este paquete (panel Assets).
4. Recrea cada sección como Frames (Auto Layout + spacing sugerido).
5. Aplica animaciones con Smart Animate.
6. Archivo → Export → “Export .framer project” para obtener el archivo .framer.
