  
# GuildMessage
  
**Inherits:** [Message](./class_message.md) < [TextChannel](./class_textchannel.md) < [TextChannel.BaseMessage](./class_textchannel.md#basemessage) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a message sent in a guild channel within Discord.  
  
## Properties
  
| type                                                                  | name                                            |
|-----------------------------------------------------------------------|-------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [guild\_id](#property-guild-id)                 |
| [Guild](./class_guild.md)                                             | [guild](#property-guild)                        |
| [Guild.Member](./class_guild.md#member)                               | [member](#property-member)                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [role\_mentions](#property-role-mentions)       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [mention\_everyone](#property-mention-everyone) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [is\_tts](#property-is-tts)                     |  
  
## Methods
  
| return type                             | signature                                                                                                                             |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [GuildMessage](./class_guildmessage.md) | [GuildMessage](#method-GuildMessage) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)               | [get\_guild](#method-get-guild) **(**  **)**                                                                                          |
| [GuildMessage](./class_guildmessage.md) | [crosspost](#method-crosspost) **(**  **)**                                                                                           |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	The id of the guild.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The guild in which the message was sent.  
________________

- <a name="property-member"></a>[Guild.Member](./class_guild.md#member) **member**  
  
	The guild member who sent the message.  
________________

- <a name="property-role-mentions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **role_mentions**  
  
	Roles that were mentioned in the message.  
________________

- <a name="property-mention-everyone"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **mention_everyone**  
  
	Whether the message mentions everyone.  
________________

- <a name="property-is-tts"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_tts**  
  
	Wether the message is a TTS message.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-crosspost"></a>[GuildMessage](./class_guildmessage.md) **crosspost** **(**  **)**  
  
	Cross-post a message in a `Guild.GuildNewsChannel` to following channels.
	Requires the `SEND_MESSAGES` permission, if the current user sent the message,
	or additionally the `MANAGE_MESSAGES` permission, for all other users' messages.  
________________

  
