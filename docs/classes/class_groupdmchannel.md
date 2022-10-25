  
# GroupDMChannel
  
**Inherits:** [PrivateChannel](./class_privatechannel.md) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a group direct message channel on Discord.  
  
## Properties
  
| type                                                                    | name                              |
|-------------------------------------------------------------------------|-----------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)            |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [icon\_hash](#property-icon-hash) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [owner\_id](#property-owner-id)   |
| [User](./class_user.md)                                                 | [owner](#property-owner)          |  
  
## Methods
  
| return type                                       | signature                                    |
|---------------------------------------------------|----------------------------------------------|
| [GroupDMEditAction](./class_groupdmeditaction.md) | [edit](#method-edit) **(**  **)**            |
| [User](./class_user.md)                           | [get\_owner](#method-get-owner) **(**  **)** |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Group name.  
________________

- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	The icon hash of the group channel.  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	The owner id of the group channel.  
________________

- 	<a name="property-owner"></a>[User](./class_user.md) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	The owner of the group channel.
  
  
## Method Descriptions
  
- <a name="method-edit"></a>[GroupDMEditAction](./class_groupdmeditaction.md) **edit** **(**  **)**  
  
	Updates the group channel settings.  
________________

- <a name="method-get-owner"></a>[User](./class_user.md) **get\_owner** **(**  **)**  
  
	`owner` getter.  
________________

  
