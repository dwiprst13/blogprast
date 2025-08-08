@if ($thumbnail)
<div class="mb-4">
    <label class="block font-semibold mb-1 text-sm text-gray-700">Current Thumbnail:</label>
    <img src="{{ asset('storage/' . $thumbnail) }}" alt="Thumbnail" class="w-40 rounded-lg shadow">
</div>
@endif