import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      skipHtml={false} // ensure HTML is rendered
    >
      {content}
    </ReactMarkdown>
  );
}
