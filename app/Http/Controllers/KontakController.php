<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class KontakController extends Controller
{
    /**
     * Display the contact page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return Inertia::render('User/Kontak', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Here you can handle the form submission, e.g., send an email or save to the database

        // Redirect back with a success message
        return redirect()->route('kontak')->with('success', 'Your message has been sent successfully!');
    }
}
