export function Stat({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">
        {value}
      </div>
      <div className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
        {label}
      </div>
      {sublabel && (
        <div className="text-[11px] font-medium text-slate-400">
          {sublabel}
        </div>
      )}
    </div>
  );
}
