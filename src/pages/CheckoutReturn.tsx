import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function CheckoutReturn() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan');

  // When loaded inside an iframe (payment modal), notify the parent
  useEffect(() => {
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'flitt-payment-complete', plan: plan ?? undefined }, '*');
    }
  }, [plan]);

  const isPlan = plan && plan !== 'payg';
  const planName = plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : '';

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle className="h-10 w-10 text-emerald-400" />
        </div>

        <h1 className="text-3xl font-bold text-foreground">
          {isPlan ? `You're on the ${planName} Plan!` : 'Card Saved!'}
        </h1>
        <p className="text-muted-fg">
          {isPlan
            ? `Your ${planName} subscription is now active. Enjoy unlimited access to the 3D Load Planner.`
            : 'Your payment method has been saved. You can now use the 3D Load Planner and pay per optimization.'}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/3d" variant="primary" size="md">
            Open 3D Planner
          </Button>
          <Button href="/pricing" variant="secondary" size="md">
            View Plans
          </Button>
        </div>

        <p className="text-xs text-muted-fg">
          You can manage your subscription anytime from your{' '}
          <Link to="/account" className="text-primary hover:underline">
            account settings
          </Link>.
        </p>
      </div>
    </div>
  );
}
