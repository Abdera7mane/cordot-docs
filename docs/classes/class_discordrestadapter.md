  
# DiscordRESTAdapter
  
**Inherits:** [Node](https://docs.godotengine.org/en/3.5/classes/class_node.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                    | name                                 |
|---------------------------------------------------------|--------------------------------------|
| [DiscordRESTRequester](./class_discordrestrequester.md) | [requester](#property-requester)     |
| [DiscordRESTMediator](./class_discordrestmediator.md)   | [mediator](#property-mediator)       |
| [ApplicationRESTAPI](./class_applicationrestapi.md)     | [application](#property-application) |
| [ChannelRESTAPI](./class_channelrestapi.md)             | [channel](#property-channel)         |
| [GuildRESTAPI](./class_guildrestapi.md)                 | [guild](#property-guild)             |
| [InteractionRESTAPI](./class_interactionrestapi.md)     | [interaction](#property-interaction) |
| [UserRESTAPI](./class_userrestapi.md)                   | [user](#property-user)               |
| [WebhookRESTAPI](./class_webhookrestapi.md)             | [webhook](#property-webhook)         |  
  
## Methods
  
| return type                                         | signature                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordRESTAdapter](./class_discordrestadapter.md) | [DiscordRESTAdapter](#method-DiscordRESTAdapter) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) entity\_manger, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)** |  
  
## Property Descriptions
  
- <a name="property-requester"></a>[DiscordRESTRequester](./class_discordrestrequester.md) **requester**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-mediator"></a>[DiscordRESTMediator](./class_discordrestmediator.md) **mediator**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-application"></a>[ApplicationRESTAPI](./class_applicationrestapi.md) **application**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel"></a>[ChannelRESTAPI](./class_channelrestapi.md) **channel**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild"></a>[GuildRESTAPI](./class_guildrestapi.md) **guild**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-interaction"></a>[InteractionRESTAPI](./class_interactionrestapi.md) **interaction**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user"></a>[UserRESTAPI](./class_userrestapi.md) **user**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-webhook"></a>[WebhookRESTAPI](./class_webhookrestapi.md) **webhook**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordRESTAdapter"></a>[DiscordRESTAdapter](./class_discordrestadapter.md) **DiscordRESTAdapter** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) entity\_manger, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**  
  
	> *There is currently no description for this method.*  
________________

  
  
## Sub Classes
  
________________
  
  
# Mediator
  
**Inherits:** [DiscordRESTMediator](./class_discordrestmediator.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                      | name                       |
|---------------------------------------------------------------------------|----------------------------|
| [WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) | [client](#property-client) |  
  
## Methods
  
| return type                                                                 | signature                                                                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordRESTAdapter.Mediator](./class_discordrestadapter.md#mediator)       | [Mediator](#method-Mediator) **(** [DiscordRESTAdapter](./class_discordrestadapter.md) rest\_client **)**                                                                                                                                                                                    |
| [DiscordRESTAdapter](./class_discordrestadapter.md)                         | [get\_rest](#method-get-rest) **(**  **)**                                                                                                                                                                                                                                                   |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html)   | [request\_async](#method-request-async) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) request, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) arguments **)** |
| [Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) | [cdn\_download\_async](#method-cdn-download-async) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**                                                                                                                                                   |  
  
## Property Descriptions
  
- <a name="property-client"></a>[WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) **client**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Mediator"></a>[DiscordRESTAdapter.Mediator](./class_discordrestadapter.md#mediator) **Mediator** **(** [DiscordRESTAdapter](./class_discordrestadapter.md) rest\_client **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-rest"></a>[DiscordRESTAdapter](./class_discordrestadapter.md) **get\_rest** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-request-async"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **request\_async** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) request, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) arguments **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-cdn-download-async"></a>[Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) **cdn\_download\_async** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	> *There is currently no description for this method.*
  
