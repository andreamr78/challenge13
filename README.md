# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.


SCREENSHOTS:
<img width="1440" alt="Screenshot 2025-01-16 at 11 15 59 p m" src="https://github.com/user-attachments/assets/18ecd345-a958-4d57-82b6-6df2e9718c98" />
<img width="1440" alt="Screenshot 2025-01-16 at 11 15 53 p m" src="https://github.com/user-attachments/assets/3cf46c8b-3c3a-4b70-8cbd-41df66f84232" />
<img width="1440" alt="Screenshot 2025-01-16 at 11 15 40 p m" src="https://github.com/user-attachments/assets/1434a62f-7ab8-4bfb-afc3-c12e4c83afc4" />

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
