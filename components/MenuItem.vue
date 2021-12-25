<template>
  <div class="menuItem">
    <span class="name">{{ menu.name }}</span>
    <span class="price">{{ priceFormat(menu.price) }}</span>
  </div>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    priceFormat: function (price) {
      return '¥' + price.toLocaleString('ja-JP') + '-'
    }
  }
}
</script>
