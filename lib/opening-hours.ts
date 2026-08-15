// Clayvio Cafe opening hours
// Opens at 9:00 AM, closes at 8:30 PM (Asia/Calcutta timezone)

export const OPENING_HOUR = 9;
export const CLOSING_HOUR = 20.5; // 8:30 PM
export const OPENING_TIME_LABEL = '9:00 AM';
export const CLOSING_TIME_LABEL = '8:30 PM';

export function getCafeStatus(now: Date = new Date()): {
  isOpen: boolean;
  message: string;
  timeMessage: string;
} {
  // Use Asia/Calcutta timezone
  const istTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Calcutta' })
  );

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentTime = hours + minutes / 60;

  const isOpen = currentTime >= OPENING_HOUR && currentTime < CLOSING_HOUR;

  if (isOpen) {
    return {
      isOpen: true,
      message: 'OPEN NOW',
      timeMessage: `OPEN DAILY · ${OPENING_TIME_LABEL} — ${CLOSING_TIME_LABEL}`,
    };
  }

  return {
    isOpen: false,
    message: `CLOSED · OPENS AT ${OPENING_TIME_LABEL}`,
    timeMessage: `OPEN DAILY · ${OPENING_TIME_LABEL} — ${CLOSING_TIME_LABEL}`,
  };
}

export function getTimeAwareMessage(now: Date = new Date()): string {
  const istTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Calcutta' })
  );

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentTime = hours + minutes / 60;

  if (currentTime >= 9 && currentTime < 12) {
    return 'Mornings start better with chai.';
  }
  if (currentTime >= 12 && currentTime < 17) {
    return 'Take a break. Stay for a while.';
  }
  if (currentTime >= 17 && currentTime < 20.5) {
    return 'Evenings are better at Clayvio.';
  }
  return "We're closed for today. See you tomorrow at 9.";
}