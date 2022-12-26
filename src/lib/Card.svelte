<script>
    export const project=0;
    export const image="";
    export const num=0;
</script>

<div class="card" id={"card"+num}>
    <a href="/projects/{project}">
        I am a card
    </a>
</div>


<style>
    .card {
        width: 150px;
        height: 200px;

        color: aquamarine;
        background-color: var(--color-background-2);

        border-radius: 25px;

        transition: cubic-bezier(.74,-0.06,.23,1.04) 1s;

    }

    .card:hover {
        transform: translateY(-40px) scale(1.05);
    }

    a {
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>