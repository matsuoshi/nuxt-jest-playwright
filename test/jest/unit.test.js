import { shallowMount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index unit test', () => {
  const wrapper = shallowMount(index)
  const $dayjs = wrapper.vm.$dayjs

  test('平日or週末のテスト', () => {
    const is_weekday = wrapper.vm.is_weekday
    expect(is_weekday($dayjs('2022-08-01'))).toBeTruthy() // mon
    expect(is_weekday($dayjs('2022-08-02'))).toBeTruthy() // tue
    expect(is_weekday($dayjs('2022-08-03'))).toBeTruthy() // wed
    expect(is_weekday($dayjs('2022-08-04'))).toBeTruthy() // thu
    expect(is_weekday($dayjs('2022-08-05'))).toBeTruthy() // fri
    expect(is_weekday($dayjs('2022-08-06'))).toBeFalsy()  // sat
    expect(is_weekday($dayjs('2022-08-07'))).toBeFalsy()  // sun
  })

  test('クリスマスか否かのテスト', () => {
    const is_xmas = wrapper.vm.is_xmas
    expect(is_xmas($dayjs('2022-12-23'))).toBeFalsy()
    expect(is_xmas($dayjs('2022-12-24'))).toBeTruthy()
    expect(is_xmas($dayjs('2022-12-25'))).toBeTruthy()
    expect(is_xmas($dayjs('2022-12-26'))).toBeFalsy()
  })
})
