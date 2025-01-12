```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}",
  // Add this line to include your Vue components
  './node_modules/@my-org/my-vue-component/*.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```