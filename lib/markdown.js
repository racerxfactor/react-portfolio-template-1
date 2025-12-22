import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true }) // ← required
    .use(rehypeRaw)                                 // ← required
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
