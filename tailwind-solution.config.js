```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [
    // ... other paths ...
    './node_modules/@my-org/my-vue-component/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```