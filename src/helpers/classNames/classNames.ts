type Mods = Record<string, boolean | string>; // объект с ключами из стрингов и значениями из стрингов или булевыми

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
