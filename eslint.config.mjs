import next from "eslint-config-next"
import prettier from "eslint-config-prettier"

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      "app.js",
      "scripts/**",
    ],
  },
  // Config Next.js (inclut core-web-vitals + typescript).
  ...next,
  // Désactive les règles ESLint qui entrent en conflit avec Prettier.
  prettier,
]

export default eslintConfig
