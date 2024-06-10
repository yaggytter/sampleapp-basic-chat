<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        .message-board {
            /* ヘッダーとフッター、テナント名セクションの大きさを引いた大きさ */
            height: calc(100vh - 56px - 58px - 56px);
            overflow: scroll;
        }
    </style>
    <title>SampleApp SaaSus Message Board</title>
</head>

<body>
    @include('components.header.index')
    <div class="bg-gray-200">
        <div class="max-w-md mx-auto">
            <div class="bg-slate-900 p-4 h-14">
                <p class="text-white text-xl font-bold">
                    {{ $tenant_name }}
                </p>
            </div>
            <div class="bg-white px-4 py-2 message-board" id="messageBoard">
                @foreach ($messages as $message)
                    <div class="mt-4">
                        <p>
                            {{ $message->user->name }}
                            <span class="text-xs text-gray-500">
                                {{ $message->created_at->format('Y/m/d H:i') }}
                            </span>
                        </p>
                        <div class="block p-3 bg-white rounded-lg border border-gray-200 shadow-md">
                            <p class="font-normal text-gray-700">
                                {{ $message->message }}
                            </p>
                        </div>
                    </div>
                @endforeach
            </div>
            <form class="inset-x-0 bottom-0" action="{{ route('post') }}" method="POST">
                @csrf
                <label for="chat" class="sr-only">Your message</label>
                <div class="flex items-center py-2 px-3 bg-gray-50">
                    <textarea rows="1"
                        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your message..." id="messageArea" name="message"></textarea>
                    <button type="submit"
                        class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 disabled:pointer-events-none disabled:text-gray-300"
                        id="submitBtn">
                        <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                            </path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <script>
        (function() {
            const messagesArea = document.getElementById('messageBoard');
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }())
    </script>
</body>

</html>
