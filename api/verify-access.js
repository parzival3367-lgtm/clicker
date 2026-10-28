import { createHash, timingSafeEqual } from 'node:crypto';

const ACCESS_TIERS = [
  { name: 'basic', env: 'ACCESS_KEY_BASIC' },
  { name: 'premium', env: 'ACCESS_KEY_PREMIUM' },
  { name: 'admin', env: 'ACCESS_KEY_ADMIN' }
];

function hash(value) {
  return createHash('sha256').update(value, 'utf8').digest();
}

export default function verifyAccess(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const configuredTiers = ACCESS_TIERS.filter(({ env }) => process.env[env]);
  if (configuredTiers.length === 0) {
    return response.status(503).json({ error: 'Access keys are not configured.' });
  }

  const key = request.body?.key;
  if (typeof key !== 'string' || key.length === 0 || key.length > 512) {
    return response.status(400).json({ error: 'Enter a valid access key.' });
  }

  const submittedHash = hash(key);
  let matchedTier;

  for (const tier of configuredTiers) {
    if (timingSafeEqual(submittedHash, hash(process.env[tier.env]))) {
      matchedTier = tier.name;
    }
  }

  if (!matchedTier) {
    return response.status(401).json({ error: 'Invalid access key.' });
  }

  return response.status(200).json({ tier: matchedTier });
}
