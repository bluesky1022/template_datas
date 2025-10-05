# Next.js Sample Project

This is a minimal Next.js project structure with basic pages and API.

## 1. `package.json`
```json
{
  "name": "nextjs-sample",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
```

## 2. `pages/index.js` (Homepage)
```jsx
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Next.js Sample Project</h1>
      <p>This is the homepage.</p>
      <a href="/about">Go to About page</a>
    </div>
  );
}
```

## 3. `pages/about.js` (About page)
```jsx
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>This is the about page of the sample project.</p>
      <a href="/">Back to Home</a>
    </div>
  );
}
```

## 4. `pages/api/hello.js` (API route)
```js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API!' });
}
```

## 5. `styles/Home.module.css`
```css
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

a {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

---

### How to run

1. Create a new folder and add these files accordingly.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open `http://localhost:3000` in your browser.