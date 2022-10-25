  
# DiscordApplicationCommandInteraction
  
**Inherits:** [DiscordRepliableInteraction](./class_discordrepliableinteraction.md) < [DiscordInteraction](./class_discordinteraction.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DiscordMessageCommand](./class_discordmessagecommand.md), [DiscordSlashCommand](./class_discordslashcommand.md), [DiscordUserCommand](./class_discordusercommand.md)  
  
## Description
  
Abstract class for command based interaction.
Such as `DiscordSlashCommand`s, `DiscordUserCommand`s
and `DiscordMessageCommand`s.  
  
## Properties
  
| type                                                                      | name                   |
|---------------------------------------------------------------------------|------------------------|
| [DiscordApplicationCommandData](./class_discordapplicationcommanddata.md) | [data](#property-data) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                       |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_command](#method-get-command) **(**  **)**                                                                                                                                                                |
| [InteractionModalAction](./class_interactionmodalaction.md)             | [show\_modal](#method-show-modal) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)** |  
  
## Property Descriptions
  
- <a name="property-data"></a>[DiscordApplicationCommandData](./class_discordapplicationcommanddata.md) **data**  
  
	Interaction data assossciated with the event.
  
  
## Method Descriptions
  
- <a name="method-get-command"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_command** **(**  **)**  
  
	Gets the name of the executed command.  
________________

- <a name="method-show-modal"></a>[InteractionModalAction](./class_interactionmodalaction.md) **show\_modal** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) custom\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**  
  
	Shows a modal popup.  
________________

  
