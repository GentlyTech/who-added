/**
 * Joins the given class names into a unified string, omitting duplicate class names, empty class names and class names with a value of `"undefined"`.
 * 
 * Also trims each class name so that there are no extra spaces between class names in the resulting string.
 * @param classNames the combination of class names to combine 
 * @returns a unified string with duplicate, blank, and `"undefined"` class names removed
 */
export default function useClassNames(...classNames: (string | undefined)[]): string {
  if (classNames == null) {
    return "";
  }

  const result: string[] = [];

  for (const className of classNames) {
    if (className == null || className.length == 0 || className == "undefined") continue;
    const members = className.split(" ");
    for (const member of members) {
      if (member == "undefined" || result.includes(member)) continue;
      result.push(member.trim());
    }
  }

  return result.join(" ");
}
