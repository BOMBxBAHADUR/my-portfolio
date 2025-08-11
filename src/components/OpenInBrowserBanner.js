import React, { useEffect, useState, useCallback } from 'react';

// Detect common in-app browsers (Facebook, Instagram, Twitter, TikTok, Snapchat, etc.)
const isInAppBrowser = (ua) => /FBAN|FBAV|Instagram|Line|MicroMessenger|Twitter|TikTok|Pinterest|OKHTTP|Snapchat/i.test(ua);
const isIOS = (ua) => /iPad|iPhone|iPod/i.test(ua);
const isAndroid = (ua) => /Android/i.test(ua);

function getAppName(ua) {
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/TikTok/i.test(ua)) return 'TikTok';
  if (/Snapchat/i.test(ua)) return 'Snapchat';
  return 'this app';
}

export default function OpenInBrowserBanner() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ua, setUa] = useState('');

  const tryOpenExternal = useCallback(() => {
    const href = window.location.href;
    const uaLocal = navigator.userAgent || '';
    try {
      if (isAndroid(uaLocal)) {
        // 1) Try Chrome intent
        const noScheme = href.replace(/^https?:\/\//, '');
        const intentUrl = `intent://${noScheme}#Intent;scheme=https;package=com.android.chrome;end`;
        window.location.href = intentUrl;
        // 2) Fallback: googlechrome scheme
        setTimeout(() => {
          try { window.location.href = `googlechrome://navigate?url=${encodeURIComponent(href)}`; } catch (_) {}
        }, 400);
        // 3) Last fallback: open new tab (some in-app allow this)
        setTimeout(() => { try { window.open(href, '_blank', 'noopener'); } catch (_) {} }, 800);
      } else {
        // iOS: cannot auto-escape; opening new tab keeps you in in-app webview
        try { window.open(href, '_blank', 'noopener'); } catch (_) {}
      }
    } catch (_) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      const u = navigator.userAgent || '';
      setUa(u);
      const inApp = isInAppBrowser(u);
      if (inApp) {
        setShow(true);
        // Best-effort: on Android, try to escape in-app browser automatically
        if (isAndroid(u)) {
          setTimeout(() => tryOpenExternal(), 300);
        }
      }
    } catch (_) {
      // ignore
    }
  }, [tryOpenExternal]);

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

  const shareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
      } else {
        await copyLink();
      }
    } catch (_) {
      // user cancelled or unsupported
    }
  };

  const openExternal = () => {
    tryOpenExternal();
  };

  if (!show) return null;

  const onIOS = isIOS(ua);
  const appName = getAppName(ua);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-700 bg-gray-900/95 text-white shadow-xl backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 text-sm leading-5 text-gray-200">
            <p className="font-semibold mb-1">Open in your browser</p>
            <p className="text-gray-300">
              You&apos;re in {appName}&apos;s in‑app browser. For the best experience, open this in your default browser{onIOS ? ' (Safari)' : ''}.
            </p>
            {onIOS && (
              <ul className="text-gray-400 mt-2 text-xs list-disc pl-5 space-y-1">
                <li>Tap the ••• or Share button.</li>
                <li>Choose “Open in Browser” or “Open in Safari”.</li>
                <li>If not visible, tap Share and pick Safari from the options.</li>
              </ul>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openExternal}
              className="px-3 py-2 rounded-lg bg-primary-color text-white hover:opacity-90 text-sm"
            >
              Open in Browser
            </button>
            {onIOS && (
              <button
                onClick={shareLink}
                className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm"
              >
                Share
              </button>
            )}
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
