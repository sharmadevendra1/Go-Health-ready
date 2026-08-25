# Go Health

**Find the right care. Near you.**

Go Health is a healthcare-navigation product for India. It helps people find appropriate public healthcare facilities, understand services, discover possible government benefits, and know what to ask for before they travel.

## Product principles
- Navigation, not diagnosis.
- Verified/source-aware information over invented completeness.
- Plain language first; English, Hindi and Marathi ready.
- Location-aware search using PostGIS.
- Government scheme information always points to official verification channels.
- Facility/service freshness and confidence are first-class data.

## Stack
- Next.js + TypeScript
- Supabase PostgreSQL + PostGIS
- Vercel-ready PWA
- Responsive mobile-first UI

## Production database
Dedicated Supabase project: `go-health-db` (`ap-south-1`). It is intentionally separate from the Society Management database.

## Required environment variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Launch scope
- Facility discovery
- Service navigation
- Government scheme discovery
- Care pathways
- Emergency navigation
- Source/freshness-aware facility information
- Responsive PWA

## Safety
Go Health does not diagnose, prescribe, or replace qualified healthcare professionals. Facility availability, service availability and scheme eligibility must be confirmed with the facility or official government source.

## Data integrity
Do not insert fabricated facility records. Every production facility should carry source, source ID/URL, verification state, confidence and last-verified timestamp.
