<div id="page-wrapper">
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
    <div id="heroContainer">
            <div id="meSVG">
                <img src="award.jpeg" alt="me winning award">
            </div>
            <h1 id="signature">PeterS.V.</h1>
        <a id="more" href="/more">More</a>
    </div>
</div>


<style>
    #card0 {
        z-index: 2;
        top: 20%;
        left: 53%;
        rotate: 30deg;
    }
    #card1 {
        z-index: 2;
        rotate: -132deg;

        top: 29%;
        right: 53%;
    }
    #card2 {
        z-index: 2;
        rotate: -36deg;

        top: 15%;
        right: 53%;

    }
    #heroContainer {
        width: fit-content;
        height: 100vh;
        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    #meSVG {
        /*background-color: var(--color-secondary);*/
        position: relative;
        width: 250px;
        height: 400px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #signature {
        font-family: var(--font-script);
        font-size: 3em;
    }

    #more {
        color: var(--color-secondary);
        border-bottom: 8px solid var(--color-secondary);
        font-size: 54px;
        padding: 9px 5px 0 5px;
        margin-bottom: 1em;
        height: 1em;

        background-size: 100% 200%;
        background-image: linear-gradient(
                var(--color-background) 50%,
                var(--color-secondary) 50%
        );
        transition: background-position .3s cubic-bezier(0,.19,.76,.25), color 0.3s linear;
    }
    #more:hover {
        background-position: -50% 100%;
        color: var(--color-background);
    }

    a {
        text-decoration: none;
    }

    body {
        background: var(--color-background);
    }
    img {
        height: 100%;
        z-index: 5;
    }

    #page-wrapper {
        height: 100vh;
        width: 100vw;
        background-color: var(--color-background);
    }

    .card {
        position: absolute;

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

    .card a {
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>