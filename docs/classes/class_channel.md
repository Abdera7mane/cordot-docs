  
# Channel
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.ChannelCategory](./class_guild.md#channelcategory), [Guild.GuildStoreChannel](./class_guild.md#guildstorechannel), [TextChannel](./class_textchannel.md), [VoiceChannel](./class_voicechannel.md)  
  
## Description
  
Represents a guild or DM channel within Discord.  
  
## Properties
  
| type                                                              | name                   |
|-------------------------------------------------------------------|------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [type](#property-type) |  
  
## Methods
  
| return type                                                         | signature                                                                                                   |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [Channel](./class_channel.md)                                       | [Channel](#method-Channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)** |
| [Channel](./class_channel.md)                                       | [fetch](#method-fetch) **(**  **)** <u>_coroutine_</u>                                                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [get\_creation\_timestamp](#method-get-creation-timestamp) **(**  **)**                                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_guild](#method-is-guild) **(**  **)**                                                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_text](#method-is-text) **(**  **)**                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_voice](#method-is-voice) **(**  **)**                                                                  |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **UNKNOWN** = -1  

	- **GUILD\_TEXT** = 0  

	- **DM** = 1  

	- **GUILD\_VOICE** = 2  

	- **GROUP\_DM** = 3  

	- **GUILD\_CATEGORY** = 4  

	- **GUILD\_NEWS** = 5  

	- **GUILD\_STORE** = 6  

	- **GUILD\_NEWS\_THREAD** = 10  

	- **GUILD\_PUBLIC\_THREAD** = 11  

	- **GUILD\_PRIVATE\_THREAD** = 12  

	- **GUILD\_STAGE\_VOICE** = 13  

  
	Channel types.
  
  
## Property Descriptions
  
- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	The type of channel.
  
  
## Method Descriptions
  
- <a name="method-fetch"></a>[Channel](./class_channel.md) **fetch** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the channel from Discord API.  
________________

- <a name="method-get-creation-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_creation\_timestamp** **(**  **)**  
  
	Gets the creation timestamp of the channel in unix time.  
________________

- <a name="method-is-guild"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_guild** **(**  **)**  
  
	Whether the channel is part of a guild.  
________________

- <a name="method-is-text"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_text** **(**  **)**  
  
	Whether the channel is a text channel.  
________________

- <a name="method-is-voice"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_voice** **(**  **)**  
  
	Whether the channel is a voice channel.  
________________

  
