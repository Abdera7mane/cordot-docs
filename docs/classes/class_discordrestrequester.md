  
# DiscordRESTRequester
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Discord REST API requester, uses a rate limiter to queue requests.  
  
## Properties
  
| type                                          | name                         |
|-----------------------------------------------|------------------------------|
| [RESTRateLimiter](./class_restratelimiter.md) | [limiter](#property-limiter) |  
  
## Methods
  
| return type                                                                 | signature                                                                                                                                                       |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordRESTRequester](./class_discordrestrequester.md)                     | [DiscordRESTRequester](#method-DiscordRESTRequester) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**            |
| HTTPResponse                                                                | [request\_async](#method-request-async) **(** [RestRequest](./class_restrequest.md) request **)** <u>_coroutine_</u>                                            |
| [Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) | [cdn\_download\_async](#method-cdn-download-async) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_url **)** <u>_coroutine_</u> |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)           | [get\_last\_latency\_ms](#method-get-last-latency-ms) **(**  **)**                                                                                              |  
  
## Property Descriptions
  
- <a name="property-limiter"></a>[RESTRateLimiter](./class_restratelimiter.md) **limiter**  
  
	Rate limiter for this requester instance.
  
  
## Method Descriptions
  
- <a name="method-DiscordRESTRequester"></a>[DiscordRESTRequester](./class_discordrestrequester.md) **DiscordRESTRequester** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**  
  
	Constructs a new `DiscordRESTRequester`. `use_pool` specifies whether to use
	an HTTP connection pool (experimental unstable feature).  
________________

- <a name="method-request-async"></a>HTTPResponse **request\_async** **(** [RestRequest](./class_restrequest.md) request **)** <u>_coroutine_</u>  
  
	Sends a request to the Discord REST API asynchronously and returns an
	`HTTPResponse` object.
	Prints a human-readable error message in case of failure.  
________________

- <a name="method-cdn-download-async"></a>[Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) **cdn\_download\_async** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_url **)** <u>_coroutine_</u>  
  
	Downloads a resource from the Discord REST API asynchronously.  
________________

- <a name="method-get-last-latency-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_last\_latency\_ms** **(**  **)**  
  
	Gets the last request latency in milliseconds.  
________________

  
