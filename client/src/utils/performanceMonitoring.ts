/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals: LCP, FID, CLS
 */

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'poor' | 'needs-improvement';
}

/**
 * Track Largest Contentful Paint (LCP)
 * Target: < 2.5s for good performance
 */
export function trackLCP(callback: (metric: WebVitalsMetric) => void) {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        const metric: WebVitalsMetric = {
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: getMetricRating('LCP', lastEntry.renderTime || lastEntry.loadTime),
        };
        
        callback(metric);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Disconnect after first contentful paint
      return () => observer.disconnect();
    } catch (e) {
      console.error('Error tracking LCP:', e);
    }
  }
  
  return () => {};
}

/**
 * Track Cumulative Layout Shift (CLS)
 * Target: < 0.1 for good performance
 */
export function trackCLS(callback: (metric: WebVitalsMetric) => void) {
  if ('PerformanceObserver' in window) {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            
            const metric: WebVitalsMetric = {
              name: 'CLS',
              value: clsValue,
              rating: getMetricRating('CLS', clsValue),
            };
            
            callback(metric);
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      
      return () => observer.disconnect();
    } catch (e) {
      console.error('Error tracking CLS:', e);
    }
  }
  
  return () => {};
}

/**
 * Track First Input Delay (FID)
 * Target: < 100ms for good performance
 */
export function trackFID(callback: (metric: WebVitalsMetric) => void) {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        for (const entry of entries) {
          const metric: WebVitalsMetric = {
            name: 'FID',
            value: (entry as any).processingDuration,
            rating: getMetricRating('FID', (entry as any).processingDuration),
          };
          
          callback(metric);
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
      
      return () => observer.disconnect();
    } catch (e) {
      console.error('Error tracking FID:', e);
    }
  }
  
  return () => {};
}

/**
 * Get performance metric rating
 */
function getMetricRating(metric: string, value: number): 'good' | 'poor' | 'needs-improvement' {
  const thresholds: { [key: string]: { good: number; needsImprovement: number } } = {
    LCP: { good: 2500, needsImprovement: 4000 },
    FID: { good: 100, needsImprovement: 300 },
    CLS: { good: 0.1, needsImprovement: 0.25 },
  };

  const threshold = thresholds[metric];
  if (!threshold) return 'needs-improvement';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Initialize all performance monitoring
 */
export function initPerformanceMonitoring() {
  // Only in production
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const unsubscribers: Array<() => void> = [];

  unsubscribers.push(
    trackLCP((metric) => {
      console.log(`${metric.name}: ${metric.value.toFixed(0)}ms (${metric.rating})`);
    })
  );

  unsubscribers.push(
    trackCLS((metric) => {
      console.log(`${metric.name}: ${metric.value.toFixed(3)} (${metric.rating})`);
    })
  );

  unsubscribers.push(
    trackFID((metric) => {
      console.log(`${metric.name}: ${metric.value.toFixed(0)}ms (${metric.rating})`);
    })
  );

  return () => unsubscribers.forEach((unsub) => unsub());
}
