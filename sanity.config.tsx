import { defineConfig, buildLegacyTheme } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { structure } from './src/sanity/structure';
import React from 'react';

const BRAND_COLOR = '#531F1F'; 
const BG_COLOR = '#F6F5F1';    
const TEXT_COLOR = '#2D2424';  

const myTheme = buildLegacyTheme({
  '--black': TEXT_COLOR,
  '--white': BG_COLOR,
  '--gray': '#9ca3af',
  '--gray-base': '#9ca3af',

  '--brand-primary': BRAND_COLOR,

  '--default-button-primary-color': BRAND_COLOR,
  '--default-button-success-color': BRAND_COLOR, 
  '--default-button-warning-color': '#f59e0b',
  '--default-button-danger-color': '#ef4444',

  '--main-navigation-color': BRAND_COLOR,
  '--main-navigation-color--inverted': BG_COLOR,
  '--focus-color': BRAND_COLOR,
});

const Logo = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    fontWeight: 'bold',
    color: '#F6F5F1', 
    fontFamily: '"Halant", serif',
    fontSize: '18px'
  }}>
    <div style={{
      width: '28px',
      height: '28px',
      borderRadius: '6px',
      background: '#F6F5F1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: BRAND_COLOR,
      fontSize: '14px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>L</div>
    <span style={{ letterSpacing: '2px' }}>LUCAS ARAYA</span>
  </div>
);

export default defineConfig({
  name: 'lucas-portfolio',
  title: 'Lucas Portfolio',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  
  icon: () => (
    <img 
      src="/favicon.svg" 
      alt="Lucas Araya" 
      style={{ width: '100%', height: '100%' }} 
    />
  ),

  plugins: [
    structureTool({ structure }),
  ],
  
  schema: {
    types: schemaTypes,
  },

  theme: myTheme,

  studio: {
    components: {
      logo: Logo
    }
  },

  subtitle: 'Panel de Control',
});