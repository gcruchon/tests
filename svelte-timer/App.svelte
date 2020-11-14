<script>
  import { onDestroy } from 'svelte';

  export let logThem = (count, remaining) => console.log(`count=${count} || remaining=${remaining}`);

  const NB_OF_SECONDS = 5;
  let count = 0;
  $: remaining = NB_OF_SECONDS - count;

  const increment = () => {
    count++;
    logThem(count, remaining);
    if (remaining === 1) {
      clearInterval(interval);
    }
  };

  const interval = setInterval(increment, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>
<h1>Timer of 5 sec.</h1>
<p>
  {#if remaining }
    Time remaining: {remaining} sec.
  {:else}
    Time's up.
  {/if}
</p>
