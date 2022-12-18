<svelte:head>
    <title>More Info</title>
    <meta name="More Info" content="A few of my links." />
</svelte:head>
<div id="background">
    <div id="content">
        <ul>
            <li class="left_slider">
                <a  href="https://github.com/p5quared">GitHub</a>
            </li>
            <li class="left_slider">
                <a href="/">Resume</a>
            </li>
            <li class="left_slider">
                <a  href="/">Contact</a>
            </li>
        </ul>
        <a id="more" href="/">Return</a>
    </div>
</div>


<style>
    a {
        text-decoration: none;
    }
    li {
        padding: 14px;
        width: min-content;
    }
    li a {
        font-size: 90px;
        color: #FFFF;
    }
    #more {
        color: var(--color-secondary);
        border-bottom: 8px solid var(--color-secondary);
        font-size: 72px;
        padding-top: 5px;
        padding-inline: 5px;

        background-size: 100% 200%;
        background-image: linear-gradient(
                    var(--color-background-2) 50%,
                    var(--color-secondary) 50%
                    );
        transition: background-position .3s cubic-bezier(0,.19,.76,.25), color 0.3s linear;
    }
    #more:hover {
        background-position: -50% 100%;
        color: var(--color-background-2);
    }

    #content {
        height: 100%;
        padding-top: 1em;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

    }
    #background {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--color-background-2);
    }

    .left_slider {
        background-image: linear-gradient(90deg,
        var(--color-background-2) 50%,
        var(--color-secondary) 50%);
        background-size: 300%;
        transition: background-position .4s cubic-bezier(.28,.63,.73,.25), color 0.2s linear;
        transition-delay: 0s, 2s;
    }
    .left_slider:hover {
        background-position: -50% 150%;
    }

</style>