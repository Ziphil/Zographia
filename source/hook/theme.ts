//

import {useCallback, useEffect} from "react";


export function useTheme(): string {
  const theme = document.documentElement.dataset.theme ?? "";
  return theme;
}

export function useChangeTheme(): (theme: string) => void {
  const changeTheme = useCallback(function (theme: string): void {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("zp-theme", theme);
  }, []);
  return changeTheme;
}

export function useInitializeTheme(initialTheme: string): void {
  const changeTheme = useChangeTheme();
  useEffect(() => {
    const theme = localStorage.getItem("zp-theme") ?? initialTheme;
    changeTheme(theme);
  }, [initialTheme, changeTheme]);
}
