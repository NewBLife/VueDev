<template>
    <div>
        UserID: {{ $route.params.userId }} 
        
        <router-link :to="{name:'userprofile',params:{userId:$route.params.userId}}">Go to User profiles</router-link>            
        <router-link :to="{name:'userpost',params:{userId:$route.params.userId}}">Go to User posts</router-link>
        <router-view></router-view>
        <router-view name="helper"></router-view>
    </div>
</template>
