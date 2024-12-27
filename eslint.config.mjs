import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: js.configs.recommended,
   allConfig: js.configs.all,
});

export default [
   {
      ignores: [
         "**/node_modules/*",
         "**/.next/*",
         ".husky/*",
         "**/pnpm-lock.yaml",
      ],
   },
   ...compat.extends(
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "prettier",
   ),
   {
      plugins: {
         "@typescript-eslint": typescriptEslint,
      },

      languageOptions: {
         parser: tsParser,
      },

      rules: {
         "arrow-parens": ["error", "always"],

         "arrow-spacing": [
            "error",
            {
               before: true,
               after: true,
            },
         ],

         "@typescript-eslint/no-unused-vars": [
            "warn",
            {
               argsIgnorePattern: "^_",
               caughtErrorsIgnorePattern: "^_",
               destructuredArrayIgnorePattern: "^_",
               ignoreRestSiblings: true,
               varsIgnorePattern: "^_",
            },
         ],

         "object-curly-spacing": ["error", "always"],

         quotes: [
            "error",
            "double",
            {
               avoidEscape: true,
            },
         ],
      },
   },
];
