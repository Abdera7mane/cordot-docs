  
# MessageActionRowBuilder
  
**Inherits:** [MessageComponentBuilder](./class_messagecomponentbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message action rows.  
  
## Methods
  
| return type                                                   | signature                                                                                                                   |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [MessageComponentBuilder](./class_messagecomponentbuilder.md) | [add\_component](#method-add-component) **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)** |  
  
## Constants
  
- <a name="constant-MAX-COMPONENTS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_COMPONENTS** = 5  
  
	Maximum number of component an action row can hold.
  
  
## Method Descriptions
  
- <a name="method-MessageActionRowBuilder"></a>[MessageActionRowBuilder](./class_messageactionrowbuilder.md) **MessageActionRowBuilder** **(**  **)**  
  
	Constructs a new `MessageActionRowBuilder` instance.  
________________

- <a name="method-add-component"></a>[MessageComponentBuilder](./class_messagecomponentbuilder.md) **add\_component** **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)**  
  
	Appends a `component` to the action row.
	Type of `component` must not be an other action row.  
________________

  
