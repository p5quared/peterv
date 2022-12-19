<div id="heroContainer">
    <div>
        <div id="meSVG">Container for Me as SVG</div>
        <h1 id="signature">PeterS.V.</h1>
    </div>
    <a id="more" href="/more">More</a>
</div>


<style>
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
        background-color: var(--color-secondary);
        width: 250px;
        height: 300px;
        margin-bottom: 1em;

        text-align: center;
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
</style>