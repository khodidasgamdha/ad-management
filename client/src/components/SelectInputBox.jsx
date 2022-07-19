import { FormControl, FormLabel } from '@chakra-ui/react'
import { SelectControl } from 'formik-chakra-ui'

const SelectInputBox = ({ label, name, placeholder, option = [], ...rest }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="gray" fontSize="sm">
        {label}
      </FormLabel>
      <SelectControl
        id={name}
        name={name}
        selectProps={{
          border: '2px',
          borderColor: 'gray',
          borderRadius: 0,
          placeholder: placeholder,
          _placeholder: {
            fontsize: '12px',
          },
          variant: 'outline',
        }}
      >
        {option.map((data, index) => (
          <option key={index} value={data.value}>
            {data.label}
          </option>
        ))}
      </SelectControl>
    </FormControl>
  )
}

export default SelectInputBox
