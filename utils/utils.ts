import sanitize from "sanitize-html";

export function createSanitizedMarkup(input: string = ""): {
  __html: string;
} {
  return { __html: sanitize(input) };
}
