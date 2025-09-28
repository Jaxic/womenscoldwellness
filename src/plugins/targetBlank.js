import { visit } from 'unist-util-visit';

/**
 * Custom rehype plugin to automatically add target="_blank" and rel="noopener noreferrer"
 * attributes to all external links in Markdown content.
 * 
 * This plugin identifies external links (those starting with http:// or https://)
 * and adds security and UX attributes to open them in new tabs safely.
 */
export function rehypeTargetBlank() {
  return (tree) => {
    // Visit all link elements in the AST
    visit(tree, 'element', (node) => {
      // Only process anchor tags
      if (node.tagName === 'a') {
        const href = node.properties?.href;
        
        // Check if the link is external (starts with http:// or https://)
        if (href && typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'))) {
          // Initialize properties if they don't exist
          if (!node.properties) {
            node.properties = {};
          }
          
          // Add target="_blank" to open in new tab
          node.properties.target = '_blank';
          
          // Add rel="noopener noreferrer" for security
          // noopener: Prevents the new page from accessing window.opener
          // noreferrer: Prevents sending referrer information to the new page
          node.properties.rel = 'noopener noreferrer';
        }
      }
    });
  };
}