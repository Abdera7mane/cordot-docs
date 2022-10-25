  
# ChannelEditPositionsAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Action to edit channel postions inside a guild.  
  
## Methods
  
| return type                                                                                         | signature                                                                                                            |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                                 | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                             |
| [ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) | [for\_channel](#method-for-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)** |  
  
## Method Descriptions
  
- <a name="method-ChannelEditPositionsAction"></a>[ChannelEditPositionsAction](./class_channeleditpositionsaction.md) **ChannelEditPositionsAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	Constrcts a new `ChannelEditPostionsAction` instance.  
________________

- <a name="method-submit"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Edits the channels positions.  
________________

- <a name="method-for-channel"></a>[ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) **for\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Includes a channel to edit its position.  
________________

  
  
## Sub Classes
  
________________
  
  
# ChannelPosition
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a channel postion edit.  
  
## Methods
  
| return type                                                                                         | signature                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) | [set\_position](#method-set-position) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)**                                                                                    |
| [ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) | [set\_parent](#method-set-parent) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sync\_permissions=false **)** |
| [ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) | [remove\_parent](#method-remove-parent) **(**  **)**                                                                                                                                                            |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)                     | [to\_dict](#method-to-dict) **(**  **)**                                                                                                                                                                        |  
  
## Method Descriptions
  
- <a name="method-ChannelPosition"></a>[ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) **ChannelPosition** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Construct a new channel postion.  
________________

- <a name="method-set-position"></a>[ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) **set\_position** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)**  
  
	Sets the sorting position of the channel.  
________________

- <a name="method-set-parent"></a>[ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) **set\_parent** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sync\_permissions=false **)**  
  
	Sets the parent channel id for the channel.
	If `sync_permissions` is `true`, the permission overites will be synchronised
	with the new parent.
	Node  
________________

- <a name="method-remove-parent"></a>[ChannelEditPositionsAction.ChannelPosition](./class_channeleditpositionsaction.md#channelposition) **remove\_parent** **(**  **)**  
  
	Removes the channel's parent channel.  
________________

- <a name="method-to-dict"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **to\_dict** **(**  **)**  
  
	Converts the position data to a `Dictionary`.  
________________

  
