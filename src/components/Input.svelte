<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let text = '';
  const onSubmit = () => {
    dispatch('add', text);
    text = '';
  };
</script>

<form on:submit|preventDefault={onSubmit} class="task-input">
  <input
    placeholder="Type something and then hit enter"
    type="text"
    bind:value={text} />
</form>
