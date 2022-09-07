<script>
    import { aboutPageIcon, projectPageIcon, workPageIcon, contactPageIcon } from '../icons/iconData';
    import { onMount } from 'svelte';

    $: url = '';

    let pages = [
        {
            name: 'About',
            href: '/',
            icon: aboutPageIcon,
            primaryColor: '#111418',
            secondaryColor: '#00e0b0',
        },
        {
            name: 'Project',
            href: '/project',
            icon: projectPageIcon,
            primaryColor: '#111418',
            secondaryColor: '#f8ca12',
        },
        {
            name: 'Work',
            href: '/work',
            icon: workPageIcon,
            primaryColor: '#111418',
            secondaryColor: '#bb2d4e',
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: contactPageIcon,
            primaryColor: '#111418',
            secondaryColor: '#10acc7',
        },
    ];

    const swapColor = (index) => {
        var temp = pages[index].primaryColor;
        pages[index].primaryColor = pages[index].secondaryColor;
        pages[index].secondaryColor = temp;
    };

    onMount(() => {
        url = window.location.href.replace(window.location.origin, '');
        console.log(url);
    });
</script>

<nav class="navbar">
    <table>
        <tr>
            {#each pages as page, index}
                <td>
                    {#if page.href === url}
                        <a href={page.href} class="navbarIcon active">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                class="icon"
                            >
                                <path d={page.icon} fill={page.secondaryColor} />
                            </svg>
                        </a>
                    {:else}
                        <a
                            href={page.href}
                            on:mouseenter={() => swapColor(index)}
                            on:mouseleave={() => swapColor(index)}
                            class="navbarIcon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="45"
                                height="45"
                                viewBox="0 0 24 24"
                                class="icon"
                            >
                                <path d={page.icon} fill={page.primaryColor} />
                            </svg>
                        </a>
                        <!-- <p>{page.name}</p> -->
                    {/if}
                </td>
            {/each}
        </tr>
    </table>
</nav>

<style>
    table {
        width: 100%;
    }

    .navbar {
        display: block;
        padding: 10px 10px 0 10px;
        text-align: center;
    }

    .active {
        background-color: #111418;
        border-radius: 50%;
    }

    .navbarIcon.active:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border-right: 40px solid transparent;
        border-left: 40px solid transparent;
        border-bottom: 35px solid #111418;
        position: absolute;
        margin: 10px 25px 0 -18px;
    }

    .icon {
        display: inline;
        border-radius: 20%;
    }

    .navbarIcon {
        display: inline-block;
        padding: 0.6rem;
    }

    .navbarIcon:hover {
        background-color: #111418;
        border-radius: 50%;
    }
</style>
