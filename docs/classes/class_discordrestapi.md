  
# DiscordRESTAPI
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [ApplicationRESTAPI](./class_applicationrestapi.md), [ChannelRESTAPI](./class_channelrestapi.md), [GuildRESTAPI](./class_guildrestapi.md), [InteractionRESTAPI](./class_interactionrestapi.md), [UserRESTAPI](./class_userrestapi.md), [WebhookRESTAPI](./class_webhookrestapi.md)  
  
## Description
  
Abstract class for Discord REST API sub-clients.  
  
## Properties
  
| type                                                                            | name                                        |
|---------------------------------------------------------------------------------|---------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [token](#property-token)                    |
| [DiscordRESTRequester](./class_discordrestrequester.md)                         | [requester](#property-requester)            |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [rest\_headers](#property-rest-headers)     |
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                 | [entity\_manager](#property-entity-manager) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                             |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RestRequest](./class_restrequest.md)                                   | [rest\_request](#method-rest-request) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | **static** [rest\_url](#method-rest-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint **)**                                                                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | **static** [cdn\_url](#method-cdn-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint **)**                                                                                   |  
  
## Property Descriptions
  
- <a name="property-token"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **token**  
  
	The bot token.  
________________

- <a name="property-requester"></a>[DiscordRESTRequester](./class_discordrestrequester.md) **requester**  
  
	REST Requester reference.  
________________

- <a name="property-rest-headers"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **rest_headers**  
  
	Base HTTP headers passed on every request.  
________________

- <a name="property-entity-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **entity_manager**  
  
	The entity_manager for constructing and caching Discord entities.
  
  
## Method Descriptions
  
- <a name="method-DiscordRESTAPI"></a>[DiscordRESTAPI](./class_discordrestapi.md) **DiscordRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	`DiscordRESTPI` constructor.  
________________

- <a name="method-rest-request"></a>[RestRequest](./class_restrequest.md) **rest\_request** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)**  
  
	Creates a `RestRequest` object for `endpoint` and pass the default headers.  
________________

- <a name="method-rest-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **static** **rest\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint **)**  
  
	Returns the REST URL for the given `endpoint`.  
________________

- <a name="method-cdn-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **static** **cdn\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint **)**  
  
	Returns the CDN URL for the given `endpoint`.
  
