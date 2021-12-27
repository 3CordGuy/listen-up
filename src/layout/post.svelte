<script>
import { slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
export let post

let isHeaderExpanded = false;
let isBodyExpanded = false;


function copyPayload () {
  console.log("copying payload")
}
</script>

<div class="flex flex-row border-b overflow-hidden">
  <div class="w-1/4 p-4 flex flex-col justify-between">
    <div class="">
      <div class="font-bold">Received At</div>
      <div class="font-thin text-sm">{ new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'long' }).format(post.time) }</div>
    </div>
    <div class="">
      <button class="text-sm hover:text-purple-800" on:click={() => isHeaderExpanded = !isHeaderExpanded}>
        <span class="icon is-small">
          <i class="fas fa-eye"></i>
        </span>
        <span>
          {isHeaderExpanded ? 'Hide' : 'Show'} Headers
        </span>
      </button>
    </div>
  </div>
  <div class="w-3/4 p-4">

      {#if isHeaderExpanded}
        <div transition:slide="{{delay: 250, duration: 300, easing: quintOut }}" class="bg-gray-200 border rounded p-2 overflow-hidden mb-2">
          <pre>{ JSON.stringify(post.headers, null, 2) }</pre>
        </div>
      {/if}

    <div class="bg-gray-200 border rounded p-2 relative overflow-hidden shadow-inner" class:h-24={!isBodyExpanded} >
      <div class="absolute right-0 mr-4 flex flex-row justify-end">
        <button class="text-indigo-600 self-end px-2 mr-2 text-sm" on:click={() => isBodyExpanded = !isBodyExpanded}>{isBodyExpanded ? 'Collapse' : 'Expand'}</button>
        <button class="text-white-200 bg-gray-300 hover:bg-gray-400 rounded-sm self-end px-2 text-sm" on:click={copyPayload}>Copy Payload</button>
      </div>
      <pre>{ JSON.stringify(post.body, null, 2) }</pre>
    </div>
  </div>
</div>
