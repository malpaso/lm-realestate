@props([
    'base' => 'prose max-w-none
    prose-p:text-lg prose-p:font-light prose-p:text-dark-800 prose-p:leading-8
    prose-headings:font-heading prose-headings:mb-8 prose-headings:mt-0 prose-headings:text-dark-950
    prose-hr:border-dark-200
    prose-lead:text-dark-950
    prose-li:text-dark-950 marker:text-dark-950
    prose-ul:marker:text-dark-950 prose-ul:grid prose-ul:md:grid-cols-2 prose-ul:xl:grid-cols-3
    prose-em:font-sans prose-em:italic prose-em:text-dark-950',
])

@php
$classes = $base;
@endphp

<div {{ $attributes->twMerge(["class" => $classes]) }}>
    {{ $slot }}
</div>
