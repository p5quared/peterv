<script>
    // body
    import "@fontsource/catamaran"
    import "@fontsource/comfortaa"

    // script
    import "@fontsource/comforter"
    import "@fontsource/comforter-brush"
    import "@fontsource/nothing-you-could-do"

    import "./reset.css"
</script>

<slot />

<style>
    :root {
        --font-body: "Catamaran", sans-serif;
        --font-script: "Nothing You Could Do", cursive;
        --color-body: #4F4F4F;
        --color-secondary: #2E933C;

        --color-background: #EFD6AC;
        --color-background-2: #4F4F4F;

        color: var(--color-body);

        font-family: var(--font-body);
        font-size: 24px;
    }

</style>