export const SNIPPET_ID = 'skeleton-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-skeleton class="h-20 w-32 rounded-full"></div>

<!-- Animation types -->
<div av-skeleton animation-type="shimmer" class="h-10 rounded-lg"></div>
<div av-skeleton animation-type="pulse" class="h-10 rounded-lg"></div>
<div av-skeleton animation-type="none" class="h-10 rounded-lg"></div>

<!-- Synchronized shimmer over a group -->
<div class="av-skeleton--shimmer relative grid grid-cols-3 gap-4 overflow-hidden rounded-xl">
  <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
  <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
  <div av-skeleton animation-type="none" class="h-24 rounded-xl"></div>
</div>`;
