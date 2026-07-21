'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme-mode';

type ThemeMode = 'dark' | 'light' | 'system';
type ResolvedTheme = 'dark' | 'light';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === 'system' ? getSystemTheme() : mode;
}

function applyTheme(mode: ThemeMode) {
  const resolvedTheme = resolveTheme(mode);
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
  window.localStorage.setItem(STORAGE_KEY, mode);
}

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light' || stored === 'system') {
    return stored;
  }

  return 'system';
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('dark');

  useEffect(() => {
    const initialMode = getInitialMode();
    const initialSystemTheme = getSystemTheme();

    setMode(initialMode);
    setSystemTheme(initialSystemTheme);
    applyTheme(initialMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = () => {
      const nextSystemTheme = getSystemTheme();
      setSystemTheme(nextSystemTheme);

      if (window.localStorage.getItem(STORAGE_KEY) === 'system') {
        document.documentElement.dataset.theme = nextSystemTheme;
        document.documentElement.style.colorScheme = nextSystemTheme;
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (
        event.key === STORAGE_KEY &&
        (event.newValue === 'dark' || event.newValue === 'light' || event.newValue === 'system')
      ) {
        setMode(event.newValue);
        applyTheme(event.newValue);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    window.addEventListener('storage', handleStorage);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const resolvedTheme = mode === 'system' ? systemTheme : mode;

  const handleClick = () => {
    const nextMode: ThemeMode = mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark';
    setMode(nextMode);
    applyTheme(nextMode);
  };

  const isLight = resolvedTheme === 'light';
  const label =
    mode === 'system'
      ? `Системна тема (${systemTheme === 'light' ? 'светла' : 'тъмна'})`
      : mode === 'light'
        ? 'Светла тема'
        : 'Тъмна тема';

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-text transition hover:border-accent/40 hover:text-accent"
      aria-label={label}
      title={`${label}. Натисни за следващия режим.`}
    >
      {mode === 'system' ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7.5h16v9H4z" />
          <path d="M8 19h8" />
          <path d="M12 16.5V19" />
        </svg>
      ) : isLight ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v2.5" />
          <path d="M12 18.5V21" />
          <path d="M4.9 4.9l1.8 1.8" />
          <path d="M17.3 17.3l1.8 1.8" />
          <path d="M3 12h2.5" />
          <path d="M18.5 12H21" />
          <path d="M4.9 19.1l1.8-1.8" />
          <path d="M17.3 6.7l1.8-1.8" />
          <circle cx="12" cy="12" r="4.2" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 13a8.5 8.5 0 1 1-10-10 7 7 0 0 0 10 10Z" />
        </svg>
      )}
    </button>
  );
}
