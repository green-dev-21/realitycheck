export const TONES = {
  FRIENDLY: 'friendly',
  BRUTAL: 'brutal',
  PASSIVE_AGGRESSIVE: 'passive-aggressive',
  CORPORATE_HR: 'corporate-hr',
  INDIAN_PARENT: 'indian-parent',
  WHATSAPP: 'whatsapp'
};

export const TONE_LABELS = {
  'friendly': 'Friendly',
  'brutal': 'Brutal',
  'passive-aggressive': 'Passive-Aggressive',
  'corporate-hr': 'Corporate HR',
  'indian-parent': 'Indian Parent',
  'whatsapp': 'WhatsApp'
};

export const TONE_EMOJIS = {
  'friendly': '💙',
  'brutal': '🔥',
  'passive-aggressive': '😊',
  'corporate-hr': '📊',
  'indian-parent': '🇮🇳',
  'whatsapp': '💬'
};

export function wrapInTone(message, tone) {
  const toneWrappers = {
    'friendly': (m) => `${m} 🌟`,
    'brutal': (m) => `${m}`,
    'passive-aggressive': (m) => `${m} ...No, it's fine. Do you. 😊`,
    'corporate-hr': (m) => `Per our analysis: ${m.toLowerCase()} Let's circle back to optimize your life KPIs.`,
    'indian-parent': (m) => `Beta, ${m.toLowerCase()} Sharma ji's son is already doing better.`,
    'whatsapp': (m) => `Bhai/sis, ${m.toLowerCase()} 👉🤡 bas itna hi bol skta hu.`
  };
  return toneWrappers[tone]?.(message) ?? message;
}

export const CITY_DOWNPAYMENTS = {
  "Bengaluru": 45000,
  "Mumbai": 75000,
  "Delhi": 35000,
  "Hyderabad": 30000,
  "Chennai": 28000,
  "Pune": 32000
};

export const SUBSCRIPTION_DEFAULTS = [
  { name: "Netflix", price: 15.49 },
  { name: "Spotify", price: 10.99 },
  { name: "Disney+", price: 10.99 },
  { name: "Amazon Prime", price: 14.99 },
  { name: "YouTube Premium", price: 13.99 },
  { name: "ChatGPT Plus", price: 20.00 }
];

export function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function formatCurrency(amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function formatCurrencyExact(amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function calculateSIP(monthly, years, annualReturn = 0.10) {
  const monthlyRate = annualReturn / 12;
  const months = years * 12;
  return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
}
