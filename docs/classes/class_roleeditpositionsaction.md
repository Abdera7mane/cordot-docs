  
# RoleEditPositionsAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Action to edit roles positions in a guild.  
  
## Methods
  
| return type                                                   | signature                                                                                                                                                                                  |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RoleEditPositionsAction](./class_roleeditpositionsaction.md) | [for\_role](#method-for-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)** |
| [RoleEditPositionsAction](./class_roleeditpositionsaction.md) | [reason](#method-reason) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**                                                                           |  
  
## Method Descriptions
  
- <a name="method-RoleEditPositionsAction"></a>[RoleEditPositionsAction](./class_roleeditpositionsaction.md) **RoleEditPositionsAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	Constructs a new `RoleEditPositionsAction` instance.  
________________

- <a name="method-for-role"></a>[RoleEditPositionsAction](./class_roleeditpositionsaction.md) **for\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) position **)**  
  
	Includes a role to edit its position.  
________________

- <a name="method-reason"></a>[RoleEditPositionsAction](./class_roleeditpositionsaction.md) **reason** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**  
  
	Sets the reason for editing the positions.  
________________

  
