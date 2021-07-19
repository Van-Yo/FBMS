<template>
    <div>
        <ul class="flex">
            <ScrollNum
                v-for="(number, idx) of numArr"
                :key="idx"
                :i="number"
                :delay="idx + 2.5"
                as="li"
                class="num"
            />
        </ul>
    </div>
</template>

<script>
import ScrollNum from "../../components/common/ScrollNum.vue";

export default {
    name: "App",
    components: { ScrollNum },
    data: () => ({ num: 886 }),
    computed: {
        numArr() {
            //   const str = String(this.num)

            return [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
        },
    },
};
</script>

<style>
.flex {
    display: flex;
}
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
.num {
    --width: 26px;
    margin-right: 6px;
    border: 1px solid black;
    border-radius: 8px;
}
</style>

