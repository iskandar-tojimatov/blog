<template>
    <div class="form-group">
        <label class="form-control-label">{{label}}</label>
        <input :type="type" @input="updateInput" :value="modelValue" class="form-control input">
    </div>
</template>

<script>
    export default {
        props:{
            label:String,
            type:String,
            modelValue:[String,Number]
        },
        methods: {
            updateInput(e){
                this.$emit('update:modelValue', e.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>