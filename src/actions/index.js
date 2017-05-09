export const INCREASE_BUTTON_VALUE = 'INCREASE_BUTTON_VALUE'
export const EDIT_FORM_TEXT = 'INCREASE_BUTTON_VALUE'

export function increaseValue() {
  return { type: INCREASE_BUTTON_VALUE }
}

export function editFormText(text) {
    return { type: EDIT_FORM_TEXT, text}
}
