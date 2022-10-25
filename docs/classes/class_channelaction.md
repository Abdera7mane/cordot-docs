  
# ChannelAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [ChannelCategoryCreateAction](./class_channelcategorycreateaction.md), [ChannelCategoryEditAction](./class_channelcategoryeditaction.md), [TextChannelAction](./class_textchannelaction.md), [VoiceChannelAction](./class_voicechannelaction.md)  
  
## Description
  
Abstract channel action.  
  
## Methods
  
| return type                               | signature                                                                                                                                                     |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ChannelAction](./class_channelaction.md) | [set\_name](#method-set-name) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                                        |
| [ChannelAction](./class_channelaction.md) | [set\_position](#method-set-position) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)**                                  |
| [ChannelAction](./class_channelaction.md) | [set\_permission\_overwrites](#method-set-permission-overwrites) **(** [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) overwrites **)** |
| [ChannelAction](./class_channelaction.md) | [reason](#method-reason) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**                                              |  
  
## Constants
  
- <a name="constant-MAX-NAME-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_NAME\_LENGTH** = 100  
  
	Maximum channel name length.
  
  
## Method Descriptions
  
- <a name="method-set-name"></a>[ChannelAction](./class_channelaction.md) **set\_name** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Sets the channel name.t  
________________

- <a name="method-set-position"></a>[ChannelAction](./class_channelaction.md) **set\_position** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)**  
  
	Sets the sorting postion of the channel.  
________________

- <a name="method-set-permission-overwrites"></a>[ChannelAction](./class_channelaction.md) **set\_permission\_overwrites** **(** [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) overwrites **)**  
  
	Sets the channel's permission overites.  
________________

- <a name="method-reason"></a>[ChannelAction](./class_channelaction.md) **reason** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**  
  
	Sets the reason for executing the action.  
________________

  
