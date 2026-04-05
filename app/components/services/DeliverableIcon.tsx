'use client';
import React from 'react';

type IconType = 
  | 'trophy' | 'magnifier' | 'mug' | 'document' | 'monitor' 
  | 'smartphone' | 'camera' | 'megaphone' | 'target' | 'rocket' 
  | 'chart' | 'calendar' | 'brush' | 'shield' | 'cart' 
  | 'play' | 'pen' | 'star' | 'chat' | 'gear';

type ColorVariant = 'purple' | 'green' | 'pink' | 'blue' | 'yellow' | 'amber';

interface DeliverableIconProps {
  type: IconType | string;
  color?: ColorVariant | string;
  className?: string;
}

const colorMap: Record<ColorVariant, { primary: string, secondary: string }> = {
  purple: { primary: '#B2A4FF', secondary: '#8B5CF6' },
  green: { primary: '#B8F1B0', secondary: '#34D399' },
  pink: { primary: '#FFB4B4', secondary: '#F472B6' },
  blue: { primary: '#C1EFFF', secondary: '#60A5FA' },
  yellow: { primary: '#FDF7C3', secondary: '#FBBF24' },
  amber: { primary: '#FFDEB4', secondary: '#F59E0B' },
};

const STROKE = "#3A3F58";
const STROKE_WIDTH = 3.5;

function Face({ x, y }: { x: number | string, y: number | string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="-6" cy="0" r="2.5" fill={STROKE} />
      <circle cx="6" cy="0" r="2.5" fill={STROKE} />
      <path d="M-3 4 Q0 8 3 4" fill="none" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="-10" cy="3" r="2" fill="#FFB4B4" opacity="0.6"/>
      <circle cx="10" cy="3" r="2" fill="#FFB4B4" opacity="0.6"/>
    </g>
  );
}

function Sparkles() {
  return (
    <g fill="#FBCB62">
      <path d="M15 20 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 z" />
      <path d="M100 80 l1.5 -3 l1.5 3 l3 1.5 l-3 1.5 l-1.5 3 l-1.5 -3 l-3 -1.5 z" />
      <circle cx="95" cy="25" r="2.5" />
      <circle cx="25" cy="85" r="2" />
    </g>
  );
}

export default function DeliverableIcon({ type, color = 'purple', className = "" }: DeliverableIconProps) {
  const c = colorMap[color as ColorVariant] || colorMap.purple;

  const renderIconContent = () => {
    switch (type) {
      case 'trophy':
        return (
          <g transform="translate(60, 55)">
            <path d="M-35 -15 C-45 -15 -45 15 -25 15" fill="none" stroke={c.primary} strokeWidth="8" strokeLinecap="round" />
            <path d="M-35 -15 C-45 -15 -45 15 -25 15" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            <path d="M35 -15 C45 -15 45 15 25 15" fill="none" stroke={c.primary} strokeWidth="8" strokeLinecap="round" />
            <path d="M35 -15 C45 -15 45 15 25 15" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            
            <path d="M-25 -30 L25 -30 L30 15 C30 35 -30 35 -30 15 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <rect x="-8" y="32" width="16" height="15" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
            <rect x="-20" y="47" width="40" height="12" rx="3" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
            <Face x={0} y={-5} />
          </g>
        );
      case 'magnifier':
        return (
          <g transform="translate(50, 50)">
            <line x1="15" y1="15" x2="40" y2="40" stroke={c.secondary} strokeWidth="12" strokeLinecap="round" />
            <line x1="15" y1="15" x2="40" y2="40" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            <circle cx="0" cy="0" r="30" fill="#E2E8F0" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
            <circle cx="-5" cy="-5" r="20" fill="#ffffff" opacity="0.5" />
            <Face x={0} y={0} />
          </g>
        );
      case 'document':
        return (
          <g transform="translate(60, 60)">
            <path d="M-25 -35 L15 -35 L35 -15 L35 35 C35 38 -35 38 -35 35 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <path d="M15 -35 L15 -15 L35 -15" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <line x1="-15" y1="15" x2="15" y2="15" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            <line x1="-15" y1="25" x2="5" y2="25" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            <Face x={0} y={-5} />
          </g>
        );
      case 'mug':
        return (
          <g transform="translate(60, 60)">
            <path d="M25 -5 C40 -5 40 25 25 25" fill="none" stroke={c.primary} strokeWidth="8" strokeLinecap="round" />
            <path d="M25 -5 C40 -5 40 25 25 25" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
            <path d="M-25 -20 L25 -20 L20 35 C20 40 -20 40 -20 35 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <Face x={0} y="10" />
            {/* Pens sticking out */}
            <path d="M-10 -20 L-15 -40 L-5 -40 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <path d="M5 -20 L10 -45 L0 -45 Z" fill="#FBBF24" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          </g>
        );
      // Fallback for others to just be a cute star
      default:
        return (
          <g transform="translate(60, 60)">
            <path d="M0 -35 L10 -10 L35 -10 L15 10 L25 35 L0 20 L-25 35 L-15 10 L-35 -10 L-10 -10 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
            <Face x={0} y="5" />
          </g>
        );
    }
  };

  // Add more customized icons based on the type
  if(type === 'monitor') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 50)">
          <rect x="-35" y="-25" width="70" height="50" rx="4" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="-30" y="-20" width="60" height="40" rx="2" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <path d="M-10 25 L10 25 L15 40 L-15 40 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <line x1="-20" y1="40" x2="20" y2="40" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
          <Face x={0} y="0" />
        </g>
      </svg>
    )
  }

  if(type === 'smartphone') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <rect x="-22" y="-40" width="44" height="80" rx="8" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="-18" y="-30" width="36" height="60" rx="4" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <circle cx="0" cy="35" r="2.5" fill={STROKE} />
          <Face x={0} y="0" />
        </g>
      </svg>
    )
  }

  if(type === 'camera') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <rect x="-15" y="-30" width="30" height="10" rx="3" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="-35" y="-20" width="70" height="45" rx="6" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <circle cx="0" cy="5" r="14" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <circle cx="0" cy="5" r="6" fill={c.secondary} />
          <circle cx="25" cy="-10" r="3" fill={STROKE} />
          <Face x="0" y="-30" /> 
        </g>
      </svg>
    )
  }

  if(type === 'megaphone') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60) rotate(-15)">
          <path d="M-30 -15 L20 -30 L20 30 L-30 15 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M20 -35 L30 -35 L30 35 L20 35 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M-30 0 L-40 20 L-20 20 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <Face x="-5" y="0" />
        </g>
      </svg>
    )
  }

  if(type === 'target') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <circle cx="0" cy="0" r="35" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <circle cx="0" cy="0" r="22" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <circle cx="0" cy="0" r="10" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <path d="M20 -20 L45 -45" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
          <path d="M35 -45 L45 -45 L45 -35" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
          <Face x="0" y="20" />
        </g>
      </svg>
    )
  }

  if(type === 'rocket') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 50)">
          <path d="M-15 30 L-25 45 L-5 35 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M15 30 L25 45 L5 35 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M0 -35 Q20 -10 15 35 L-15 35 Q-20 -10 0 -35 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <circle cx="0" cy="0" r="8" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <path d="M-10 35 L0 50 L10 35 Z" fill="#FBBF24" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <Face x="0" y="-15" />
        </g>
      </svg>
    )
  }

  if(type === 'chart') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <rect x="-35" y="-30" width="70" height="60" rx="4" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="-25" y="-5" width="12" height="25" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="-5" y="5" width="10" height="15" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <rect x="15" y="-20" width="12" height="40" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <Face x="0" y="-20" />
        </g>
      </svg>
    )
  }

  if(type === 'calendar') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <rect x="-30" y="-25" width="60" height="55" rx="4" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <path d="M-30 -5 L30 -5" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <line x1="-15" y1="-35" x2="-15" y2="-15" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
          <line x1="15" y1="-35" x2="15" y2="-15" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
          <Face x="0" y="15" />
        </g>
      </svg>
    )
  }

  if(type === 'brush') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <path d="M-10 10 L-25 40 L-5 45 L5 25 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M-10 10 Q-25 -20 10 -40 Q25 -10 5 25 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <Face x="-2" y="-5" />
        </g>
      </svg>
    )
  }

  if(type === 'shield') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 55)">
          <path d="M-30 -20 L0 -35 L30 -20 L30 10 C30 30 0 45 0 45 C0 45 -30 30 -30 10 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M-15 -10 L15 -10 L15 15 C15 25 0 35 0 35 C0 35 -15 25 -15 15 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <Face x="0" y="0" />
        </g>
      </svg>
    )
  }

  if(type === 'cart') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <path d="M-35 -20 L-25 -20 L-15 15 L25 15 L35 -10 L-20 -10" fill="none" stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M-20 -10 L35 -10 L25 15 L-15 15 Z" fill={c.primary} opacity="0.8" />
          <circle cx="-10" cy="25" r="4" fill={STROKE} />
          <circle cx="20" cy="25" r="4" fill={STROKE} />
          <Face x="5" y="0" />
        </g>
      </svg>
    )
  }

  if(type === 'pen') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60) rotate(-45)">
          <path d="M-10 -30 L10 -30 L10 10 L0 30 L-10 10 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <path d="M-10 -30 L10 -30 L10 -40 C10 -45 -10 -45 -10 -40 Z" fill={c.secondary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <line x1="-10" y1="10" x2="10" y2="10" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <Face x="0" y="-10" />
        </g>
      </svg>
    )
  }
  
  if(type === 'chat') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 50)">
          <rect x="-35" y="-25" width="70" height="45" rx="8" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <path d="M-15 20 L-25 35 L-5 20 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <circle cx="-15" cy="-5" r="3" fill={STROKE} />
          <circle cx="0" cy="-5" r="3" fill={STROKE} />
          <circle cx="15" cy="-5" r="3" fill={STROKE} />
          <Face x="0" y="5" />
        </g>
      </svg>
    )
  }
  
  if(type === 'gear') {
    return (
      <svg viewBox="0 0 120 120" className={className}>
        <Sparkles />
        <g transform="translate(60, 60)">
          <path d="M-30 -10 L-20 -10 L-15 -25 L-25 -30 L-15 -40 L-5 -30 L5 -30 L10 -40 L20 -30 L15 -20 L25 -10 L35 -15 L40 -5 L30 5 L30 15 L40 20 L35 30 L25 25 L15 35 L20 45 L10 50 L0 40 L-10 40 L-15 50 L-25 45 L-20 35 L-30 25 L-40 30 L-45 20 L-35 10 L-35 0 L-45 -5 Z" fill={c.primary} stroke={STROKE} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
          <circle cx="0" cy="5" r="16" fill="#ffffff" stroke={STROKE} strokeWidth={STROKE_WIDTH} />
          <Face x="0" y="5" />
        </g>
      </svg>
    )
  }

  // default render handled above
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <Sparkles />
      {renderIconContent()}
    </svg>
  );
}
