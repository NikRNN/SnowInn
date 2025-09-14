type Mods = Record<string, boolean | string>; // объект с ключами из стрингов и значениями из стрингов или булевыми

export function classNames(
  cls: string,
  additional: Array<string | undefined> = [],
  mods: Mods = {}
) {
  return [
    cls,
    ...additional.filter(Boolean), //фильтр на случай, если сюда прилетят undefined
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
