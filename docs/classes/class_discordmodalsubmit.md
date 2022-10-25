  
# DiscordModalSubmit
  
**Inherits:** [DiscordRepliableInteraction](./class_discordrepliableinteraction.md) < [DiscordInteraction](./class_discordinteraction.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
An interaction event fired by a user after submitting a modal pop.  
  
## Properties
  
| type                                                        | name                   |
|-------------------------------------------------------------|------------------------|
| [DiscordModalSubmitData](./class_discordmodalsubmitdata.md) | [data](#property-data) |  
  
## Methods
  
| return type                                                           | signature                                                                                                                              |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [MessageInteractiveComponent](./class_messageinteractivecomponent.md) | [get\_component](#method-get-component) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id **)** |  
  
## Property Descriptions
  
- <a name="property-data"></a>[DiscordModalSubmitData](./class_discordmodalsubmitdata.md) **data**  
  
	Interaction data assossciated with the event.
  
  
## Method Descriptions
  
- <a name="method-get-component"></a>[MessageInteractiveComponent](./class_messageinteractivecomponent.md) **get\_component** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id **)**  
  
	Gets a component from the modal data by `custom_id`.  
________________

  
