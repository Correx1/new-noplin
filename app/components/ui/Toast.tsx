'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  description?: string;
  type?: 'success' | 'error';
  show: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  description,
  type = 'success',
  show,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-6 right-6 z-9999 flex items-start gap-4 px-5 py-4 rounded-none border shadow-xl max-w-sm w-full"
          style={{
            background: 'var(--bg-card)',
            borderColor: type === 'success' ? 'rgb(6 182 212 / 0.4)' : 'rgb(239 68 68 / 0.4)',
            borderLeftWidth: '4px',
            borderLeftColor: type === 'success' ? 'rgb(6 182 212)' : 'rgb(239 68 68)',
          }}
        >
          {/* Icon */}
          <div
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
            style={{ background: type === 'success' ? 'rgb(6 182 212 / 0.12)' : 'rgb(239 68 68 / 0.12)' }}
          >
            {type === 'success' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(6 182 212)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(239 68 68)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-(--text-primary)">{message}</p>
            {description && (
              <p className="text-[13px] text-(--text-muted) mt-0.5 leading-relaxed font-(--font-body)">{description}</p>
            )}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="shrink-0 text-(--text-muted) hover:text-(--text-primary) transition-colors mt-0.5"
            aria-label="Dismiss"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
