<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let text = ''
    const onSubmit = () => {
        dispatch('add', text)
        text = ''
    }
</script>
<form on:submit|preventDefault={onSubmit}>
    <input type="text" bind:value={text} />
</form>