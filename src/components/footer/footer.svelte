<script>
    const year = new Date().getFullYear();
</script>

<footer>&copy; Utsav Deep {year}</footer>

<style>
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        footer {
            display: none;
            visibility: hidden;
        }
    }
</style>
