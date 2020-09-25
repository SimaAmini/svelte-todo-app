<script>
  import { tasks } from '../store.js';

  export let task;

  const onDelete = () => {
    const list = $tasks.filter(t => t.id !== task.id);
    tasks.set(list);
  };
  const onDone = () => {
    const index = $tasks.findIndex(t => t.id === task.id);
    $tasks[index].status = !$tasks[index].status;
    tasks.set($tasks);
  };
</script>

<div class="task">
  <p class={task.status ? 'task-done' : ''}>{task.text}</p>
  <div class="actions">
    <button class="btn btn-danger" on:click={onDelete}>Delete</button>
    <button
      class="btn"
      on:click={onDone}>{task.status ? 'Un-Done' : 'Done'}</button>
  </div>
</div>
