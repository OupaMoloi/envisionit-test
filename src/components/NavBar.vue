<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Technical Test</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item right href="#/">Home</b-nav-item>
                    <b-nav-item right href="#/about">About</b-nav-item>
                    <b-nav-item right href="#/task">Task</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
    name: 'Navbar'
    };
</script>
