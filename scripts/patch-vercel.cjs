const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', '@astrojs', 'vercel', 'dist', 'serverless', 'adapter.js');

if (fs.existsSync(target)) {
  let content = fs.readFileSync(target, 'utf8');
  content = content.replace(
    /const SUPPORTED_NODE_VERSIONS = \{[\s\S]*?\};/,
    `const SUPPORTED_NODE_VERSIONS = {
    18: { status: 'retiring', removal: 'Early 2025', warnDate: new Date('October 1 2024') },
    20: { status: 'default' },
    22: { status: 'default' },
    24: { status: 'default' },
    25: { status: 'default' },
};`
  );
  content = content.replace(/return 'nodejs18\.x';/g, "return `nodejs${major || 24}.x`;");
  fs.writeFileSync(target, content, 'utf8');
  console.log('Successfully patched @astrojs/vercel for Node 24 support!');
} else {
  console.log('Target file not found, skipping patch.');
}
