<script>
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./Header.svelte";
  import Home from "./Home.svelte";
  import About from "./About.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <Header withLinks={true} />
  <div>
    <Route path="about"><About /></Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>
