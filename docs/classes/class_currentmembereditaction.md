  
# CurrentMemberEditAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Action to edit the current guild member.  
  
## Methods
  
| return type                                                   | signature                                                                                                                          |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.Member](./class_guild.md#member)                       | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                           |
| [CurrentMemberEditAction](./class_currentmembereditaction.md) | [set\_nickname](#method-set-nickname) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)** |
| [CurrentMemberEditAction](./class_currentmembereditaction.md) | [reason](#method-reason) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**                   |  
  
## Method Descriptions
  
- <a name="method-CurrentMemberEditAction"></a>[CurrentMemberEditAction](./class_currentmembereditaction.md) **CurrentMemberEditAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	Constructs a new `CurrentMemberEditAction` instance.  
________________

- <a name="method-submit"></a>[Guild.Member](./class_guild.md#member) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Edits the current member profile.  
________________

- <a name="method-set-nickname"></a>[CurrentMemberEditAction](./class_currentmembereditaction.md) **set\_nickname** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)**  
  
	Sets the current member nickname. Requires `CHANGE_NICKNAME` permission.  
________________

- <a name="method-reason"></a>[CurrentMemberEditAction](./class_currentmembereditaction.md) **reason** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**  
  
	Sets the reason for editing the current member.  
________________

  
