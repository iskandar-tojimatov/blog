<template>
    <ul v-if="errorMessages"  style="padding-left: 0; margin-bottom: 0;">
        <li v-for="validationError in validationErrors" :key="validationError">
            {{validationError}}
        </li>
    </ul>
</template>

<script>
    export default {
        computed:{
            errorMessages(){
               return this.$store.state.auth.error
            },
            validationErrors(){
                return Object.keys(this.errorMessages).map(name=>{
                    const msg = this.errorMessages[name].join(', ')
                    return `${name} ${msg}`
                })
            }
        }
    }
</script>
