<template>
    <div class="bg-secondary">
        <nav class="navbar navbar-expand-lg navbar-dark container">
            <a class="navbar-brand text-white" href="#">AAA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse md-ml-5" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <router-link to="/">
                        <li class="nav-item">
                            <span class="nav-link">Products</span>
                        </li>
                    </router-link>
                    <router-link to="/about">
                        <li class="nav-item">
                            <span class="nav-link">About</span>
                        </li>
                    </router-link>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown mr-3">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cart
                        </a>
                        <div class="dropdown-menu md-mt-2" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>