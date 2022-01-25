<template>
  <main>
    <h1>Grand Menu</h1>
    <ul class="menu">
      <li v-for="menuItem in grandMenu">
        <MenuItem :menu="menuItem"/>
      </li>
    </ul>
  </main>
</template>

<script>
import menu_json from '@/data/menu.json'
import MenuItem from '@/components/MenuItem'

export default {
  components: {
    MenuItem
  },

  data() {
    return {
      grandMenu: this.createGrandMenu(menu_json)
    }
  },

  methods: {
    createGrandMenu(menu) {
      let grandMenu = menu.regular_menu ?? []

      if (this.is_xmas()) {
        grandMenu = grandMenu.concat(menu.xmas_menu ?? [])
      }
      else if (this.is_weekday()) {
        grandMenu = grandMenu.concat(menu.service_menu ?? [])
      }

      return grandMenu
    },

    is_weekday(dayjs = this.$dayjs()) {
      return dayjs.format('ddd') !== 'Sat' && dayjs.format('ddd') !== 'Sun'
    },

    is_xmas(dayjs = this.$dayjs()) {
      return (
        dayjs.month() === 11 &&
        (dayjs.date() === 24 || dayjs.date() === 25)
      )
    }
  }
}
</script>
