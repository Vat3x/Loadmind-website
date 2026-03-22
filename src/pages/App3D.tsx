import { useEffect, useRef, useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

const IFRAME_ORIGIN = 'https://3dloadplanning.netlify.app';

export default function App3D() {
  const { user, loading } = useAuth();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [iframeReady, setIframeReady] = useState(false);

  // Fetch user's plan from profiles table
  useEffect(() => {
    if (!user) {
      setPlan(null);
      return;
    }

    supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()
      .then(({ data }) => {
        setPlan(data?.plan || 'free');
      });
  }, [user]);

  // Build auth payload
  const getAuthPayload = useCallback(() => {
    if (!user) return null;
    return {
      userId: user.id,
      email: user.email || '',
      plan: plan || 'free',
    };
  }, [user, plan]);

  // Send auth state to iframe
  const sendAuthState = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow || !iframeReady) return;

    iframe.contentWindow.postMessage(
      { type: 'LM_AUTH_STATE', payload: getAuthPayload() },
      IFRAME_ORIGIN
    );
  }, [getAuthPayload, iframeReady]);

  // Send when auth state or plan changes
  useEffect(() => {
    if (!loading) {
      sendAuthState();
    }
  }, [loading, sendAuthState]);

  // Listen for auth request from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== IFRAME_ORIGIN) return;
      if (event.data?.type === 'LM_AUTH_REQUEST') {
        sendAuthState();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [sendAuthState]);

  return (
    <iframe
      ref={iframeRef}
      src="https://3dloadplanning.netlify.app/"
      title="LoadMind 3D Planner"
      className="fixed inset-0 h-full w-full border-0"
      allow="clipboard-read; clipboard-write"
      onLoad={() => setIframeReady(true)}
    />
  );
}
