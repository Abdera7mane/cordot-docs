  
# VoiceChannelAction
  
**Inherits:** [ChannelAction](./class_channelaction.md) < [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [VoiceChannelCreateAction](./class_voicechannelcreateaction.md), [VoiceChannelEditAction](./class_voicechanneleditaction.md)  
  
## Description
  
Abstract action for guild voice channels.  
  
## Methods
  
| return type                                                           | signature                                                                                                                             |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                              |
| [VoiceChannelAction](./class_voicechannelaction.md)                   | [set\_bitrate](#method-set-bitrate) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) bitrate **)**             |
| [VoiceChannelAction](./class_voicechannelaction.md)                   | [user\_limit](#method-user-limit) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit **)**                 |
| [VoiceChannelAction](./class_voicechannelaction.md)                   | [set\_rtc\_region](#method-set-rtc-region) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) region **)** |
| [VoiceChannelAction](./class_voicechannelaction.md)                   | [set\_video\_quality](#method-set-video-quality) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) mode **)**   |
| [VoiceChannelAction](./class_voicechannelaction.md)                   | [as\_stage](#method-as-stage) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                   |  
  
## Constants
  
- <a name="constant-MIN-BITRATE"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MIN\_BITRATE** = 8000  
  
	Minimum bitrate value.
  
  
## Method Descriptions
  
- <a name="method-submit"></a>[Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Executes the action.  
________________

- <a name="method-set-bitrate"></a>[VoiceChannelAction](./class_voicechannelaction.md) **set\_bitrate** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) bitrate **)**  
  
	Sets the bitrate (in bits) of a voice or stage channel.  
________________

- <a name="method-user-limit"></a>[VoiceChannelAction](./class_voicechannelaction.md) **user\_limit** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit **)**  
  
	Sets the user limit in the channel.  
________________

- <a name="method-set-rtc-region"></a>[VoiceChannelAction](./class_voicechannelaction.md) **set\_rtc\_region** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) region **)**  
  
	Sets the voice RTC region.  
________________

- <a name="method-set-video-quality"></a>[VoiceChannelAction](./class_voicechannelaction.md) **set\_video\_quality** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) mode **)**  
  
	Sets the camera video quality mode.
	Check `VoiceChannel.VideoQualityModes`.  
________________

- <a name="method-as-stage"></a>[VoiceChannelAction](./class_voicechannelaction.md) **as\_stage** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether the channel should be a stage voice channel.
  
