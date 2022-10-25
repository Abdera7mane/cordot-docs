  
# DiscordInteractionManager
  
**Inherits:** [BaseDiscordInteractionManager](./class_basediscordinteractionmanager.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                      | name                                        |
|---------------------------------------------------------------------------|---------------------------------------------|
| [WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) | [entity\_manager](#property-entity-manager) |  
  
## Methods
  
| return type                                                                                     | signature                                                                                                                                                                                                                                   |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                                 | [get\_manager](#method-get-manager) **(**  **)**                                                                                                                                                                                            |
| [DiscordInteraction](./class_discordinteraction.md)                                             | [construct\_interaction](#method-construct-interaction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                    |
| [DiscordApplicationCommandInteraction](./class_discordapplicationcommandinteraction.md)         | [construct\_application\_command\_interaction](#method-construct-application-command-interaction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                          |
| [DiscordSlashCommand](./class_discordslashcommand.md)                                           | [construct\_slash\_command](#method-construct-slash-command) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                               |
| [DiscordUserCommand](./class_discordusercommand.md)                                             | [construct\_user\_command](#method-construct-user-command) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                 |
| [DiscordMessageCommand](./class_discordmessagecommand.md)                                       | [construct\_message\_command](#method-construct-message-command) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                           |
| [DiscordMessageComponentInteraction](./class_discordmessagecomponentinteraction.md)             | [construct\_message\_component\_interaction](#method-construct-message-component-interaction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                              |
| [DiscordModalSubmit](./class_discordmodalsubmit.md)                                             | [construct\_modal\_submit\_interaction](#method-construct-modal-submit-interaction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                        |
| [DiscordInteractionData](./class_discordinteractiondata.md)                                     | [construct\_interaction\_data](#method-construct-interaction-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type **)** |
| [DiscordApplicationCommandData](./class_discordapplicationcommanddata.md)                       | [construct\_application\_command\_data](#method-construct-application-command-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                        |
| [DiscordMessageComponentData](./class_discordmessagecomponentdata.md)                           | [construct\_message\_component\_data](#method-construct-message-component-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                            |
| [DiscordModalSubmitData](./class_discordmodalsubmitdata.md)                                     | [construct\_modal\_submit\_data](#method-construct-modal-submit-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                      |
| [DiscordApplicationCommandData.DataOption](./class_discordapplicationcommanddata.md#dataoption) | [construct\_interaction\_data\_option](#method-construct-interaction-data-option) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                          |
| [DiscordApplicationCommandResolvedData](./class_discordapplicationcommandresolveddata.md)       | [construct\_interaction\_resolved\_data](#method-construct-interaction-resolved-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                      |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)                 | [parse\_interaction\_payload](#method-parse-interaction-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                           |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)                 | [parse\_interaction\_with\_data\_payload](#method-parse-interaction-with-data-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                     |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)                 | [parse\_interaction\_data\_option\_payload](#method-parse-interaction-data-option-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                 |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)                 | [parse\_interaction\_resolved\_data\_payload](#method-parse-interaction-resolved-data-payload) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                         | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                |  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) **entity_manager**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordInteractionManager"></a>[DiscordInteractionManager](./class_discordinteractionmanager.md) **DiscordInteractionManager** **(** [BaseDiscordEntityManager](./class_basediscordentitymanager.md) manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **get\_manager** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-interaction"></a>[DiscordInteraction](./class_discordinteraction.md) **construct\_interaction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-application-command-interaction"></a>[DiscordApplicationCommandInteraction](./class_discordapplicationcommandinteraction.md) **construct\_application\_command\_interaction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-slash-command"></a>[DiscordSlashCommand](./class_discordslashcommand.md) **construct\_slash\_command** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-user-command"></a>[DiscordUserCommand](./class_discordusercommand.md) **construct\_user\_command** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message-command"></a>[DiscordMessageCommand](./class_discordmessagecommand.md) **construct\_message\_command** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message-component-interaction"></a>[DiscordMessageComponentInteraction](./class_discordmessagecomponentinteraction.md) **construct\_message\_component\_interaction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-modal-submit-interaction"></a>[DiscordModalSubmit](./class_discordmodalsubmit.md) **construct\_modal\_submit\_interaction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-interaction-data"></a>[DiscordInteractionData](./class_discordinteractiondata.md) **construct\_interaction\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-application-command-data"></a>[DiscordApplicationCommandData](./class_discordapplicationcommanddata.md) **construct\_application\_command\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message-component-data"></a>[DiscordMessageComponentData](./class_discordmessagecomponentdata.md) **construct\_message\_component\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-modal-submit-data"></a>[DiscordModalSubmitData](./class_discordmodalsubmitdata.md) **construct\_modal\_submit\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-interaction-data-option"></a>[DiscordApplicationCommandData.DataOption](./class_discordapplicationcommanddata.md#dataoption) **construct\_interaction\_data\_option** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-interaction-resolved-data"></a>[DiscordApplicationCommandResolvedData](./class_discordapplicationcommandresolveddata.md) **construct\_interaction\_resolved\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-interaction-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_interaction\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-interaction-with-data-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_interaction\_with\_data\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-interaction-data-option-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_interaction\_data\_option\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-interaction-resolved-data-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_interaction\_resolved\_data\_payload** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*
  
