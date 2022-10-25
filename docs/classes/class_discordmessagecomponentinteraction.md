  
# DiscordMessageComponentInteraction
  
**Inherits:** [DiscordRepliableInteraction](./class_discordrepliableinteraction.md) < [DiscordInteraction](./class_discordinteraction.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
An event fired when a user interacts with a message component.  
  
## Properties
  
| type                                                                  | name                                |
|-----------------------------------------------------------------------|-------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [message\_id](#property-message-id) |
| [Message](./class_message.md)                                         | [message](#property-message)        |
| [DiscordMessageComponentData](./class_discordmessagecomponentdata.md) | [data](#property-data)              |  
  
## Methods
  
| return type                                                 | signature                                                                                                                                                                                                       |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Message](./class_message.md)                               | [fetch\_message](#method-fetch-message) **(**  **)** <u>_coroutine_</u>                                                                                                                                         |
| [InteractionModalAction](./class_interactionmodalaction.md) | [show\_modal](#method-show-modal) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)** |  
  
## Property Descriptions
  
- <a name="property-message-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **message_id**  
  
	Message id holding the component.  
________________

- <a name="property-message"></a>[Message](./class_message.md) **message**  
  
	Reference to the message.  
________________

- <a name="property-data"></a>[DiscordMessageComponentData](./class_discordmessagecomponentdata.md) **data**  
  
	Interaction data assossciated with the event.
  
  
## Method Descriptions
  
- <a name="method-fetch-message"></a>[Message](./class_message.md) **fetch\_message** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the message holding the component.  
________________

- <a name="method-show-modal"></a>[InteractionModalAction](./class_interactionmodalaction.md) **show\_modal** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**  
  
	Shows a modal popup.  
________________

  
