import GetStartedButton from '@/components/GetStartedButton';
import Image from 'next/image';

interface HeaderProps {
  secondaryText: string;
  headerText: string;
  description: string;
  showButton?: boolean;
  useImage?: boolean;
  imageUrl?: string | null;
}

export default function Header({
  secondaryText,
  headerText,
  description,
  showButton = true,
  useImage = false,
  imageUrl = null
}: HeaderProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-light overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid ${useImage ? 'grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center' : 'grid-cols-1'}`}>
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              {secondaryText}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              {headerText}
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              {description}
            </p>
            {showButton && (
              <div className="mt-8">
                <GetStartedButton />
              </div>
            )}
          </div>

          {useImage && (
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-sage/10 border border-dark/10 flex items-center justify-center">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={headerText}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-accent/50 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-dark-200 text-sm">Image placeholder</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
