  
# MessageSelectMenu
  
**Inherits:** [MessageInteractiveComponent](./class_messageinteractivecomponent.md) < [MessageComponent](./class_messagecomponent.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Interactive component that displays a list of options.
They single-select and multi-select behavior.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [disabled](#property-disabled)       |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [options](#property-options)         |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [placeholder](#property-placeholder) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [min\_values](#property-min-values)  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [max\_values](#property-max-values)  |  
  
## Property Descriptions
  
- <a name="property-disabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **disabled**  
  
	Disable the select.  
________________

- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	List of `MessageSelectOption`s.  
________________

- <a name="property-placeholder"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **placeholder**  
  
	Custom placeholder text if nothing is selected.  
________________

- <a name="property-min-values"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **min_values**  
  
	The minimum number of items that must be chosen.  
________________

- <a name="property-max-values"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_values**  
  
	The maximum number of items that can be chosen.
  
