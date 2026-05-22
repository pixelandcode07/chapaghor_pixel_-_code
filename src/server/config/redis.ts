import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

// গ্লোবাল ইন্সট্যান্স তৈরি করা যাতে বারবার কানেকশন তৈরি না হয়
const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: null,
});

redis.on('error', (err) => console.error('Redis Client Error:', err));
redis.on('connect', () => console.log('✅ Redis Connected Successfully'));

export default redis;