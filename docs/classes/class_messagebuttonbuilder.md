  
# MessageButtonBuilder
  
**Inherits:** [MessageComponentBuilder](./class_messagecomponentbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message buttons.

- Buttons must be sent inside an Action Row.
- An Action Row can contain up to 5 buttons.
- An Action Row containing buttons cannot also contain a select menu.  
  
## Methods
  
| return type                                             | signature                                                                                                                                 |
|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageButtonBuilder](./class_messagebuttonbuilder.md) | [with\_label](#method-with-label) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) label **)**               |
| [MessageButtonBuilder](./class_messagebuttonbuilder.md) | [with\_custom\_id](#method-with-custom-id) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id **)** |
| [MessageButtonBuilder](./class_messagebuttonbuilder.md) | [with\_url](#method-with-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**                     |
| [MessageButtonBuilder](./class_messagebuttonbuilder.md) | [disabled](#method-disabled) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                        |  
  
## Constants
  
- <a name="constant-LABEL-MAX-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **LABEL\_MAX\_LENGTH** = 80  
  
	Maximum number of characters in a button label.
  
  
## Method Descriptions
  
- <a name="method-MessageButtonBuilder"></a>[MessageButtonBuilder](./class_messagebuttonbuilder.md) **MessageButtonBuilder** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) style **)**  
  
	Constructs a new `MessageButtonBuilder` instance.
	`style` takes a `MessageButton.Styles` value.  
________________

- <a name="method-with-label"></a>[MessageButtonBuilder](./class_messagebuttonbuilder.md) **with\_label** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) label **)**  
  
	Sets the button's label.  
________________

- <a name="method-with-custom-id"></a>[MessageButtonBuilder](./class_messagebuttonbuilder.md) **with\_custom\_id** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id **)**  
  
	Sets the message identifier.
	Can not be specified if the message `style` is `MessageButton.Styles.LINK`.  
________________

- <a name="method-with-url"></a>[MessageButtonBuilder](./class_messagebuttonbuilder.md) **with\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	Sets the message URL.
	Can not be specified if the message `style` is not `MessageButton.Styles.LINK`.  
________________

- <a name="method-disabled"></a>[MessageButtonBuilder](./class_messagebuttonbuilder.md) **disabled** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Disables the button.  
________________

  
