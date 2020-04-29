<script>
    import Task from './Task.svelte'

    export let tasks;

</script>
<div class="tasks">
    {#each tasks as task}
        <Task task={task} />
    {/each}
</div>