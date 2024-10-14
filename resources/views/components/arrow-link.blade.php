<a {{ $attributes->twMerge(['class' => 'flex items-center space-x-2 font-bold text-brand-950']) }}>
    {{ $slot }}

    <svg width="24" height="24" class="w-6 h-6 text-brand-950 shrink-0 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702" stroke="#0F68FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.5 12H20.33" stroke="#0F68FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</a>