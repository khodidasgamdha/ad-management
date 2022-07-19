import { FormControl, FormLabel } from '@chakra-ui/react'
import { NumberInputControl } from 'formik-chakra-ui'

const NumberInputBox = ({ name, label, type, ...rest }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="gray" fontSize="sm">
        {label}
      </FormLabel>
      <NumberInputControl
        id={name}
        name={name}
        numberInputProps={{
          variant: 'outline',
          border: '2px',
          borderRadius: 0,
          borderColor: 'gray',
          type: type || 'text',
          ...rest,
        }}
      />
    </FormControl>
  )
}

export default NumberInputBox
