'use client' ;
{/*imports the theme provider  */}

import { ThemeProvider as NextThemesProvider} from 'next-themes';

export function ThemeProvider({ children, ...props }) {
return <NextThemesProvider {...props}> {children} </NextThemesProvider>
}
