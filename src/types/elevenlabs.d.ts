
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'agent-id': string;
      'theme'?: 'light' | 'dark';
      'position'?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
      'button-text'?: string;
      'welcome-message'?: string;
      'placeholder-text'?: string;
      'header-text'?: string;
      'expanded'?: 'true' | 'false';
    }, HTMLElement>;
  }
}
