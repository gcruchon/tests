# tests

Repo for small tests :

- Bug with jest and Svelte using setInterval and reactive statement: [svelte-timer](svelte-timer)
- Bug with [Svelte](https://github.com/sveltejs/svelte) version > 3.39.0 and mocking some modules

Test for mermaid
```mermaid
graph TD;
    Svelte-->svelte-timer;
    Svelte-->svelte-null-parent-component;
    svelte-timer-->No anwser;
    svelte-null-parent-component-->No anwser;
```
