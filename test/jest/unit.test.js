import { shallowMount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index unit test', () => {
  const wrapper = shallowMount(index)
  const $dayjs = wrapper.vm.$dayjs

  test('平日or週末のテスト', () => {
    const is_weekday = wrapper.vm.is_weekday
    expect(is_weekday($dayjs('2022-08-01'))).toBe(true)  // mon
    expect(is_weekday($dayjs('2022-08-02'))).toBe(true)  // tue
    expect(is_weekday($dayjs('2022-08-03'))).toBe(true)  // wed
    expect(is_weekday($dayjs('2022-08-04'))).toBe(true)  // thu
    expect(is_weekday($dayjs('2022-08-05'))).toBe(true)  // fri
    expect(is_weekday($dayjs('2022-08-06'))).toBe(false) // sat
    expect(is_weekday($dayjs('2022-08-07'))).toBe(false) // sun
  })

  test('クリスマスか否かのテスト', () => {
    const is_xmas = wrapper.vm.is_xmas
    expect(is_xmas($dayjs('2022-12-23'))).toBe(false)
    expect(is_xmas($dayjs('2022-12-24'))).toBe(true)
    expect(is_xmas($dayjs('2022-12-25'))).toBe(true)
    expect(is_xmas($dayjs('2022-12-26'))).toBe(false)
  })
})
