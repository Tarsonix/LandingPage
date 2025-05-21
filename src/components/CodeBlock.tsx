import { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);
  const { toast } = useToast();

  const handleCopy = async () => {
    if (codeRef.current?.textContent) {
      try {
        await navigator.clipboard.writeText(codeRef.current.textContent);
        setCopied(true);
        toast({
          title: "Copied to clipboard",
          description: "Code has been copied to your clipboard",
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <div className="code-block relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-tarsonix-dark-blue/50 border border-tarsonix-blue/20 text-tarsonix-white/70 hover:bg-tarsonix-blue/20 hover:text-tarsonix-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <pre ref={codeRef} className="overflow-x-auto p-4">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock; 