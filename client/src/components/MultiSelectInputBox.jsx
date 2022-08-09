import { FormControl, FormLabel } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'

const MultiSelectInputBox = ({ options, name, label, ...rest }) => {
  // onChange={(e) => console.log(e.map((v) => v['value']))}
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="gray" fontSize="sm">
        {label}
      </FormLabel>
      <Select
        className="chakra-react-select"
        classNamePrefix="chakra-react-select"
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        id={name}
        isMulti
        menuPlacement="auto"
        name={name}
        options={options}
        selectedOptionStyle="check"
        chakraStyles={{
          control: (provided) => ({
            ...provided,
            variant: 'outline',
            border: '2px',
            borderRadius: '0px',
            borderColor: 'gray',
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            bg: 'transparent',
            px: 2,
            cursor: 'inherit',
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
          }),
        }}
        {...rest}
      />
    </FormControl>
  )
}

export default MultiSelectInputBox
