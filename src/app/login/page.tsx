'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2 } from 'lucide-react';

export default function LoginPage() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/25 mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900">Admin Login</h1>
          <p className="text-neutral-500 text-sm">Sign in to manage your website</p>
        </div>

        <form action={dispatch} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="admin@gecpathways.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
              {errorMessage}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isPending}
          >
            {isPending ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
