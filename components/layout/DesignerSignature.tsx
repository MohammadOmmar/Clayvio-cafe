import { cn } from '@/lib/utils';

export default function DesignerSignature({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-6 left-6 z-40',
        'sm:bottom-7 sm:left-7',
        className
      )}
      aria-hidden="true"
    >
      <div className="group flex items-center gap-2">
        <span className="block h-px w-3 bg-espresso-400/40 transition-all duration-300 group-hover:w-4 group-hover:bg-espresso-500/60" />
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-espresso-400/60 transition-colors duration-300 group-hover:text-espresso-500/80 sm:text-xs">
          OMMANZ
        </span>
      </div>
    </div>
  );
}
