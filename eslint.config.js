import pluginJs from "@eslint/js"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "@stylistic/jsx": stylisticJsx,
            "@stylistic/ts": stylisticTs,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@stylistic/jsx/jsx-self-closing-comp": [
                "error",
                {
                    component: true,
                    html: true,
                },
            ],
            "@stylistic/ts/quotes": ["warn", "double"],
        },
    },
]
