<script>
  import { createNewEndpoint } from '../stores.js';

  export let endpoint;


  function copyEndpoint () {
    console.log("Copying endpoint!...")
  }

</script>

<div class="w-full flex justify-between items-center mb-4" >
  <div class="md:w-2/3 flex-row border pl-4 pr-4 py-1 rounded border-gray-300">
    <span class="w-1/3 pr-4 border-r font-bold"><span class="spinner mr-2"></span> Endpoint Ready</span>
    <input
      class="w-2/3 pl-3 appearance-none bg-gray-100 border-none text-purple-800 leading-tight focus:outline-none"
      type="text" bind:value={endpoint} id="endpoint" readonly>
  </div>
  <div class="">
    <button
      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      on:click={copyEndpoint}>
      <i class="fas fa-copy mr-2"></i>Copy
    </button>
    <button
      class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text -teal-800 text-sm py-1 px-2 rounded"
       on:click={createNewEndpoint}>
      New Endpoint
    </button>
  </div>
</div>
