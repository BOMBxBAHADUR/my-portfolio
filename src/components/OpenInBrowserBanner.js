import React, { useEffect, useState } from 'react';

// Detect common in-app browsers (Facebook, Instagram, Twitter, TikTok, etc.)
const isInAppBrowser = (ua) => /FBAN|FBAV|Instagram|Line|MicroMessenger|Twitter|TikTok|Pinterest|OKHTTP/i.test(ua);
const isIOS = (ua) => /iPad|iPhone|iPod/i.test(ua);
const isAndroid = (ua) => /Android/i.test(ua);

export default function OpenInBrowserBanner() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const ua = navigator.userAgent || '';
      if (isInAppBrowser(ua)) {
        setShow(true);
      }
    } catch (_) {
      // ignore
    }
  }, []);

  if (!show) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      // fallback
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openExternal = () => {
    try {
      const ua = navigator.userAgent || '';
      const href = window.location.href;
      if (isAndroid(ua)) {
        const urlNoScheme = href.replace(/^https?:\/\//, '');
        const intentUrl = `intent://${urlNoScheme}#Intent;scheme=https;package=com.android.chrome;end`;
        window.location.href = intentUrl;
        setTimeout(() => {
          window.open(href, '_blank', 'noopener');
        }, 500);
      } else {
        window.open(href, '_blank', 'noopener');
      }
    } catch (_) {
      window.open(window.location.href, '_blank', 'noopener');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-700 bg-gray-900/95 text-white shadow-xl backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 text-sm leading-5 text-gray-200">
            <p className="font-semibold mb-1">Open in your browser</p>
            <p className="text-gray-300">
              You&apos;re viewing this inside an app&apos;s webview. For the best experience, open it
              in your default browser{isIOS(navigator.userAgent) ? ' (Safari)' : ''}.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openExternal}
              className="px-3 py-2 rounded-lg bg-primary-color text-white hover:opacity-90 text-sm"
            >
              Open in Browser
            </button>
            <button
              onClick={copyLink}
              className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm"
            >
              {copied ? 'Link copied' : 'Copy link'}
            </button>
            <button
              onClick={() => setShow(false)}
              className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
