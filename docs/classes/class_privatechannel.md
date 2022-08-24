  
# PrivateChannel
  
**Inherits:** [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DMChannel](./class_dmchannel.md), [GroupDMChannel](./class_groupdmchannel.md)  
  
## Description
  
Represents a private channel on Discord.  
  
## Properties
  
| type                                                                  | name                                        |
|-----------------------------------------------------------------------|---------------------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [recipients\_ids](#property-recipients-ids) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [recipients](#property-recipients)          |  
  
## Methods
  
| return type                                                           | signature                                                                                                                              |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [PrivateChannel](./class_privatechannel.md)                           | [PrivateChannel](#method-PrivateChannel) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) data **)**    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [get\_recipients](#method-get-recipients) **(**  **)**                                                                                 |
| [User](./class_user.md)                                               | [get\_recipient\_by\_id](#method-get-recipient-by-id) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)** |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [has\_recipient](#method-has-recipient) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**               |  
  
## Property Descriptions
  
- <a name="property-recipients-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **recipients_ids**  
  
	The recipient ids of the private channel.  
________________

- 	<a name="property-recipients"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **recipients**  
	  
	|          | method            |
	|----------|-------------------|
	| *Getter* | get\_recipients() |  
  
	The recipients of the private channel. Contains a list of User objects.
  
  
## Method Descriptions
  
- <a name="method-get-recipients"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_recipients** **(**  **)**  
  
	`recipients` getter.  
________________

- <a name="method-get-recipient-by-id"></a>[User](./class_user.md) **get\_recipient\_by\_id** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a recipient by id.  
________________

- <a name="method-has-recipient"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_recipient** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Checks if a user is a recipient of the channel.  
________________

  
