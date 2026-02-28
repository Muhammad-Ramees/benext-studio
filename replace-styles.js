const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js') && !fullPath.includes('.next') && !fullPath.includes('node_modules')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Remove inline style={{ fontFamily: '...' }}
            content = content.replace(/style=\{\{\s*fontFamily:[^{}]*\}\}/g, '');
            // Clean up empty style={} left over
            content = content.replace(/style=\{\{\s*\}\}/g, '');
            // replace className="text-electric" with primary colors
            content = content.replace(/text-electric/g, 'text-blue-500');
            content = content.replace(/bg-electric/g, 'bg-blue-600');
            content = content.replace(/border-electric/g, 'border-blue-500/50');

            content = content.replace(/text-muted/g, 'text-gray-500');
            content = content.replace(/text-sub/g, 'text-gray-400');
            content = content.replace(/bg-void/g, 'bg-gray-950');
            content = content.replace(/bg-panel/g, 'bg-gray-900');
            content = content.replace(/border-border/g, 'border-gray-800');

            // Update link hrefs from malaeb to playsa
            content = content.replace(/\/malaeb/g, '/playsa');

            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Updated', fullPath);
        }
    }
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
