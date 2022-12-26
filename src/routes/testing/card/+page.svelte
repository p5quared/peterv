
<div class="cards">
    <div class="card" id="card0">
        <a href="/projects/">
            I am a card
        </a>
    </div>
    <div class="card" id="card1">
        <a href="/projects/">
            I am a card
        </a>
    </div>
    <div class="card" id="card2">
        <a href="/projects/">
            I am a card
        </a>
    </div>
</div>


<style>
    #card0  {
        position: absolute;
        top: 400px;
        left: 40px;

        rotate: 30deg;
    }
    #card2 {
        position: absolute;
        top: 50%;
        left: 50%;

        rotate: -10deg;
    }
    .cards {
        width: 100vw;
        height: 100vh;
        background-color: var(--color-background);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    Card {
        position: absolute;
    }


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