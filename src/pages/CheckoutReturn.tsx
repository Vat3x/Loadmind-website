import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function CheckoutReturn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle className="h-10 w-10 text-emerald-400" />
        </div>

        <h1 className="text-3xl font-bold text-foreground">Card Saved!</h1>
        <p className="text-muted-fg">
          Your payment method has been saved. You can now use the 3D Load Planner
          and pay per optimization.
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
          You can update your payment method anytime from the{' '}
          <Link to="/pricing" className="text-primary hover:underline">
            pricing page
          </Link>.
        </p>
      </div>
    </div>
  );
}
