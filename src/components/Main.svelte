<script>
    import Input from './Input.svelte'
    import Tasks from './Tasks.svelte'
    import { tasks } from "../store.js";

    const add = (e) => {
        const newTask = {
            id: new Date().getTime(),
            text: e.detail,
            status: false
        }
        tasks.set([...$tasks, newTask]);
    }

</script>

<Input on:add={add} />
<Tasks tasks={$tasks}/> 