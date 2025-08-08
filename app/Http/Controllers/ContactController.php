<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:150',
            'subject' => 'required|string|max:200',
            'message' => 'required|string',
        ]);

        $validated['ip_address'] = $request->ip();
        $validated['user_agent'] = $request->header('User-Agent');

        Contact::create($validated);

        // return response()->json([
        //     'message' => 'Pesan berhasil dikirim!',
        // ]);
    }

    public function index()
    {
        $contacts = Contact::latest()->paginate(10);
        return view('admin.contacts.index', compact('contacts'));
    }

    public function show(Contact $contact)
    {
        return view('admin.contacts.show', compact('contact'));
    }
}
