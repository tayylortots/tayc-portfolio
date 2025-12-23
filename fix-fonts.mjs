import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src/app/components/AdvancedSearchCaseStudy.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix "But wait!!" line - convert Tailwind font class to inline style
content = content.replace(
  /className="absolute font-\['Press_Start_2P:Regular',sans-serif\] text-\[32px\] text-\[#cce4cc\] left-1\/2 -translate-x-1\/2 top-\[57px\] text-center w-\[528px\] leading-\[35px\]">But wait!!</,
  'className="absolute text-[32px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[57px] text-center w-[528px] leading-[35px]" style={{ fontFamily: "\'Press Start 2P\', monospace" }}>But wait!!<'
);

// Fix "An extra CHALLENGE appears" line
content = content.replace(
  /className="absolute font-\['Press_Start_2P:Regular',sans-serif\] text-\[15px\] text-\[#cce4cc\] left-1\/2 -translate-x-1\/2 top-\[106px\] text-center leading-\[35px\] whitespace-nowrap">An/,
  'className="absolute text-[15px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[106px] text-center leading-[35px] whitespace-nowrap" style={{ fontFamily: "\'Press Start 2P\', monospace" }}>An'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed Game Boy fonts successfully!');
