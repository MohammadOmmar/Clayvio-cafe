import { cn } from '@/lib/utils';

export default function DesignerSignature({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-6 left-6 z-40',
        'sm:bottom-8 sm:left-8',
        className
      )}
      aria-hidden="true"
    >
      <div className="group flex items-center gap-2.5">
        <span className="block h-px w-4 bg-espresso-400/30 transition-all duration-300 group-hover:w-6 group-hover:bg-espresso-500/50" />
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-espresso-400/40 transition-colors duration-300 group-hover:text-espresso-500/70 sm:text-[11px]">
          OMMANZ
        </span>
      </div>
    </div>
  );
}
