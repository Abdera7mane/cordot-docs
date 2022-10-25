  
# DiscordMessageComponentData
  
**Inherits:** [DiscordInteractionData](./class_discordinteractiondata.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a message component interaction event data.  
  
## Properties
  
| type                                                                    | name                                        |
|-------------------------------------------------------------------------|---------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [custom\_id](#property-custom-id)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [component\_type](#property-component-type) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [values](#property-values)                  |  
  
## Property Descriptions
  
- <a name="property-custom-id"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **custom_id**  
  
	Id of the component that fired this interaction.  
________________

- <a name="property-component-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **component_type**  
  
	Type of the component.  
________________

- <a name="property-values"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **values**  
  
	If `component_type` is `MessageComponent.Type.SELECT_MENU`
	this contains a list of `MessageSelectOption` objects.
  
