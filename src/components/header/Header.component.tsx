import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';

export const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold dark:text-white flex items-center gap-2">
        <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
        Premier League
      </h1>
      <ThemeSwitch />
    </div>
  );
}; 