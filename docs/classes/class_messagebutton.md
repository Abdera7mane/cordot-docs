  
# MessageButton
  
**Inherits:** [MessageInteractiveComponent](./class_messageinteractivecomponent.md) < [MessageComponent](./class_messagecomponent.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Button message component.

`custom_id` is empty when `url` is set, and the button does not fire an
interaction event if it is the case.  
  
## Properties
  
| type                                                                    | name                           |
|-------------------------------------------------------------------------|--------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [disabled](#property-disabled) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [style](#property-style)       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [label](#property-label)       |
| [Emoji](./class_emoji.md)                                               | [emoji](#property-emoji)       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [url](#property-url)           |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Styles**  
  
	- **PRIMARY** = 1  

	- **SECONDARY** = 2  

	- **SUCCESS** = 3  

	- **DANGER** = 4  

	- **LINK** = 5  

  
	Button styles
  
  
## Property Descriptions
  
- <a name="property-disabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **disabled**  
  
	Whether the button is disabled.  
________________

- <a name="property-style"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **style**  
  
	Button style.  
________________

- <a name="property-label"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **label**  
  
	The text that appears on the button.  
________________

- <a name="property-emoji"></a>[Emoji](./class_emoji.md) **emoji**  
  
	Button emoji if present.  
________________

- <a name="property-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **url**  
  
	Button URL, appliable when `style` is equal to `Styles.LINK`.
  
