import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useColorPickerContext } from './color-picker-context'

export interface ColorPickerFormatTriggerProps extends HTMLArkProps<'button'> {}

export const ColorPickerFormatTrigger = defineComponent({
  name: 'ColorPickerFormatTrigger',
  setup(_, { slots, attrs }) {
    const api = useColorPickerContext()

    return () => (
      <ark.button {...api.value.formatTriggerProps} {...attrs}>
        {slots.default?.()}
      </ark.button>
    )
  },
})
