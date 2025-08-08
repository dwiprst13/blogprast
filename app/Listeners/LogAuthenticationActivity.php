<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;
use Illuminate\Auth\Events\Failed;
use Illuminate\Auth\Events\Attempting;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Events\PasswordReset;

class LogAuthenticationActivity
{
    public function handleLogin(Login $event): void
    {
        activity()
            ->causedBy($event->user)
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'login_time' => now(),
                'guard' => $event->guard,
            ])
            ->log('User logged in');
    }

    public function handleLogout(Logout $event): void
    {
        activity()
            ->causedBy($event->user)
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'logout_time' => now(),
                'guard' => $event->guard,
            ])
            ->log('User logged out');
    }

    public function handleFailed(Failed $event): void
    {
        activity()
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'attempted_email' => request()->input('email'),
                'guard' => $event->guard,
                'failed_time' => now(),
            ])
            ->log('Login attempt failed');
    }


    public function handleRegistered(Registered $event): void
    {
        activity()
            ->causedBy($event->user)
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'registration_time' => now(),
            ])
            ->log('User registered');
    }

    public function handleVerified(Verified $event): void
    {
        activity()
            ->causedBy($event->user)
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'verified_time' => now(),
            ])
            ->log('Email verified');
    }
    
    public function handlePasswordReset(PasswordReset $event): void
    {
        activity()
            ->causedBy($event->user)
            ->withProperties([
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'reset_time' => now(),
            ])
            ->log('Password reset');
    }

    public function subscribe($events): array
    {
        return [
            Login::class => 'handleLogin',
            Logout::class => 'handleLogout',
            Failed::class => 'handleFailed',
            Attempting::class => 'handleAttempting', // Optional
            Registered::class => 'handleRegistered',
            Verified::class => 'handleVerified',
            PasswordReset::class => 'handlePasswordReset',
        ];
    }
}
