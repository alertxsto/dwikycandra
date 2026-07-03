# Customization Guide

This guide will help you customize the portfolio website to reflect your own personal information, projects, and branding.

## Table of Contents

- [Personal Information](#personal-information)
- [Projects Management](#projects-management)
- [Theming & Colors](#theming--colors)
- [Images & Assets](#images--assets)
- [Social Media Links](#social-media-links)
- [Chatbot Customization](#chatbot-customization)

---

## Personal Information

### Hero Section

The Hero section is your landing page introduction. To customize it:

**File:** `src/components/Hero.js`

#### Update Personal Details

1. **Badge Text** (Line 48-51):
```javascript
<div className={`hero-badge ${isVisible ? 'visible' : ''}`}>
  <FiGithub />
  Available for Projects  // Change this text
</div>
```

2. **Main Heading** (Line 53-56):
```javascript
<h1 className={`hero-heading ${isVisible ? 'visible' : ''}`}>
  Full-Stack Developer<br/>
  React & AI Integration Specialist  // Update your title
</h1>
```

3. **Bio/Description** (Line 58-64):
```javascript
<p className={`hero-bio ${isVisible ? 'visible' : ''}`}>
  Hi, I'm Dwiky — a Full-Stack Developer...  // Replace with your bio
  Based in Cikarang, Indonesia.  // Update your location
</p>
```

4. **Statistics** (Line 66-75):
```javascript
<div className="stat">
  <span className="stat-number">15+</span>  // Update your numbers
  <span className="stat-label">Production Projects</span>
</div>
<div className="stat">
  <span className="stat-number">3</span>  // Update your numbers
  <span className="stat-label">Teams Led</span>
</div>
```

#### Customize Skill Cards

The floating skill cards showcase your expertise. Update the `skillDetails` array (Lines 20-65):

```javascript
const skillDetails = [
  {
    id: 1,
    title: 'Clean Code',  // Change skill name
    subtitle: 'Modern & Maintainable',  // Change subtitle
    description: 'Your description here...',  // Update description
    details: [  // Update skill points
      'ES6+ JavaScript patterns',
      'Component-based architecture',
      // Add your own skills
    ]
  },
  // Add more skills or modify existing ones
];
```

**Icons:** The skill icons use React Icons. To change icons, import different ones from `react-icons/fi` and update the conditional rendering (Lines 99-103).

---

## Projects Management

### Adding/Removing/Modifying Projects

**File:** `src/components/Projects.js`

#### Project Data Structure

Projects are defined in the `projects` array (Lines 6-60). Each project has:

```javascript
{
  id: 1,  // Unique identifier
  title: 'Project Name',
  desc: 'Short description (2-3 sentences)',
  image: 'project1.jpg',  // Currently unused, for future implementation
  tech: ['React', 'Node.js', 'PostgreSQL'],  // Technology stack
  links: { 
    demo: 'https://your-demo-url.com',  // Live demo URL
    code: 'https://github.com/your-repo'  // GitHub repository URL
  },
  role: 'Your Role',  // e.g., "Lead Developer", "Full-Stack Developer"
  jobDesc: 'Detailed description of your responsibilities...',
  size: 'large'  // 'large', 'medium', or 'small' for grid layout
}
```

#### Grid Layout Sizes

The Bento grid layout uses three size options:
- **`large`**: Spans 2 columns (best for major projects)
- **`medium`**: Spans 2 columns (good for significant projects)
- **`small`**: Spans 1 column (for smaller projects or side projects)

**Desktop Layout (1200px+):**
- Grid has 4 columns
- Large/Medium projects take 2 columns
- Small projects take 1 column

**Tablet (640px-1199px):**
- Grid has 2 columns
- All projects span their natural width

**Mobile (<640px):**
- Grid has 1 column
- All projects stack vertically

#### Adding a New Project

1. Add a new object to the `projects` array:

```javascript
const projects = [
  // ... existing projects
  {
    id: 6,  // Use next available ID
    title: 'Your New Project',
    desc: 'Brief description of what this project does and its impact.',
    image: 'project6.jpg',
    tech: ['React', 'TypeScript', 'Firebase'],
    links: { 
      demo: 'https://your-project.com', 
      code: 'https://github.com/you/project' 
    },
    role: 'Solo Developer',
    jobDesc: 'Detailed explanation of your work, technologies used, challenges overcome, and results achieved.',
    size: 'medium'
  }
];
```

#### Removing a Project

Simply delete the project object from the array or comment it out.

#### Reordering Projects

Projects display in the order they appear in the array. Rearrange objects to change display order.

---

## Theming & Colors

### Primary Color Scheme

The portfolio uses a purple theme with these primary colors:

**Main Accent Colors:**
- Primary Purple: `#9b59ff` (rgb(155, 89, 255))
- Secondary Purple: `#6a0dad` (rgb(106, 13, 173))

### CSS Variables

**File:** `src/App.css`

Define global CSS variables for consistent theming:

```css
:root {
  --accent: #9b59ff;
  --accent-2: #c084fc;
  --muted: rgba(200, 200, 220, 0.8);
  --card: rgba(20, 20, 30, 0.8);
}
```

### Customizing Colors

#### Option 1: Change CSS Variables (Recommended)

Update the variables in `src/App.css` to change colors site-wide:

```css
:root {
  --accent: #your-color;  /* Primary accent color */
  --accent-2: #your-color-2;  /* Secondary accent color */
  --muted: rgba(r, g, b, 0.8);  /* Muted text color */
  --card: rgba(r, g, b, 0.8);  /* Card background */
}
```

#### Option 2: Find and Replace

Search for color values across the project:
- `#9b59ff` - Primary purple
- `#6a0dad` or `rgb(106, 13, 173)` - Secondary purple
- `rgba(155, 89, 255, ...)` - Purple with various opacities

**Key Files to Update:**
- `src/components/hero.css`
- `src/components/projects.css`
- `src/components/navbar.css`
- `src/components/about.css`
- `src/components/contact.css`

### Background Colors

**Main Background:** `#0a0a0f` (very dark blue-black)
**Card Backgrounds:** `rgba(20, 20, 30, 0.6)` to `rgba(30, 15, 50, 0.98)`

Update in `src/index.css`:

```css
body {
  background: #your-background-color;
}
```

### Gradient Customization

Many elements use gradients. Example from Hero section:

```css
background: linear-gradient(135deg,
  rgba(155,89,255,0.9) 0%,
  rgba(106,13,173,0.9) 100%
);
```

Replace the RGB values with your chosen colors.

### Font Customization

**Current Fonts:**
- Primary: `'Poppins'` (body text)
- Monospace: `'Space Mono'` (code snippets)

**File:** `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'YourFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

---

## Images & Assets

### Image Locations

**Profile Photos:**
- `public/images/profile.jpg` - Main profile photo
- `src/images/profile.jpg` - Alternative location

**Team Member Photos:**
- `public/images/team-member-1.jpg`
- `public/images/team-member-2.jpg`
- `src/images/team-member-*.jpg`

**Project Screenshots:**
- Currently not implemented in UI
- Prepared for future use in `projects` array (`image` property)
- Recommended location: `public/images/projects/`

### Image Requirements

#### Profile Photo
- **Recommended Size:** 400x400px to 800x800px
- **Format:** JPG or PNG
- **Aspect Ratio:** 1:1 (square)
- **File Size:** < 500KB for optimal loading

#### Team Member Photos
- **Recommended Size:** 300x300px to 600x600px
- **Format:** JPG or PNG
- **Aspect Ratio:** 1:1 (square)
- **File Size:** < 300KB each

#### Project Screenshots (Future Use)
- **Recommended Size:** 1200x800px to 1920x1080px
- **Format:** JPG or PNG
- **Aspect Ratio:** 3:2 or 16:9
- **File Size:** < 500KB (use compression tools)

### Updating Images

1. **Replace existing images** with your own files using the same filenames
2. **Or update references** in component files:

**About Component** (`src/components/About.js`):
```javascript
<img src="/images/profile.jpg" alt="Profile" />
```

**Team Component** (`src/components/Team.js`):
```javascript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    image: '/images/your-photo.jpg',  // Update path
    // ...
  }
];
```

### Favicon

**Location:** `public/favicon.ico`

Replace with your own favicon. Recommended tools:
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

**Additional Icon Files:**
- `public/logo192.png` - 192x192px app icon
- `public/logo512.png` - 512x512px app icon

---

## Social Media Links

### Footer Links

**File:** `src/App.js` (Lines 62-74)

```javascript
<div className="social-links">
  <a href="https://github.com/dkycdr" target="_blank" rel="noopener noreferrer">
    <FiGithub />
  </a>
  <a href="https://linkedin.com/in/dwiky-candra" target="_blank" rel="noopener noreferrer">
    <FiLinkedin />
  </a>
  <a href="https://instagram.com/dky_cdr" target="_blank" rel="noopener noreferrer">
    <FiInstagram />
  </a>
</div>
```

**To Update:**
1. Replace URLs with your own social media profiles
2. Keep `target="_blank"` for opening in new tabs
3. Keep `rel="noopener noreferrer"` for security

### Adding New Social Links

1. Import the icon from `react-icons/fi`:

```javascript
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
```

2. Add the link to the social links section:

```javascript
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" title="Twitter">
  <FiTwitter />
</a>
```

### Available Social Icons

From `react-icons/fi` (Feather Icons):
- `FiGithub` - GitHub
- `FiLinkedin` - LinkedIn
- `FiInstagram` - Instagram
- `FiTwitter` - Twitter
- `FiFacebook` - Facebook
- `FiYoutube` - YouTube
- `FiMail` - Email
- `FiGlobe` - Website

Browse more at: [React Icons - Feather](https://react-icons.github.io/react-icons/icons/fi/)

### Copyright Text

**File:** `src/App.js` (Line 61)

```javascript
<div>© {new Date().getFullYear()} Dwiky — Built with React</div>
```

Replace "Dwiky" with your name.

---

## Chatbot Customization

### API Configuration

**File:** `src/components/ChatBot.js`

#### Setting Up Groq API

The chatbot uses Groq API for AI responses. To enable it:

1. **Get API Key:**
   - Sign up at [Groq Console](https://console.groq.com/)
   - Create a new API key

2. **Add to Environment:**
   - Create `.env.local` in project root
   - Add your API key:

```env
REACT_APP_GROQ_API_KEY=your_api_key_here
REACT_APP_GROQ_MODEL=llama-3.3-70b-versatile
```

3. **Restart Development Server:**
```bash
npm start
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

### Customizing Bot Responses

**File:** `src/components/ChatBot.js` (Lines 42-332)

The chatbot has predefined responses in the `botResponses` object. Each category contains multiple response variations:

```javascript
const botResponses = {
  greeting: [
    "Hello! I'm Your Name's AI assistant...",
    // Add more greeting variations
  ],
  projects: [
    "Check out these amazing projects...",
    // Add your project descriptions
  ],
  skills: [
    "Main skills include: ...",
    // List your skills
  ],
  // ... more categories
};
```

#### Key Response Categories to Update:

1. **`greeting`** - Initial welcome messages
2. **`projects`** - Information about your projects
3. **`skills`** - Your technical skills and expertise
4. **`about`** - Personal background and bio
5. **`experience`** - Work experience and roles
6. **`contact`** - How to reach you
7. **`education`** - Educational background
8. **`tech`** - Technology stack details

#### Customization Steps:

1. **Update Personal Information:**
   - Replace "Dwiky" with your name throughout
   - Update university name, location, etc.
   - Modify project descriptions to match your work

2. **Modify Skills Lists:**
```javascript
skills: [
  "Your Name's main skills include:\n• **Frontend**: Your frameworks\n• **Backend**: Your technologies\n• **Tools**: Your tools",
  // Add more variations
],
```

3. **Update Project Descriptions:**
```javascript
projects: [
  "Your Name has worked on:\n\n1. **Project 1** - Description\n2. **Project 2** - Description",
  // Match your actual projects
],
```

4. **Customize Contact Info:**
```javascript
contact: [
  "You can reach Your Name through:\n🔗 GitHub: github.com/yourhandle\n🔗 LinkedIn: linkedin.com/in/yourprofile",
  // Update with your links
],
```

### Chatbot Appearance

**File:** `src/components/chatbot.css`

#### Colors:
```css
.chatbot-button {
  background: linear-gradient(135deg, #9b59ff, #6a0dad);  /* Change colors */
}
```

#### Position:
```css
.chatbot-button {
  bottom: 2rem;  /* Distance from bottom */
  right: 2rem;   /* Distance from right */
}
```

#### Size:
```css
.chatbot-button {
  width: 60px;   /* Button width */
  height: 60px;  /* Button height */
}
```

### Initial Welcome Message

**File:** `src/components/ChatBot.js` (Lines 10-16)

```javascript
const [messages, setMessages] = useState([
  {
    id: 1,
    text: "Hey there! 👋 I'm Your Name's AI assistant. Ask me about projects, skills, or anything else!",
    sender: 'bot',
    timestamp: new Date()
  }
]);
```

### Disabling the Chatbot

To temporarily disable the chatbot:

**File:** `src/App.js`

Comment out the ChatBot import and component:

```javascript
// const ChatBot = lazy(() => import('./components/ChatBot'));

// In the return statement:
// <Suspense fallback={null}>
//   <ChatBot />
// </Suspense>
```

---

## Additional Customization Tips

### Navigation Menu

**File:** `src/components/NavBar.js`

Update navigation links (Lines 82-85):

```javascript
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#team">Team</a>
<a href="#contact">Contact</a>
```

Add or remove sections as needed. Make sure the `href` matches the section `id` in your components.

### Brand Name

**File:** `src/components/NavBar.js` (Lines 71-78)

```javascript
<div className="brand-text">
  <span className="glitch-text" data-text="Dwiky">Dwiky</span>
</div>
<div className="brand-accent">
  <span className="float-text">Dev</span>
</div>
```

Replace "Dwiky" and "Dev" with your preferred branding.

### Contact Form

**File:** `src/components/Contact.js`

The form uses Formspree for email handling. To set up:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the endpoint (Line 6):

```javascript
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Meta Tags & SEO

**File:** `public/index.html`

Update meta tags for better SEO:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
```

---

## Testing Your Changes

After making customizations:

1. **Start Development Server:**
```bash
npm start
```

2. **Check Browser Console** for any errors

3. **Test Responsive Design:**
   - Desktop (1920px+)
   - Laptop (1366px)
   - Tablet (768px)
   - Mobile (375px)

4. **Verify All Links** work correctly

5. **Test Chatbot** (if API key is configured)

6. **Check Image Loading** and sizes

---

## Need Help?

If you encounter issues:

1. Check browser console for error messages
2. Verify file paths are correct
3. Ensure all imports are properly updated
4. Clear browser cache and restart dev server
5. Review the [Contributing Guidelines](../CONTRIBUTING.md)

For more information, see:
- [README.md](../README.md) - Project overview
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [React Documentation](https://react.dev/) - React framework docs
