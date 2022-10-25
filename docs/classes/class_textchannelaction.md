  
# TextChannelAction
  
**Inherits:** [ChannelAction](./class_channelaction.md) < [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [TextChannelCreateAction](./class_textchannelcreateaction.md), [TextChannelEditAction](./class_textchanneleditaction.md)  
  
## Description
  
Abstract text channel action.  
  
## Methods
  
| return type                                                 | signature                                                                                                                                                |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                                                 |
| [TextChannelAction](./class_textchannelaction.md)           | [set\_topic](#method-set-topic) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) topic **)**                                |
| [TextChannelAction](./class_textchannelaction.md)           | [set\_rate\_limit](#method-set-rate-limit) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit **)**                           |
| [TextChannelAction](./class_textchannelaction.md)           | [set\_parent](#method-set-parent) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                       |
| [TextChannelAction](./class_textchannelaction.md)           | [set\_auto\_archive\_duration](#method-set-auto-archive-duration) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) duration **)** |
| [TextChannelAction](./class_textchannelaction.md)           | [as\_news](#method-as-news) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                                        |  
  
## Constants
  
- <a name="constant-MAX-TOPIC-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_TOPIC\_LENGTH** = 1024  
  
	Maximum channel topic length.  
________________

- <a name="constant-MAX-RATE-LIMIT"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_RATE\_LIMIT** = 21600  
  
	Maximum rate limit wait time in seconds.
  
  
## Method Descriptions
  
- <a name="method-submit"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Executes the action.  
________________

- <a name="method-set-topic"></a>[TextChannelAction](./class_textchannelaction.md) **set\_topic** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) topic **)**  
  
	Sets the channel topic.  
________________

- <a name="method-set-rate-limit"></a>[TextChannelAction](./class_textchannelaction.md) **set\_rate\_limit** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit **)**  
  
	Sets the message cooldown time in seconds.  
________________

- <a name="method-set-parent"></a>[TextChannelAction](./class_textchannelaction.md) **set\_parent** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Sets the parent of the channel.
	`id` must point to a category channel.  
________________

- <a name="method-set-auto-archive-duration"></a>[TextChannelAction](./class_textchannelaction.md) **set\_auto\_archive\_duration** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) duration **)**  
  
	Sets the default thread archive duration,
	applied to newly created thread.  
________________

- <a name="method-as-news"></a>[TextChannelAction](./class_textchannelaction.md) **as\_news** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether the channel should be a news channel.
  
