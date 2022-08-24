  
# DiscordRESTMediator
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Mediator class of `DiscordRESTAPIAdapter` class.  
  
## Methods
  
| return type                                                                 | signature                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html)   | [request\_async](#method-request-async) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) request, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) arguments **)** <u>_coroutine_</u> |
| [Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) | [cdn\_download\_async](#method-cdn-download-async) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)** <u>_coroutine_</u>                                                                                                                                                   |  
  
## Method Descriptions
  
- <a name="method-request-async"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **request\_async** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) request, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) arguments **)** <u>_coroutine_</u>  
  
	Forwards the request to one of `DiscordRESTAPIAdapter` sub client specified by
	`type. `request` is the request endpoint. `arguments` is the request arguments.  
________________

- <a name="method-cdn-download-async"></a>[Resource](https://docs.godotengine.org/en/3.5/classes/class_resource.html) **cdn\_download\_async** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)** <u>_coroutine_</u>  
  
	Downloads the resource at the given `url`.
  
