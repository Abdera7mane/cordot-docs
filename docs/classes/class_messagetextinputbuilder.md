  
# MessageTextInputBuilder
  
**Inherits:** [MessageComponentBuilder](./class_messagecomponentbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message text inputs (only availabe to Modals).  
  
## Methods
  
| return type                                                   | signature                                                                                                                                     |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageTextInputBuilder](./class_messagetextinputbuilder.md) | [with\_value](#method-with-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value **)**                   |
| [MessageTextInputBuilder](./class_messagetextinputbuilder.md) | [with\_placeholder](#method-with-placeholder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) placeholder **)** |
| [MessageTextInputBuilder](./class_messagetextinputbuilder.md) | [min\_values](#method-min-values) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) min\_values **)**                   |
| [MessageTextInputBuilder](./class_messagetextinputbuilder.md) | [max\_values](#method-max-values) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) max\_values **)**                   |
| [MessageTextInputBuilder](./class_messagetextinputbuilder.md) | [required](#method-required) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                            |  
  
## Constants
  
- <a name="constant-LABEL-MAX-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **LABEL\_MAX\_LENGTH** = 45  
  
	Maximum number of characters in a text input label.  
________________

- <a name="constant-PLACEHOLDER-MAX-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **PLACEHOLDER\_MAX\_LENGTH** = 100  
  
	Maximum number of characters in a text input placeholder.  
________________

- <a name="constant-MAX-VALUES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_VALUES** = 4000  
  
	Default maximum input length.  
________________

- <a name="constant-MIN-VALUES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MIN\_VALUES** = 0  
  
	Default minimum input length.  
________________

- <a name="constant-INPUT-MAX-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **INPUT\_MAX\_LENGTH** = 4000  
  
	Default maximum input length.
  
  
## Method Descriptions
  
- <a name="method-MessageTextInputBuilder"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **MessageTextInputBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) label **)**  
  
	Constructs a new `MessageTextInputBuilder` instance with a `custom_id` 
	and `label` text.  
________________

- <a name="method-with-value"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **with\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value **)**  
  
	Pre-fills an input value.  
________________

- <a name="method-with-placeholder"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **with\_placeholder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) placeholder **)**  
  
	Sets a placeholder text to show if the input is empty.  
________________

- <a name="method-min-values"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **min\_values** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) min\_values **)**  
  
	Sets the minimum input length.  
________________

- <a name="method-max-values"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **max\_values** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) max\_values **)**  
  
	Sets the maximum input length.  
________________

- <a name="method-required"></a>[MessageTextInputBuilder](./class_messagetextinputbuilder.md) **required** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Requires the text input to be filled, `true` by default.  
________________

  
