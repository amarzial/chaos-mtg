<template lang="">
    <div class="history">
        <div class="history-item" v-for="(item, index) in getHistory" :key="index">
            <b>{{item.name}}</b> <span class="history-type">({{item.list}})</span>
            <br>
            {{ item.desc}}
        </div>
    </div>
</template>
<script>
import { getHistory } from '@/js/chaos';
export default {
    computed: {
        getHistory
    }
}
</script>
<style>
.history {
    overflow-y: auto;
    flex: 1;
}

.history-item {
    border-bottom: 1px solid black;
    padding: 5px;
}

.history-item:first-child {
    background-color: #fde9ce;
}

.history-type {
    color: #818080;
}
</style>
