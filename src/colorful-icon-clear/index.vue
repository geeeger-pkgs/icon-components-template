<template>
  <div
    class="colorful-icon colorful-icon-clear"
    :style="computedStyle"
    @click="onClick"
  >
    <div style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAABbElEQVRYCe1ZsQ6CMBC1xjg5sPpjjK5sTCaamDiYuDmxsTryY6wMTi74jrSNGqo9LEj0mpgDvHv3+ri2oVUTZiuKYl5V1aGu6xVCl8zwUil1jqJoH8fxlRM74ziTrya54cZp/yU6uAEG3W45GFOOM/lqJblhD/5dMNiKIqN93UmSqAcGb27yPK+1i8V4E2L/ZiuKGmtqy1iL5HFhYoz1CLEubKJ4bSdEX7S1QD4Xn8T64IvPTyqgMBKPKO416mc+xh7SwKPapsGUjpUkCae5pUQ06zJdEMgQTXPLhsglOUapgHOtptkAjFP8Mqzpuz7Z++RyLqE0ZYHcQts+eU58cjmJminL2D6ZmhzGtuVyEm1z/uYzIRpafVFUFA2tQGg8qVFRNLQCofGkRkXR0AqExpMa/VtFX23kllCl2XC924ANLdQzHuVsbc4axQfXuTWix4evcjoVpZMLOhTAB1eX0w9ud+xpCTdQ/H9egRtfUXVCRUuJ5gAAAABJRU5ErkJggg==');"></div>
  </div>
</template>

<script>
import { addUnit } from '../utils';

export default {
  name: 'colorful-icon-clear',

  props: {
    width: {
      type: [String, Number],
      default: '32px'
    },
    height: {
      type: [String, Number],
      default: '32px'
    }
  },

  computed: {
    computedStyle() {
      return {
        width: addUnit(this.width),
        height: addUnit(this.height)
      }
    }
  },

  methods: {
    onClick($event) {
      this.$emit('click', $event);
    }
  }
};
</script>

<style lang="less">
.colorful-icon-clear {
  display: inline-block;
  div {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
