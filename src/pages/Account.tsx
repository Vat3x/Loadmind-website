import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Crown, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const API_BASE = 'https://admin-panel-be9fc.web.app';

interface Subscription {
  id: string;
  plan: string;
  product: string;
  status: string;
  amount: number;
  currency: string;
  maskedCard: string | null;
  nextBillingDate: { _seconds: number } | null;
}

function formatDate(ts: { _seconds: number } | null): string {
  if (!ts) return '—';
  return new Date(ts._seconds * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Account() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login?redirect=/account');
    }
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    fetch(`${API_BASE}/api/public/my-subscription?userId=${user.id}`)
      .then((r) => r.json())
      .then(setSubscriptions)
      .catch(() => setError('Failed to load subscriptions'))
      .finally(() => setLoading(false));
  }, [user]);

  const handleCancel = useCallback(async (sub: Subscription) => {
    if (!user) return;
    const confirmed = window.confirm(
      `Are you sure you want to cancel your ${sub.plan.charAt(0).toUpperCase() + sub.plan.slice(1)} plan? You'll lose access to premium features.`
    );
    if (!confirmed) return;

    setCancelling(sub.id);
    try {
      const res = await fetch(`${API_BASE}/api/public/cancel-subscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, subscriptionId: sub.id }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscriptions((prev) =>
          prev.map((s) => (s.id === sub.id ? { ...s, status: 'cancelled' } : s))
        );
      } else {
        alert(data.message || 'Failed to cancel');
      }
    } catch {
      alert('Failed to cancel subscription');
    } finally {
      setCancelling(null);
    }
  }, [user]);

  if (authLoading || !user) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <PageHero title="Account Settings" />

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 space-y-6">
          {/* Profile Info */}
          <Card>
            <h2 className="text-lg font-semibold text-foreground mb-4">Profile</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-fg">Email</span>
                <span className="text-foreground">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-fg">Name</span>
                <span className="text-foreground">{user.user_metadata?.display_name || '—'}</span>
              </div>
            </div>
          </Card>

          {/* Subscriptions */}
          <Card>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              Subscriptions
            </h2>

            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-5 w-5 animate-spin text-muted-fg" />
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            ) : subscriptions.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-muted-fg text-sm mb-4">You don't have any active subscriptions.</p>
                <Button href="/pricing" variant="primary" size="sm">
                  View Plans
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {subscriptions.map((sub) => (
                  <div
                    key={sub.id}
                    className="rounded-xl border border-border p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-foreground capitalize">
                          {sub.plan}
                        </span>
                        <span className="ml-2 text-xs text-muted-fg capitalize">
                          {sub.product === '3d-planning' ? '3D Planner' : 'Tracker'}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          sub.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : sub.status === 'cancelled'
                              ? 'bg-red-500/10 text-red-400'
                              : 'bg-yellow-500/10 text-yellow-400'
                        }`}
                      >
                        {sub.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-fg">
                      <div>
                        <span className="block text-muted-fg/70">Price</span>
                        ${(sub.amount / 100).toFixed(2)}/mo
                      </div>
                      <div>
                        <span className="block text-muted-fg/70">Next billing</span>
                        {formatDate(sub.nextBillingDate)}
                      </div>
                      {sub.maskedCard && (
                        <div className="flex items-center gap-1">
                          <CreditCard className="h-3 w-3" />
                          {sub.maskedCard}
                        </div>
                      )}
                    </div>

                    {sub.status === 'active' && (
                      <div className="flex gap-2 pt-1">
                        <Button href="/pricing" variant="secondary" size="sm">
                          Change Plan
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCancel(sub)}
                          className="text-red-400 hover:text-red-300"
                        >
                          {cancelling === sub.id ? (
                            <Loader2 className="h-3 w-3 animate-spin mr-1" />
                          ) : null}
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
