<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow h-14">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="{{ route('board') }}" class="flex items-center">
            <img src="{{ asset('img/SaaSusPlatformLogo.png') }}" class="mr-3 h-6 sm:h-9" alt="SaaSus Logo" />
        </a>
        <form id="logout-form" action="{{ route('logout')}}" method="POST">
            @csrf
            <button type="submit">
                ログアウト
            </button>
        </form>

        <div class="flex" style="display: none;">
            <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="showRatePlansBtn">
                料金プラン
            </button>
            <div class="hidden origin-top-right absolute w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                id="RatePlans">
                @foreach ($plans as $plan)
                    <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onclick="showSelectedPlan(`{{ $plan }}`)">
                        <p>
                            {{ $plan }}
                        </p>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</nav>

<script>
    // 料金プランを出す処理
    document.addEventListener('click', (e) => {
        if (e.target.closest('#showRatePlansBtn')) {
            document.getElementById('RatePlans').classList.remove('hidden')
        } else if (e.target.closest('#RatePlans')) {
            document.getElementById('RatePlans').classList.remove('hidden')
        } else {
            document.getElementById('RatePlans').classList.add('hidden')
        }
    })

    // 選択したプランを出す処理
    function showSelectedPlan(planName) {
        alert(`${planName}を選択しました`)
    }
</script>
