export interface Project {
  name: string;
  npmPackage?: string;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl: string;
  npmUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'ui-kit',
    npmPackage: '@jbpark/ui-kit',
    tagline: 'React component library',
    description:
      'A React 19 component library organized with Atomic Design, built as a Turborepo monorepo with a Next.js demo/landing app and Storybook docs.',
    stack: ['React 19', 'Next.js 16', 'Tailwind CSS 4', 'Turborepo'],
    githubUrl: 'https://github.com/pjb0811/ui-kit',
    npmUrl: 'https://www.npmjs.com/package/@jbpark/ui-kit',
    demoUrl: 'https://ui-kit-web.vercel.app',
  },
  {
    name: 'use-hooks',
    npmPackage: '@jbpark/use-hooks',
    tagline: 'React hooks collection',
    description:
      'A collection of reusable React 19 hooks for common UI and interaction patterns — debounce, throttle, scroll, viewport, timeline, and more.',
    stack: ['React 19', 'TypeScript'],
    githubUrl: 'https://github.com/pjb0811/use-hooks',
    npmUrl: 'https://www.npmjs.com/package/@jbpark/use-hooks',
    demoUrl: 'https://use-hooks-lab.vercel.app',
  },
  {
    name: 'live-editor',
    npmPackage: '@jbpark/live-editor',
    tagline: 'Live UI editor & code sync',
    description:
      'An interactive UI editor with real-time preview and drag-and-drop. Canvas edits sync back to source code via AST transforms, rendered in an isolated iframe (not a security sandbox).',
    stack: ['React', 'dnd-kit', 'CodeMirror', 'Babel AST'],
    githubUrl: 'https://github.com/pjb0811/live-editor',
    demoUrl: 'https://live-editor.vercel.app',
  },
];
