import padLeft from 'lodash.padleft';

function pad(value) {
  return padLeft(Math.floor(value) % 60, 2, 0);
}

export function formatSeconds(value) {
  const minutes = pad(value / 60);
  const seconds = pad(value % 60);

  return `${minutes}:${seconds}`;
}

export function formatTime(currentTime, duration) {
  const current = formatSeconds(currentTime);
  const total = formatSeconds(duration);

  return `${current} / ${total}`;
}
