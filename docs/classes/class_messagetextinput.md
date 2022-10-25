  
# MessageTextInput
  
**Inherits:** [MessageInteractiveComponent](./class_messageinteractivecomponent.md) < [MessageComponent](./class_messagecomponent.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Interactive component that renders on modals.
They can be used to collect short-form or long-form text.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [style](#property-style)             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [label](#property-label)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [min\_length](#property-min-length)  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [max\_length](#property-max-length)  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [required](#property-required)       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [value](#property-value)             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [placeholder](#property-placeholder) |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Styles**  
  
	- **SHORT** = 1  

	- **PARAGRAPH** = 2  

  
	Text input styles.
  
  
## Property Descriptions
  
- <a name="property-style"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **style**  
  
	Style of text input.  
________________

- <a name="property-label"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **label**  
  
	The label for this component.  
________________

- <a name="property-min-length"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **min_length**  
  
	The minimum input length for a text input.  
________________

- <a name="property-max-length"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_length**  
  
	The maximum input length for a text input.  
________________

- <a name="property-required"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **required**  
  
	Whether this component is required to be filled,  
________________

- <a name="property-value"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **value**  
  
	A pre-filled value for this component.  
________________

- <a name="property-placeholder"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **placeholder**  
  
	Custom placeholder text if the input is empty.
  
