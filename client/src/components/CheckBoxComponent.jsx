import { CheckboxContainer, CheckboxControl } from 'formik-chakra-ui'

const CheckBoxComponent = ({ name, label, oprions, colorScheme }) => {
  return (
    <CheckboxContainer
      name={name}
      label={label}
      labelProps={{
        color: 'gray',
        fontSize: 'sm',
      }}
      stackProps={{
        direction: 'row',
        gap: 3,
        padding: 0,
      }}
    >
      {oprions.map((option) => (
        <CheckboxControl
          key={option}
          colorScheme={colorScheme}
          name={name}
          value={option}
        >
          {option}
        </CheckboxControl>
      ))}
    </CheckboxContainer>
  )
}

export default CheckBoxComponent
