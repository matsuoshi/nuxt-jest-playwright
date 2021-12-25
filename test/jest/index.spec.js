import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

const testMenu = {
  "regular_menu": [
    { "name": "レギュラーメニュー", "price": 100 }
  ],
  "service_menu": [
    { "name": "サービスメニュー", "price": 200 }
  ],
  "xmas_menu": [
    { "name": "クリスマスメニュー", "price": 300 }
  ]
}

describe('Grand Menu', () => {
  const wrapper = mount(index)
  const $dayjs = wrapper.vm.$dayjs

  test('レギュラーメニューが表示される', async () => {
    await wrapper.setData({
      grandMenu: wrapper.vm.createGrandMenu(testMenu)
    })
    const menuText = wrapper.find('.menu').text()
    console.log(menuText)
    expect(menuText).toContain('レギュラーメニュー')
  })

  jest.useFakeTimers('modern')

  test('平日ならばサービスメニューが表示される', async () => {
    jest.setSystemTime($dayjs('2022-01-04').valueOf()) // tuesday

    await wrapper.setData({
      grandMenu: wrapper.vm.createGrandMenu(testMenu)
    })
    const menuText = wrapper.find('.menu').text()
    console.log(menuText)
    expect(menuText).toContain('サービスメニュー')
  })

  test('週末ならばサービスメニューが表示されない', async () => {
    const menuText = await updateMenuData(wrapper, '2022-01-09') // sunday
    expect(menuText).not.toContain('サービスメニュー')
  })

  test('クリスマスならば専用メニューが表示される', async () => {
    const menuText = await updateMenuData(wrapper, '2022-12-25')
    expect(menuText).toContain('クリスマスメニュー')
  })

  test('クリスマスかつ平日の場合、サービスメニューは表示されない', async () => {
    const menuText = await updateMenuData(wrapper, '2023-12-25') // monday
    expect(menuText).toContain('クリスマスメニュー')
    expect(menuText).not.toContain('サービスメニュー')
  })

  async function updateMenuData(wrapper, date) {
    jest.setSystemTime($dayjs(date).valueOf())
    await wrapper.setData({ grandMenu: wrapper.vm.createGrandMenu(testMenu) })
    const menuText = wrapper.find('.menu').text()
    console.log(menuText)
    return menuText
  }

  afterAll(() => {
    jest.useRealTimers()
  });
})
