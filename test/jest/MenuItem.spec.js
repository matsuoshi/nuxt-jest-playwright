import { mount } from '@vue/test-utils'
import MenuItem from '@/components/MenuItem.vue'

describe('MenuItem', () => {
  test('MenuItem が表示される', () => {
    const wrapper = mount(MenuItem, {
      propsData: {
        menu: {
          name: 'テストメニュー',
          price: 123456789
        }
      }
    })

    expect(wrapper.find('.name').text()).toBe('テストメニュー')
    expect(wrapper.find('.price').text()).toBe('¥123,456,789-')
  })
})
