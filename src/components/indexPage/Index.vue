<!--
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 首页
--> 
<template>
  <div class="index">{{name}}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Index",
  components: {  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      name: (state) => state.name,
    }),
  },
  created() {},
};
</script>
<style lang="stylus">
.index {
  font-size: 16px;
  color: red;
}
</style>