  
# ChannelMention
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Contains information on the mention channel in a message.  
  
## Properties
  
| type                                                                    | name                            |
|-------------------------------------------------------------------------|---------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id) |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)          |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)          |  
  
## Methods
  
| return type                   | signature                                        |
|-------------------------------|--------------------------------------------------|
| [Channel](./class_channel.md) | [get\_channel](#method-get-channel) **(**  **)** |
| [Guild](./class_guild.md)     | [get\_guild](#method-get-guild) **(**  **)**     |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	The id of the guild containing the channel.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	Reference to the guild containing the channel.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	The type of channel.  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	The name of the channel.
  
  
## Method Descriptions
  
- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(**  **)**  
  
	Gets the mentioned channel if it is available to the current user
	and found in the cache.  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

  
