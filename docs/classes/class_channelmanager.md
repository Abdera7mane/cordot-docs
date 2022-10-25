  
# ChannelManager
  
**Inherits:** [BaseChannelManager](./class_basechannelmanager.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                      | name                                        |
|---------------------------------------------------------------------------|---------------------------------------------|
| [WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) | [entity\_manager](#property-entity-manager) |  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                                           |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                 | [get\_manager](#method-get-manager) **(**  **)**                                                                                                                                    |
| [Channel](./class_channel.md)                                                   | [construct\_channel](#method-construct-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                    |
| void                                                                            | [update\_channel](#method-update-channel) **(** [Channel](./class_channel.md) channel, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**   |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)                     | [construct\_guild\_text\_channel](#method-construct-guild-text-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**            |
| [DMChannel](./class_dmchannel.md)                                               | [construct\_dm\_channel](#method-construct-dm-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                             |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)                   | [construct\_guild\_voice\_channel](#method-construct-guild-voice-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**          |
| [GroupDMChannel](./class_groupdmchannel.md)                                     | [construct\_group\_dm\_channel](#method-construct-group-dm-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)                       | [construct\_guild\_category\_channel](#method-construct-guild-category-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**    |
| [Guild.GuildNewsChannel](./class_guild.md#guildnewschannel)                     | [construct\_guild\_news\_channel](#method-construct-guild-news-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**            |
| [Guild.GuildStoreChannel](./class_guild.md#guildstorechannel)                   | [construct\_guild\_store\_channel](#method-construct-guild-store-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**          |
| [Guild.ThreadChannel](./class_guild.md#threadchannel)                           | [construct\_thread\_channel](#method-construct-thread-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                     |
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata)                         | [construct\_thread\_mdetadata](#method-construct-thread-mdetadata) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                 |
| [Guild.StageChannel](./class_guild.md#stagechannel)                             | [construct\_stage\_channel](#method-construct-stage-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                       |
| [PartialChannel](./class_partialchannel.md)                                     | [construct\_partial\_channel](#method-construct-partial-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                   |
| [PermissionOverwrite](./class_permissionoverwrite.md)                           | [construct\_permission\_overwrite](#method-construct-permission-overwrite) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**         |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_text\_channel\_payload](#method-parse-text-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_guild\_channel\_payload](#method-parse-guild-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**              |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_guild\_text\_channel\_payload](#method-parse-guild-text-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**   |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_guild\_voice\_channel\_payload](#method-parse-guild-voice-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_category\_channel\_payload](#method-parse-category-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**        |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_dm\_channel\_payload](#method-parse-dm-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                    |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_group\_dm\_channel\_payload](#method-parse-group-dm-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**       |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_thread\_channel\_payload](#method-parse-thread-channel-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**            |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_thread\_metadata](#method-parse-thread-metadata) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [get\_class](#method-get-class) **(**  **)**                                                                                                                                        |  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) **entity_manager**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ChannelManager"></a>[ChannelManager](./class_channelmanager.md) **ChannelManager** **(** [BaseDiscordEntityManager](./class_basediscordentitymanager.md) manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **get\_manager** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-channel"></a>[Channel](./class_channel.md) **construct\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-channel"></a>void **update\_channel** **(** [Channel](./class_channel.md) channel, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-text-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **construct\_guild\_text\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-dm-channel"></a>[DMChannel](./class_dmchannel.md) **construct\_dm\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-voice-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **construct\_guild\_voice\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-group-dm-channel"></a>[GroupDMChannel](./class_groupdmchannel.md) **construct\_group\_dm\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-category-channel"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **construct\_guild\_category\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-news-channel"></a>[Guild.GuildNewsChannel](./class_guild.md#guildnewschannel) **construct\_guild\_news\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-guild-store-channel"></a>[Guild.GuildStoreChannel](./class_guild.md#guildstorechannel) **construct\_guild\_store\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-thread-channel"></a>[Guild.ThreadChannel](./class_guild.md#threadchannel) **construct\_thread\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-thread-mdetadata"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **construct\_thread\_mdetadata** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-stage-channel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **construct\_stage\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-partial-channel"></a>[PartialChannel](./class_partialchannel.md) **construct\_partial\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-permission-overwrite"></a>[PermissionOverwrite](./class_permissionoverwrite.md) **construct\_permission\_overwrite** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-text-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_text\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-guild-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_guild\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-guild-text-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_guild\_text\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-guild-voice-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_guild\_voice\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-category-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_category\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-dm-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_dm\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-group-dm-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_group\_dm\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-thread-channel-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_thread\_channel\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-thread-metadata"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_thread\_metadata** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*
  
