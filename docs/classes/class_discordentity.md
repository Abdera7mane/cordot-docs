  
# DiscordEntity
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [TextChannel.BaseMessage](./class_textchannel.md#basemessage), [ChannelMention](./class_channelmention.md), [DiscordApplication](./class_discordapplication.md), [DiscordApplicationCommand](./class_discordapplicationcommand.md), [DiscordInteraction](./class_discordinteraction.md), [DiscordTeam](./class_discordteam.md), [DiscordWebhook](./class_discordwebhook.md), [Guild](./class_guild.md), [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent), [MentionableEntity](./class_mentionableentity.md), [MessageAttachment](./class_messageattachment.md), [MessageSticker](./class_messagesticker.md), [PartialChannel](./class_partialchannel.md), [PermissionOverwrite](./class_permissionoverwrite.md), [Presence](./class_presence.md), [Guild.StageInstance](./class_guild.md#stageinstance), [DiscordTeam.TeamMember](./class_discordteam.md#teammember), [Guild.VoiceState](./class_guild.md#voicestate), [WelcomeScreen](./class_welcomescreen.md)  
  
## Description
  
Abstract class for Discord API objects.  
  
## Properties
  
| type                                                              | name                             |
|-------------------------------------------------------------------|----------------------------------|
| [Snowflake](./class_snowflake.md)                                 | [snowflake](#property-snowflake) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [id](#property-id)               |  
  
## Methods
  
| return type                                                         | signature                                                                                                                 |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [DiscordEntity](./class_discordentity.md)                           | [DiscordEntity](#method-DiscordEntity) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)** |
| [DiscordEntity](./class_discordentity.md)                           | [clone](#method-clone) **(**  **)**                                                                                       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [equals](#method-equals) **(** [DiscordEntity](./class_discordentity.md) entity **)**                                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_partial](#method-is-partial) **(**  **)**                                                                            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [get\_id](#method-get-id) **(**  **)**                                                                                    |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **DEFAULT\_CONTAINER**  
  
	- **applications** = {}  

	- **channels** = {}  

	- **guilds** = {}  

	- **messages** = {}  

	- **presences** = {}  

	- **users** = {}  

	- **teams** = {}  

	- **bot\_id** = 0  

	- **application\_id** = 0  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-snowflake"></a>[Snowflake](./class_snowflake.md) **snowflake**  
  
	`Snowflake` representation of this object's `id.  
________________

- 	<a name="property-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **id**  
	  
	|          | method    |
	|----------|-----------|
	| *Getter* | get\_id() |  
  
	Object's id.
  
  
## Method Descriptions
  
- <a name="method-DiscordEntity"></a>[DiscordEntity](./class_discordentity.md) **DiscordEntity** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-clone"></a>[DiscordEntity](./class_discordentity.md) **clone** **(**  **)**  
  
	Clone this object instance, not implemented in all sub classes.  
________________

- <a name="method-equals"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **equals** **(** [DiscordEntity](./class_discordentity.md) entity **)**  
  
	Check whether this instance is equal to `entity`.
	returns `true` If the `entity.id` and the object type matches.  
________________

- <a name="method-is-partial"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_partial** **(**  **)**  
  
	Returns true if this object is partial. A partial object has uncompleted data
	so its properties are unreliable to work with.  
________________

- <a name="method-get-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_id** **(**  **)**  
  
	`id` getter.  
________________

  
