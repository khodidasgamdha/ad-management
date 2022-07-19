import { FormControl, FormLabel } from '@chakra-ui/react'
import { TextareaControl } from 'formik-chakra-ui'

const TextAreaBox = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="gray" fontSize="sm">
        {label}
      </FormLabel>
      <TextareaControl
        id={name}
        name={name}
        textareaProps={{
          variant: 'outline',
          border: '2px',
          borderRadius: 0,
          borderColor: 'gray',
          resize: 'none',
          rows: 3,
          ...rest,
        }}
      />
    </FormControl>
  )
}

export default TextAreaBox
