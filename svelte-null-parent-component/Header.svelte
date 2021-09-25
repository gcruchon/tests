<script>
  import { Link } from "svelte-routing";
  export let withLinks = false;
</script>

<p>I'm a header</p>
{#if withLinks}
  <nav>
    <Link to="/">Home</Link> |
    <Link to="about">About</Link>
  </nav>
{/if}
