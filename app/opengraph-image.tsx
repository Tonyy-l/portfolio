import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} - ${site.title}`;
export const size = {
  width: 1200,
  height: 630
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(circle at top left, rgba(125, 211, 252, 0.24), transparent 30%), linear-gradient(180deg, #05070d 0%, #0b1220 100%)',
          color: '#EAF0FF',
          padding: '64px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
          <div style={{ fontSize: 28, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7DD3FC' }}>{site.name}</div>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 700 }}>{site.title}</div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: '#9BA9C7' }}>{site.description}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#9BA9C7' }}>
          <span>Next.js • TypeScript • Shopify</span>
          <span>portfolio studio</span>
        </div>
      </div>
    ),
    size
  );
}
