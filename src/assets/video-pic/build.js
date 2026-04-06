const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const dir = __dirname;
const files = fs.readdirSync(dir)
  .filter(f => f.toLowerCase().startsWith('screenshot') && f.endsWith('.png'))
  .sort();

if (files.length === 0) {
  console.log("No PNG files found.");
  process.exit(1);
}

const outPath = path.join(dir, '..', '..', '..', 'public', 'demo.mp4');

const DURATION_PER_IMG = 1.5;
const FADE_DUR = 0.5;
const W = 1920;
const H = 1080;

let command = ffmpeg();
files.forEach(f => {
  command = command.input(path.join(dir, f));
  command = command.inputOptions([
    `-loop 1`,
    `-framerate 30`,
    `-t ${DURATION_PER_IMG}`
  ]);
});

let complexFilter = [];
for (let i = 0; i < files.length; i++) {
  complexFilter.push(
    `[${i}:v]scale=${W}:${H}:force_original_aspect_ratio=decrease,pad=${W}:${H}:trunc((ow-iw)/2):trunc((oh-ih)/2),setsar=1,format=yuv420p[v${i}]`
  );
}

// Xfade
let lastOut = `v0`;
for (let i = 1; i < files.length; i++) {
  const offset = i * (DURATION_PER_IMG - FADE_DUR);
  const nextOut = i === files.length - 1 ? 'out' : `x${i}`;
  complexFilter.push(
    `[${lastOut}][v${i}]xfade=transition=fade:duration=${FADE_DUR}:offset=${offset}[${nextOut}]`
  );
  lastOut = nextOut;
}

// Ensure at least two images are there, otherwise just take v0
if (files.length === 1) {
  complexFilter.push(`[v0]copy[out]`);
}

command.complexFilter(complexFilter, lastOut)
  .outputOptions('-r 30') // framerate
  .outputOptions('-c:v libx264')
  .outputOptions('-preset fast')
  .outputOptions('-y')
  .on('start', (cmdLine) => {
    console.log('Spawned Ffmpeg with command: ' + cmdLine);
  })
  .on('end', () => {
    console.log('Video generated successfully!');
  })
  .on('error', (err) => {
    console.error('Error generating video:', err);
  })
  .save(outPath);
