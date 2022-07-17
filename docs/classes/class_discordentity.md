  
# DiscordEntity
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [TextChannel.BaseMessage](./class_textchannel.md#basemessage), [ChannelMention](./class_channelmention.md), [DiscordApplication](./class_discordapplication.md), [DiscordApplicationCommand](./class_discordapplicationcommand.md), [DiscordInteraction](./class_discordinteraction.md), [DiscordTeam](./class_discordteam.md), [DiscordWebhook](./class_discordwebhook.md), [Guild](./class_guild.md), [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent), [MentionableEntity](./class_mentionableentity.md), [MessageAttachment](./class_messageattachment.md), [MessageSticker](./class_messagesticker.md), [PartialChannel](./class_partialchannel.md), [PermissionOverwrite](./class_permissionoverwrite.md), [Presence](./class_presence.md), [Guild.StageInstance](./class_guild.md#stageinstance), [DiscordTeam.TeamMember](./class_discordteam.md#teammember), [Guild.VoiceState](./class_guild.md#voicestate), [WelcomeScreen](./class_welcomescreen.md)  
  
## Properties
  
| type                                                              | name                             |
|-------------------------------------------------------------------|----------------------------------|
| [Snowflake](./class_snowflake.md)                                 | [snowflake](#property-snowflake) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [id](#property-id)               |  
  
## Methods
  
| return type                                                                     | signature                                                                                                                 |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [DiscordEntity](./class_discordentity.md)                                       | [DiscordEntity](#method-DiscordEntity) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)** |
| [DiscordEntity](./class_discordentity.md)                                       | [clone](#method-clone) **(**  **)**                                                                                       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)             | [equals](#method-equals) **(** [DiscordEntity](./class_discordentity.md) entity **)**                                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)             | [is\_partial](#method-is-partial) **(**  **)**                                                                            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [get\_id](#method-get-id) **(**  **)**                                                                                    |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [get\_container](#method-get-container) **(**  **)**                                                                      |
| [DiscordRESTMediator](./class_discordrestmediator.md)                           | [get\_rest](#method-get-rest) **(**  **)**                                                                                |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [get\_class](#method-get-class) **(**  **)**                                                                              |  
  
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
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **id**  
	  
	|          | method    |
	|----------|-----------|
	| *Getter* | get\_id() |  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordEntity"></a>[DiscordEntity](./class_discordentity.md) **DiscordEntity** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-clone"></a>[DiscordEntity](./class_discordentity.md) **clone** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-equals"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **equals** **(** [DiscordEntity](./class_discordentity.md) entity **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-partial"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_partial** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_id** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-container"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **get\_container** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-rest"></a>[DiscordRESTMediator](./class_discordrestmediator.md) **get\_rest** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
