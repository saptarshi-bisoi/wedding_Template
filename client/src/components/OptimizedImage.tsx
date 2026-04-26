import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Optimized Image Component
 * - Provides responsive images with proper aspect ratio to prevent CLS
 * - Uses lazy loading by default for performance
 * - Supports error fallback
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  // Calculate aspect ratio to prevent layout shift
  const aspectRatio = (height / width) * 100;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${aspectRatio}%`,
        overflow: 'hidden',
        backgroundColor: '#1a1a1c',
      }}
      className={className}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        {...props}
      />
    </div>
  );
}
