# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to various hosting platforms. Choose the platform that best fits your needs.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build Configuration](#build-configuration)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Environment Variables](#environment-variables)
- [Custom Domain Configuration](#custom-domain-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js 16+ installed
- A GitHub account (for all deployment methods)
- Your repository pushed to GitHub
- All environment variables ready (see [Environment Variables](#environment-variables))

## Build Configuration

### Build Command
```bash
npm run build
```

### Output Directory
```
build/
```

### Build Settings Summary
- **Build Command:** `npm run build` or `react-scripts build`
- **Output Directory:** `build`
- **Node Version:** 16.x or higher (recommended: 18.x)
- **Package Manager:** npm or yarn

## Vercel Deployment

Vercel is the recommended platform for deploying React applications with zero configuration.

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account

2. **Import Your Repository**
   - Click "Add New Project" or "Import Project"
   - Select your portfolio repository from GitHub
   - Vercel will automatically detect it's a React app

3. **Configure Build Settings**
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from your `.env.local` file:
     - `REACT_APP_GROQ_API_KEY`
     - `REACT_APP_GROQ_MODEL`
     - `REACT_APP_OPENAI_API_KEY` (if using)
   - Make sure to add them for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts to link your project
   - Vercel will automatically detect your settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to your main branch (production)
- Create preview deployments for pull requests
- Rebuild when you push changes

## Netlify Deployment

Netlify is another excellent option with similar features to Vercel.

### Method 1: Deploy via Netlify Dashboard

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure Build Settings**
   - **Branch to deploy:** `main` (or your default branch)
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 18 (set in netlify.toml or environment variables)

4. **Add Environment Variables**
   - Go to "Site settings" → "Environment variables"
   - Click "Add a variable"
   - Add each variable:
     - `REACT_APP_GROQ_API_KEY`
     - `REACT_APP_GROQ_MODEL`
     - `REACT_APP_OPENAI_API_KEY` (if using)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://random-name-12345.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   ```
   - Follow the prompts to create a new site or link existing
   - Configure build settings when prompted

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Optional: Create netlify.toml

Create a `netlify.toml` file in your project root for configuration:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## GitHub Pages Deployment

GitHub Pages is a free hosting option directly from your GitHub repository.

### Setup Instructions

1. **Install gh-pages Package** (already installed in this project)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add the homepage field (replace with your GitHub username and repo name):
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

3. **Deploy Scripts** (already configured in this project)
   
   The following scripts are already in package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Repository**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select the `gh-pages` branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/your-repo-name`

### Important Notes for GitHub Pages

- **Environment Variables:** GitHub Pages doesn't support server-side environment variables
- **Solution:** You have two options:
  1. Use GitHub Actions to inject environment variables during build
  2. Use a different platform (Vercel/Netlify) for features requiring API keys

### GitHub Actions for Environment Variables (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      env:
        REACT_APP_GROQ_API_KEY: ${{ secrets.REACT_APP_GROQ_API_KEY }}
        REACT_APP_GROQ_MODEL: ${{ secrets.REACT_APP_GROQ_MODEL }}
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

Then add your secrets in GitHub repository settings under Settings → Secrets and variables → Actions.

## Environment Variables

### Required Environment Variables

Your portfolio uses the following environment variables:

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `REACT_APP_GROQ_API_KEY` | API key for Groq AI chatbot | Yes | `gsk_...` |
| `REACT_APP_GROQ_MODEL` | Groq model to use | Yes | `llama-3.3-70b-versatile` |
| `REACT_APP_OPENAI_API_KEY` | OpenAI API key (backup) | No | `sk-...` |

### Setting Environment Variables by Platform

#### Vercel
1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with its value
4. Select which environments (Production, Preview, Development)
5. Click "Save"

#### Netlify
1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Enter key and value
4. Click "Create variable"
5. Repeat for each variable

#### GitHub Pages
- Use GitHub Actions secrets (see GitHub Pages section above)
- Or deploy to Vercel/Netlify instead for easier environment variable management

### Security Best Practices

⚠️ **Important Security Notes:**

- Never commit `.env.local` or `.env` files to Git
- Add `.env*.local` to your `.gitignore` file
- Rotate API keys if accidentally exposed
- Use different API keys for development and production
- Limit API key permissions to only what's needed

## Custom Domain Configuration

### Vercel Custom Domain

1. **Add Domain**
   - Go to your project dashboard
   - Navigate to Settings → Domains
   - Click "Add"
   - Enter your domain name (e.g., `portfolio.example.com`)

2. **Configure DNS**
   
   Add one of these DNS records at your domain provider:
   
   **Option A: CNAME Record (Recommended for subdomains)**
   ```
   Type: CNAME
   Name: www (or your subdomain)
   Value: cname.vercel-dns.com
   ```
   
   **Option B: A Record (For apex domain)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Verify**
   - Vercel will automatically verify your domain
   - SSL certificate will be provisioned automatically
   - Your site will be accessible via your custom domain

### Netlify Custom Domain

1. **Add Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name

2. **Configure DNS**
   
   **Option A: Use Netlify DNS (Recommended)**
   - Transfer your domain's nameservers to Netlify
   - Netlify will manage all DNS records
   
   **Option B: External DNS**
   
   Add these records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificates
   - Enable "Force HTTPS" in domain settings

### GitHub Pages Custom Domain

1. **Add Custom Domain**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Click "Save"

2. **Configure DNS**
   
   Add these A records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```
   
   For subdomain (www):
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Enable HTTPS**
   - Check "Enforce HTTPS" in Pages settings
   - Wait for SSL certificate to provision (can take up to 24 hours)

## Troubleshooting

### Build Failures

**Problem:** Build fails with "Module not found" error

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Problem:** Build fails with memory error

**Solution:**
- Increase Node memory limit:
  ```bash
  NODE_OPTIONS=--max_old_space_size=4096 npm run build
  ```
- Or add to package.json scripts:
  ```json
  "build": "NODE_OPTIONS=--max_old_space_size=4096 react-scripts build"
  ```

### Environment Variables Not Working

**Problem:** Environment variables are undefined in production

**Solution:**
- Ensure variables start with `REACT_APP_`
- Verify variables are set in platform dashboard
- Redeploy after adding environment variables
- Check that you're not accessing variables in server-side code

### Blank Page After Deployment

**Problem:** Site shows blank page or 404 errors

**Solution:**
- Check browser console for errors
- Verify build directory is set to `build`
- For GitHub Pages, ensure homepage field in package.json is correct
- Check that all assets are loading (check Network tab)

### Custom Domain Not Working

**Problem:** Custom domain shows DNS error

**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct using `dig` or `nslookup`
- Clear browser cache
- Try accessing in incognito mode

### Chatbot Not Working in Production

**Problem:** Chatbot doesn't respond in production

**Solution:**
- Verify `REACT_APP_GROQ_API_KEY` is set correctly
- Check API key has proper permissions
- Look for CORS errors in browser console
- Verify API key hasn't exceeded rate limits

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use appropriate image formats (WebP for modern browsers)
   - Ensure images are properly sized

2. **Code Splitting**
   - React automatically code-splits with dynamic imports
   - Consider lazy loading heavy components

3. **Remove Console Logs**
   - Remove or disable console.log statements in production

4. **Analyze Bundle Size**
   ```bash
   npm run build
   # Check build/static/js/*.js file sizes
   ```

### After Deploying

1. **Enable Caching**
   - Vercel and Netlify handle this automatically
   - For GitHub Pages, configure via headers

2. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Check Core Web Vitals
   - Monitor loading times

3. **Set up Analytics** (Optional)
   - Google Analytics
   - Vercel Analytics
   - Netlify Analytics

## Continuous Deployment

All three platforms support automatic deployments:

- **Vercel:** Automatically deploys on every push to main branch
- **Netlify:** Automatically deploys on every push to configured branch
- **GitHub Pages:** Deploys when you run `npm run deploy` or via GitHub Actions

### Best Practices

1. Use separate branches for development and production
2. Test in preview/staging environments before merging to main
3. Use pull requests for code review
4. Set up status checks to ensure builds pass before merging

## Support and Resources

### Platform Documentation

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Getting Help

- Check platform status pages for outages
- Review build logs for specific error messages
- Search platform community forums
- Contact platform support if needed

---

**Need help?** If you encounter issues not covered in this guide, please [open an issue](https://github.com/yourusername/your-repo/issues) in the repository.
