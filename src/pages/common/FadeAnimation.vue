<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script type="text/javascript">
export default {
    name: 'FadeAnimation'
}
</script>
<style type="text/css">
    .v-enter, .v-leave-to {
        opacity: 0;
    }
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s
    }
</style>