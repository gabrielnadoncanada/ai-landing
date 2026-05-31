// Compte l'usage réel de chaque token --color-* (var() + classes utilitaires).
// Usage : node scripts/token-usage.mjs
import fs from "fs";

const COMPONENTS = "app/components";
const files = [
  "styles.css",
  "index.html",
  "app.js",
  "app/layout.tsx",
  "app/page.tsx",
  ...fs.readdirSync(COMPONENTS).map((f) => `${COMPONENTS}/${f}`),
].filter((f) => fs.existsSync(f) && fs.statSync(f).isFile());

const css = fs.readFileSync("styles.css", "utf8");
const names = [...css.matchAll(/--color-([a-z0-9-]+)\s*:/g)].map((m) => m[1]);

const read = Object.fromEntries(files.map((f) => [f, fs.readFileSync(f, "utf8")]));

const UTIL =
  "(?:bg|text|border|from|via|to|fill|stroke|ring|outline|decoration|shadow|accent|caret|divide|placeholder)";

function countIn(text, name, isCss) {
  let n = 0;
  // var(--color-name)
  n += (text.match(new RegExp(`var\\(--color-${name}\\)`, "g")) || []).length;
  // classes utilitaires : <prefix>-name, précédé/suivi d'une frontière (pas de [a-z0-9-])
  const re = new RegExp(
    `(?<![a-z0-9-])${UTIL}-${name}(?![a-z0-9-])`,
    "g"
  );
  n += (text.match(re) || []).length;
  // dans styles.css, retirer la ligne de définition elle-même si capturée par var()
  return n;
}

const rows = names.map((name) => {
  const where = [];
  let total = 0;
  for (const f of files) {
    const c = countIn(read[f], name, f === "styles.css");
    if (c > 0) {
      where.push(`${f.replace("app/components/", "")}×${c}`);
      total += c;
    }
  }
  return { name, total, where };
});

const single = rows.filter((r) => r.total === 1);
const zero = rows.filter((r) => r.total === 0);
const multi = rows.filter((r) => r.total >= 2);

console.log(`TOTAL tokens --color-* : ${names.length}`);
console.log(`  0 usage  : ${zero.length}  -> ${zero.map((r) => r.name).join(", ") || "—"}`);
console.log(`  1 usage  : ${single.length}`);
console.log(`  2+ usage : ${multi.length}`);
console.log(`\n--- mono-usage (candidats inline) ---`);
for (const r of single) console.log(`  ${r.name.padEnd(26)} ${r.where.join(", ")}`);
