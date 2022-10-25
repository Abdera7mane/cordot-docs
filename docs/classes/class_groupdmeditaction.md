  
# GroupDMEditAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Channel action to edit a group DM channel data.  
  
## Methods
  
| return type                                       | signature                                                                                                              |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [GroupDMChannel](./class_groupdmchannel.md)       | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                               |
| [GroupDMEditAction](./class_groupdmeditaction.md) | [set\_name](#method-set-name) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)** |
| [GroupDMEditAction](./class_groupdmeditaction.md) | [set\_icon](#method-set-icon) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  |  
  
## Constants
  
- <a name="constant-MAX-NAME-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_NAME\_LENGTH** = 100  
  
	Maximum length of a channel name
  
  
## Method Descriptions
  
- <a name="method-GroupDMEditAction"></a>[GroupDMEditAction](./class_groupdmeditaction.md) **GroupDMEditAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-submit"></a>[GroupDMChannel](./class_groupdmchannel.md) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Modifies the channel settings.  
________________

- <a name="method-set-name"></a>[GroupDMEditAction](./class_groupdmeditaction.md) **set\_name** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Sets the channel's name.  
________________

- <a name="method-set-icon"></a>[GroupDMEditAction](./class_groupdmeditaction.md) **set\_icon** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the channel's icon.  
________________

  
