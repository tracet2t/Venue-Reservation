export function isUrlAllowed(pathname: string, blacklist: string[]): boolean {
    return !blacklist.some(path => pathname.startsWith(path));
} 