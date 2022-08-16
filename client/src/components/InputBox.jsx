import { FormControl, FormLabel } from '@chakra-ui/react'
import { InputControl } from 'formik-chakra-ui'
import "../pages/CampaignBriefs/style/Model.css"

const InputBox = ({ name, label, type, ...rest }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="gray" fontSize="sm">
        {label}
      </FormLabel>
      <InputControl
        id={name}
        name={name}
        inputProps={{
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

export default InputBox
