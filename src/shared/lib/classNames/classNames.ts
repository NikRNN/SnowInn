export type Mods = Record<string, boolean | string | undefined>; // объект с ключами из стрингов и значениями из стрингов или булевыми

export function classNames(cls: string, additional: Array<string | undefined> = [], mods: Mods = {}): string {
    return [
        cls,
        ...additional.filter(Boolean), // на случай, если прилетит undefined
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(" ");
}
