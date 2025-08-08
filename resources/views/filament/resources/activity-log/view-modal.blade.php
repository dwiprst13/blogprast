{{-- resources/views/filament/resources/activity-log/view-modal.blade.php --}}
<div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
        <div>
            <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">Activity Details</h3>
            <dl class="mt-2 space-y-2">
                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Description:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">{{ $record->description }}</dd>
                </div>

                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Log Name:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">{{ $record->log_name }}</dd>
                </div>

                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Date & Time:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">{{ $record->created_at->format('Y-m-d H:i:s') }}</dd>
                </div>

                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">User:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">
                        {{ $record->causer ? $record->causer->name : 'System' }}
                        @if($record->causer)
                        <span class="text-xs text-gray-500">(ID: {{ $record->causer->id }})</span>
                        @endif
                    </dd>
                </div>
            </dl>
        </div>

        <div>
            <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">Subject Information</h3>
            <dl class="mt-2 space-y-2">
                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Subject Type:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">
                        {{ $record->subject_type ? class_basename($record->subject_type) : '-' }}
                    </dd>
                </div>

                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Subject ID:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100">{{ $record->subject_id ?? '-' }}</dd>
                </div>

                @if($record->batch_uuid)
                <div>
                    <dt class="text-xs font-medium text-gray-500 dark:text-gray-400">Batch UUID:</dt>
                    <dd class="text-sm text-gray-900 dark:text-gray-100 font-mono text-xs">{{ $record->batch_uuid }}</dd>
                </div>
                @endif
            </dl>
        </div>
    </div>

    @if(!empty($properties))
    <div>
        <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Properties</h3>

        {{-- Format khusus untuk authentication properties --}}
        @if(isset($properties['ip']) || isset($properties['user_agent']))
        <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-3">
            <h4 class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Authentication Info</h4>
            <div class="space-y-1">
                @if(isset($properties['ip']))
                <div class="flex justify-between">
                    <span class="text-xs text-gray-500">IP Address:</span>
                    <span class="text-xs text-gray-900 dark:text-gray-100 font-mono">{{ $properties['ip'] }}</span>
                </div>
                @endif

                @if(isset($properties['user_agent']))
                <div class="flex justify-between">
                    <span class="text-xs text-gray-500">User Agent:</span>
                    <span class="text-xs text-gray-900 dark:text-gray-100 break-all">{{ $properties['user_agent'] }}</span>
                </div>
                @endif

                @if(isset($properties['session_id']))
                <div class="flex justify-between">
                    <span class="text-xs text-gray-500">Session ID:</span>
                    <span class="text-xs text-gray-900 dark:text-gray-100 font-mono">{{ $properties['session_id'] }}</span>
                </div>
                @endif
            </div>
        </div>
        @endif

        {{-- Format untuk model changes --}}
        @if(isset($properties['attributes']) || isset($properties['old']))
        <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-3">
            <h4 class="text-xs font-medium text-blue-700 dark:text-blue-300 mb-2">Model Changes</h4>

            @if(isset($properties['old']) && !empty($properties['old']))
            <div class="mb-2">
                <h5 class="text-xs font-medium text-red-600 dark:text-red-400">Old Values:</h5>
                <pre class="text-xs bg-red-50 dark:bg-red-900/20 p-2 rounded mt-1 overflow-x-auto">{{ json_encode($properties['old'], JSON_PRETTY_PRINT) }}</pre>
            </div>
            @endif

            @if(isset($properties['attributes']) && !empty($properties['attributes']))
            <div>
                <h5 class="text-xs font-medium text-green-600 dark:text-green-400">New Values:</h5>
                <pre class="text-xs bg-green-50 dark:bg-green-900/20 p-2 rounded mt-1 overflow-x-auto">{{ json_encode($properties['attributes'], JSON_PRETTY_PRINT) }}</pre>
            </div>
            @endif
        </div>
        @endif

        {{-- Full properties JSON --}}
        <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <h4 class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">All Properties</h4>
            <pre class="text-xs text-gray-900 dark:text-gray-100 overflow-x-auto whitespace-pre-wrap">{{ json_encode($properties, JSON_PRETTY_PRINT) }}</pre>
        </div>
    </div>
    @else
    <div class="text-center py-4">
        <span class="text-sm text-gray-500 dark:text-gray-400">No additional properties available</span>
    </div>
    @endif
</div>