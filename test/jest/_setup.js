import { config } from '@vue/test-utils'
import $dayjs from 'dayjs'

config.mocks['$dayjs'] = $dayjs
