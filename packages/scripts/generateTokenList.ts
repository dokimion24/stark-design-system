import { promises as fs } from 'fs';
import path from 'path';

const TOKEN_PATH = path.resolve(__dirname, '../stark-tokens/src/color.ts');
const OUTPUT_PATH = path.resolve(__dirname, '../stark-theme/src/config/colorTokenList.ts');

const extractColorTokens = async (): Promise<string[]> => {
  const file = await fs.readFile(TOKEN_PATH, 'utf-8');
  const lines = file.split('\n');

  const tokens: string[] = [];

  for (const line of lines) {
    const match = line.match(/export const (\w+)\s*=/);
    if (match && match[1]) {
      const raw = match[1];
      const formatted = raw.replace(/([a-zA-Z])([0-9])/g, '$1.$2');
      tokens.push(formatted);
    }
  }

  if (tokens.length === 0) {
    throw new Error('No export const statements found in token file.');
  }

  return tokens;
};

const writeTokenFile = async (tokens: string[]) => {
  const content = `export const colorTokenList = ${JSON.stringify(tokens, null, 2)};\n`;
  await fs.writeFile(OUTPUT_PATH, content, 'utf-8');
  console.log('colorTokenList.ts created successfully');
};

(async () => {
  try {
    const tokens = await extractColorTokens();
    await writeTokenFile(tokens);
  } catch (err) {
    console.error('Token extraction failed:', err);
  }
})();
