import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Windsurf Tarragona - Escuela Náutica'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative wave border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Windsurf Tarragona
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: 'white',
              marginTop: '24px',
              opacity: 0.95,
            }}
          >
            Escuela Náutica · Playa Larga, Tarragona · Costa Dorada
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
