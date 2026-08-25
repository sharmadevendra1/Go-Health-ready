# Go Health

**Find the right care. Near you.**

Go Health is a healthcare navigation platform designed to make India's public healthcare system easier to understand and use.

## Product principles
- Navigation, not diagnosis
- Verified/attributed information over generated claims
- Mobile-first and low-bandwidth friendly
- English, Hindi and Marathi ready
- Clear distinction between possible eligibility and verified eligibility
- Every facility/service record should carry source and freshness metadata

## Stack
- Next.js
- TypeScript
- Supabase PostgreSQL + PostGIS
- Vercel
- PWA

## Database
The production database is the dedicated Supabase project `go-health-db` in `ap-south-1`. It is intentionally separate from the Society Management database.

## Launch scope
- Facility discovery
- Service navigation
- Government scheme discovery
- Care pathways
- Emergency navigation
- Source/freshness-aware facility information
- Responsive PWA

## Safety
Go Health does not diagnose, prescribe, or replace professional medical care. Government scheme eligibility and facility/service availability must be verified through authoritative sources or the facility.
