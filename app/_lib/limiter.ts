// app/_lib/rateLimiter.ts
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(ip: string, maxRequests = 10, windowMs = 15 * 60 * 1000) {
  const now = Date.now()
  const record = requestCounts.get(ip)
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }
  
  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now }
  }
  
  record.count++
  return { allowed: true, remaining: maxRequests - record.count }
}