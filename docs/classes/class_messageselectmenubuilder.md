  
# MessageSelectMenuBuilder
  
**Inherits:** [MessageComponentBuilder](./class_messagecomponentbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message select menus.

- Select menus must be sent inside an Action Row.
- An Action Row can contain only one select menu.
- An Action Row containing a select menu cannot also contain buttons.  
  
## Methods
  
| return type                                                     | signature                                                                                                                                     |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) | [add\_option](#method-add-option) **(** [MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) option **)**                      |
| [MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) | [with\_placeholder](#method-with-placeholder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) placeholder **)** |
| [MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) | [min\_values](#method-min-values) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) min\_values **)**                   |
| [MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) | [max\_values](#method-max-values) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) max\_values **)**                   |
| [MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) | [disabled](#method-disabled) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                            |  
  
## Constants
  
- <a name="constant-MAX-OPTIONS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_OPTIONS** = 25  
  
	Maximum number of options in a select menu.  
________________

- <a name="constant-PLACEHOLDER-MAX-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **PLACEHOLDER\_MAX\_LENGTH** = 150  
  
	Maximum number of characters in a text input placeholder.  
________________

- <a name="constant-MAX-VALUES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_VALUES** = 25  
  
	Maximum number of items that can be chosen.  
________________

- <a name="constant-MIN-VALUES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MIN\_VALUES** = 0  
  
	Minimum number of items that can be chosen.
  
  
## Method Descriptions
  
- <a name="method-MessageSelectMenuBuilder"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **MessageSelectMenuBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id **)**  
  
	Constructs a new `MessageSelectMenuBuilder` instance with a `custom_id`.  
________________

- <a name="method-add-option"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **add\_option** **(** [MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) option **)**  
  
	Adds an `option` to the select menu.  
________________

- <a name="method-with-placeholder"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **with\_placeholder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) placeholder **)**  
  
	Sets a placeholder text to show if nothing is selected.  
________________

- <a name="method-min-values"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **min\_values** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) min\_values **)**  
  
	Sets the minimum number of items that must be chosen, default to `1`.  
________________

- <a name="method-max-values"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **max\_values** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) max\_values **)**  
  
	Sets the maximum number of items that can be chosen, default to `1`.  
________________

- <a name="method-disabled"></a>[MessageSelectMenuBuilder](./class_messageselectmenubuilder.md) **disabled** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Disables the select menu.  
________________

  
