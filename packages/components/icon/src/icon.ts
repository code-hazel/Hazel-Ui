// as const 则可以快速将一个对象变成只读类型
// ExtractPropTypes ，它的作用是接收一个类型，然后把对应的所接收的 props 类型返回出来

import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

export type Props = ExtractPropTypes<typeof iconProps>