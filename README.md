# github-pages-gulptask-integration-test

Integration test repository for GitHub Pages deployment action with gulptask-demo-page bundler.

## Purpose

This repository serves as an integration test to validate:
- Compatibility between official GitHub Pages actions and gulptask-demo-page custom bundler
- Automated deployment workflows using `actions/deploy-pages` and `actions/upload-pages-artifact`
- Proper GitHub Actions security practices with minimal required permissions

## Setup

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development

Build demo pages locally:
```bash
npm run build
```

Watch mode for development:
```bash
npm run watch
```

## GitHub Actions Workflow

The repository uses the following workflow:

1. **Build Job**: 
   - Checks out the code
   - Sets up Node.js environment
   - Installs dependencies
   - Builds demo pages using gulptask-demo-page
   - Uploads artifact using `actions/upload-pages-artifact@v3`

2. **Deploy Job**:
   - Deploys to GitHub Pages using `actions/deploy-pages@v4`
   - Runs only after successful build
   - Uses proper permissions (contents: read, pages: write, id-token: write)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Pages deployment workflow
├── demoSrc/                    # Demo source files (TypeScript)
│   └── demo_hello.ts          # Sample demo page
├── docs/                       # Generated demo pages (gitignored)
│   └── demo/                  # Output directory
├── package.json               # Project configuration
└── README.md                  # This file
```

## License

MIT
