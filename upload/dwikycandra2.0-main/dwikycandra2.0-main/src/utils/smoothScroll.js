/**
 * Smooth Scroll Utility Functions
 * Provides easing, scroll calculation, and target finding for smooth navigation
 */

/**
 * Cubic easing function for natural acceleration and deceleration
 * Creates a smooth S-curve animation
 * 
 * @param {number} t - Progress value between 0 and 1
 * @returns {number} Eased value between 0 and 1
 */
export const easeInOutCubic = (t) => {
  // Ensure t is clamped between 0 and 1
  t = Math.max(0, Math.min(1, t));
  
  // Apply cubic easing formula
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Calculate target scroll position accounting for navbar height
 * 
 * @param {HTMLElement} targetElement - The section element to scroll to
 * @param {number} navbarHeight - Height of the fixed navbar in pixels
 * @returns {number} Target scroll position in pixels
 */
export const calculateScrollPosition = (targetElement, navbarHeight = 0) => {
  if (!targetElement) {
    return 0;
  }

  // Get element's position relative to document
  const elementRect = targetElement.getBoundingClientRect();
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calculate absolute position and subtract navbar height for offset
  const targetPosition = elementRect.top + currentScrollY - navbarHeight;
  
  // Ensure we don't scroll beyond document bounds
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
  return Math.max(0, Math.min(targetPosition, maxScroll));
};

/**
 * Find target element from navigation link href attribute
 * 
 * @param {string} href - The href attribute value (e.g., "#about")
 * @returns {HTMLElement|null} The target section element or null if not found
 */
export const findTargetElement = (href) => {
  if (!href || typeof href !== 'string') {
    return null;
  }

  // Extract section ID from href (remove # if present)
  const sectionId = href.startsWith('#') ? href.substring(1) : href;
  
  if (!sectionId) {
    return null;
  }

  // Find and return the target element
  return document.getElementById(sectionId);
};

/**
 * Get current navbar height dynamically
 * Useful for responsive designs where navbar height may change
 * 
 * @returns {number} Current navbar height in pixels
 */
export const getNavbarHeight = () => {
  const navbar = document.querySelector('nav') || document.querySelector('.navbar');
  
  if (!navbar) {
    return 0;
  }

  return navbar.getBoundingClientRect().height;
};
