  
# GuildManager
  
**Inherits:** [BaseGuildManager](./class_baseguildmanager.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                      | name                                        |
|---------------------------------------------------------------------------|---------------------------------------------|
| [WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) | [entity\_manager](#property-entity-manager) |  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [GuildManager](./class_guildmanager.md)                                         | [GuildManager](#method-GuildManager) **(** [BaseDiscordEntityManager](./class_basediscordentitymanager.md) manager **)**                                                                                   |
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                 | [get\_manager](#method-get-manager) **(**  **)**                                                                                                                                                           |
| [Guild](./class_guild.md)                                                       | [construct\_guild](#method-construct-guild) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                               |
| [Guild.Member](./class_guild.md#member)                                         | [construct\_guild\_member](#method-construct-guild-member) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                |
| [Guild.Role](./class_guild.md#role)                                             | [construct\_role](#method-construct-role) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                 |
| [Guild.Invite](./class_guild.md#invite)                                         | [construct\_invite](#method-construct-invite) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                             |
| [StageInstanceInvite](./class_stageinstanceinvite.md)                           | [construct\_invite\_stage\_instance](#method-construct-invite-stage-instance) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                             |
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)               | [construct\_guild\_scheduled\_event](#method-construct-guild-scheduled-event) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                             |
| [Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata)         | [construct\_guild\_event\_metadata](#method-construct-guild-event-metadata) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                               |
| [Guild.VoiceState](./class_guild.md#voicestate)                                 | [construct\_voice\_state](#method-construct-voice-state) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                  |
| void                                                                            | [update\_guild](#method-update-guild) **(** [Guild](./class_guild.md) guild, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                    |
| void                                                                            | [update\_guild\_member](#method-update-guild-member) **(** [Guild.Member](./class_guild.md#member) member, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**      |
| void                                                                            | [update\_role](#method-update-role) **(** [Guild.Role](./class_guild.md#role) role, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                             |
| void                                                                            | [update\_voice\_state](#method-update-voice-state) **(** [Guild.VoiceState](./class_guild.md#voicestate) state, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_guild\_payload](#method-parse-guild-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                      |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_guild\_member\_payload](#method-parse-guild-member-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                       |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_role\_payload](#method-parse-role-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                        |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_voice\_state\_payload](#method-parse-voice-state-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                         |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                               |  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) **entity_manager**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildManager"></a>[GuildManager](./class_guildmanager.md) **GuildManager** **(** [BaseDiscordEntityManager](./class_basediscordentitymanager.md) manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **get\_manager** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild"></a>[Guild](./class_guild.md) **construct\_guild** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-member"></a>[Guild.Member](./class_guild.md#member) **construct\_guild\_member** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-role"></a>[Guild.Role](./class_guild.md#role) **construct\_role** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-invite"></a>[Guild.Invite](./class_guild.md#invite) **construct\_invite** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-invite-stage-instance"></a>[StageInstanceInvite](./class_stageinstanceinvite.md) **construct\_invite\_stage\_instance** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-scheduled-event"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **construct\_guild\_scheduled\_event** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-event-metadata"></a>[Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) **construct\_guild\_event\_metadata** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **construct\_voice\_state** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-guild"></a>void **update\_guild** **(** [Guild](./class_guild.md) guild, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-guild-member"></a>void **update\_guild\_member** **(** [Guild.Member](./class_guild.md#member) member, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-role"></a>void **update\_role** **(** [Guild.Role](./class_guild.md#role) role, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-voice-state"></a>void **update\_voice\_state** **(** [Guild.VoiceState](./class_guild.md#voicestate) state, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-guild-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_guild\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-guild-member-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_guild\_member\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-role-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_role\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-voice-state-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_voice\_state\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
