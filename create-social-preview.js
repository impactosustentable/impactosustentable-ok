import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function createSocialPreview() {
  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#10b981';
  ctx.fillRect(0, 0, width, height);

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Impacto Sustentable', width / 2, height / 2 - 50);

  // Subtitle
  ctx.font = '36px Inter, sans-serif';
  ctx.fillText('Consultoría Ambiental', width / 2, height / 2 + 30);

  // Tagline
  ctx.font = '24px Inter, sans-serif';
  ctx.fillText('Transformamos desafíos ambientales en ventajas competitivas', width / 2, height / 2 + 100);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/social-preview.png', buffer);
  
  console.log('Social preview image created successfully!');
}

createSocialPreview().catch(console.error);
